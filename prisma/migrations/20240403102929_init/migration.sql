-- CreateTable
CREATE TABLE "Certification" (
    "id" SERIAL NOT NULL,
    "creadtedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "fancyName" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "content" TEXT,
    "image" TEXT,
    "showcaseImage" TEXT,
    "href" TEXT,
    "altText" TEXT,
    "infoText" TEXT,

    CONSTRAINT "Certification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Manufacturer" (
    "id" SERIAL NOT NULL,
    "creadtedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "fancyName" TEXT NOT NULL,
    "image" TEXT,
    "showcaseImage" TEXT,
    "href" TEXT,
    "altText" TEXT,
    "infoText" TEXT,

    CONSTRAINT "Manufacturer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "creadtedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "fancyName" TEXT NOT NULL,
    "manufacturerId" INTEGER NOT NULL,
    "image" TEXT,
    "href" TEXT,
    "altText" TEXT,
    "infoText" TEXT,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Technology" (
    "id" SERIAL NOT NULL,
    "creadtedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "fancyName" TEXT NOT NULL,
    "manufacturerId" INTEGER NOT NULL,
    "image" TEXT,
    "showcaseImage" TEXT,
    "href" TEXT,
    "altText" TEXT,
    "infoText" TEXT,

    CONSTRAINT "Technology_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Technology" ADD CONSTRAINT "Technology_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
