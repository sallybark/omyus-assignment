-- npx prisma migrate dev --name 
-- CreateTable
CREATE TABLE `Counter` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `click` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
