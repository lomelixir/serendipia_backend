-- CreateTable
CREATE TABLE `Orders` (
    `id` VARCHAR(100) NOT NULL,
    `comprador` VARCHAR(100) NOT NULL,
    `destinatario` VARCHAR(100) NOT NULL,
    `direccion` VARCHAR(100) NOT NULL,
    `telefono` INTEGER NOT NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Products` (
    `id` VARCHAR(100) NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `precio` INTEGER NOT NULL,
    `descripcion` VARCHAR(100) NOT NULL,
    `categoria` VARCHAR(100) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `orders_products_FK` FOREIGN KEY (`id`) REFERENCES `Products`(`id`) ON DELETE NO ACTION ON UPDATE RESTRICT;
