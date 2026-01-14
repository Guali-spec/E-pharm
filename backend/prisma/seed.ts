import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Seed E-Pharm (Burkina Faso -> Koudougou)
 * - Pharmacies (Koudougou)
 * - Medicines (simulés)
 * - Stock (quantité + prixXof) par pharmacie
 *
 * Objectif pédagogique: comprendre comment "remplir" une DB proprement
 */
async function main() {
  console.log('🌱 Seeding database...');

  // 1) Données pharmacies (Koudougou)
  const pharmacies = [
    { name: 'Pharmacie Wendpanga', city: 'Koudougou', address: 'Secteur 1', phone: '+226 70 00 00 01' },
    { name: 'Pharmacie de la Réconciliation', city: 'Koudougou', address: 'Secteur 2', phone: '+226 70 00 00 02' },
    { name: 'Pharmacie Saint Joseph', city: 'Koudougou', address: 'Secteur 5', phone: '+226 70 00 00 03' },
  ];

  // On crée (ou récupère) les pharmacies.
  // "upsert" = si ça existe (unique), update, sinon create.
  // Ici notre modèle n'a pas de champ unique sur "name", donc on va faire un find + create simple.
  const createdPharmacies = [];
  for (const p of pharmacies) {
    const existing = await prisma.pharmacy.findFirst({
      where: { name: p.name, city: p.city },
    });

    if (existing) {
      createdPharmacies.push(existing);
    } else {
      const created = await prisma.pharmacy.create({ data: p });
      createdPharmacies.push(created);
    }
  }

  console.log(`✅ Pharmacies: ${createdPharmacies.length}`);

  // 2) Données médicaments (simulés)
  const medicines = [
    { name: 'Paracétamol', form: 'comprimé', dosage: '500mg', description: 'Douleur / fièvre' },
    { name: 'Ibuprofène', form: 'comprimé', dosage: '400mg', description: 'Anti-inflammatoire' },
    { name: 'Amoxicilline', form: 'gélule', dosage: '500mg', description: 'Antibiotique (simulation)' },
    { name: 'Sérum physiologique', form: 'solution', dosage: '0.9%', description: 'Nettoyage' },
    { name: 'Vitamine C', form: 'comprimé', dosage: '1000mg', description: 'Complément (simulation)' },
  ];

  const createdMedicines = [];
  for (const m of medicines) {
    const existing = await prisma.medicine.findFirst({
      where: { name: m.name, form: m.form, dosage: m.dosage },
    });

    if (existing) {
      createdMedicines.push(existing);
    } else {
      const created = await prisma.medicine.create({ data: m });
      createdMedicines.push(created);
    }
  }

  console.log(`✅ Medicines: ${createdMedicines.length}`);

  // 3) Stock (liaison Pharmacy <-> Medicine)
  // On crée un stock pour chaque couple (pharmacie, médicament)
  // Note: on a @@unique([pharmacyId, medicineId]) donc on doit éviter les doublons.
  let stockCount = 0;

  for (const ph of createdPharmacies) {
    for (const med of createdMedicines) {
      // Valeurs simulées simples (pédagogique)
      const quantity = Math.floor(Math.random() * 120); // 0..119
      const priceXof = 200 + Math.floor(Math.random() * 1800); // 200..1999

      await prisma.stock.upsert({
        where: {
          pharmacyId_medicineId: {
            pharmacyId: ph.id,
            medicineId: med.id,
          },
        },
        update: { quantity, priceXof },
        create: {
          pharmacyId: ph.id,
          medicineId: med.id,
          quantity,
          priceXof,
        },
      });

      stockCount += 1;
    }
  }

  console.log(`✅ Stocks upserted: ${stockCount}`);
  console.log('🌱 Seed done.');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
