/*
  Warnings:

  - You are about to drop the column `altText` on the `Manufacturer` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Manufacturer` table. All the data in the column will be lost.
  - You are about to drop the column `infoText` on the `Manufacturer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Manufacturer" DROP COLUMN "altText",
DROP COLUMN "image",
DROP COLUMN "infoText",
ADD COLUMN     "brandText" TEXT,
ADD COLUMN     "logo" TEXT,
ADD COLUMN     "logoAltText" TEXT,
ADD COLUMN     "showcaseAltText" TEXT,
ADD COLUMN     "showcaseText" TEXT;
