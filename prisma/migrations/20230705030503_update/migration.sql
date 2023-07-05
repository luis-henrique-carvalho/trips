/*
  Warnings:

  - You are about to drop the column `highlihts` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the `TripReservations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TripReservations" DROP CONSTRAINT "TripReservations_tripId_fkey";

-- DropForeignKey
ALTER TABLE "TripReservations" DROP CONSTRAINT "TripReservations_userId_fkey";

-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "highlihts",
DROP COLUMN "imageUrl",
ADD COLUMN     "highlights" TEXT[],
ADD COLUMN     "imagesUrl" TEXT[];

-- DropTable
DROP TABLE "TripReservations";

-- CreateTable
CREATE TABLE "TripReservation" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "totalPaid" DECIMAL(8,2) NOT NULL,

    CONSTRAINT "TripReservation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TripReservation" ADD CONSTRAINT "TripReservation_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripReservation" ADD CONSTRAINT "TripReservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
