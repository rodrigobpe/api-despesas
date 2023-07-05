/*
  Warnings:

  - You are about to drop the column `BillId` on the `bill` table. All the data in the column will be lost.
  - You are about to alter the column `date` on the `bill` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - The required column `billId` was added to the `bill` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE `bill` DROP FOREIGN KEY `bill_BillId_fkey`;

-- AlterTable
ALTER TABLE `bill` DROP COLUMN `BillId`,
    ADD COLUMN `billId` VARCHAR(191) NOT NULL,
    MODIFY `date` TIMESTAMP NOT NULL;

-- AddForeignKey
ALTER TABLE `bill` ADD CONSTRAINT `bill_billId_fkey` FOREIGN KEY (`billId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
