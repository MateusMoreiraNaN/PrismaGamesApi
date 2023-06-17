-- CreateTable
CREATE TABLE `games_categories` (
    `id` VARCHAR(191) NOT NULL,
    `id_game` VARCHAR(191) NOT NULL,
    `id_category` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `games_categories` ADD CONSTRAINT `games_categories_id_game_fkey` FOREIGN KEY (`id_game`) REFERENCES `games`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `games_categories` ADD CONSTRAINT `games_categories_id_category_fkey` FOREIGN KEY (`id_category`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
