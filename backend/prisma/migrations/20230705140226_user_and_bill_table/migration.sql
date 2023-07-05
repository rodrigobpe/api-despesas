-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(60) NOT NULL,
    `email` VARCHAR(60) NOT NULL,
    `password` VARCHAR(60) NOT NULL,
    `isAdmin` BOOLEAN NOT NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bill` (
    `id` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `title` VARCHAR(100) NULL,
    `date` TIMESTAMP NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `bill` ADD CONSTRAINT `bill_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
