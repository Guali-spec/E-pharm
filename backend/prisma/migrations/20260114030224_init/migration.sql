-- CreateTable
CREATE TABLE "public"."Pharmacy" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT,
    "phone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pharmacy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Medicine" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "form" TEXT,
    "dosage" TEXT,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Medicine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Stock" (
    "id" TEXT NOT NULL,
    "pharmacyId" TEXT NOT NULL,
    "medicineId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "priceXof" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Stock_pharmacyId_medicineId_key" ON "public"."Stock"("pharmacyId", "medicineId");

-- AddForeignKey
ALTER TABLE "public"."Stock" ADD CONSTRAINT "Stock_pharmacyId_fkey" FOREIGN KEY ("pharmacyId") REFERENCES "public"."Pharmacy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Stock" ADD CONSTRAINT "Stock_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "public"."Medicine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
