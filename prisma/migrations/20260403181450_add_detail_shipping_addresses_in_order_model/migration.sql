/*
  Warnings:

  - Added the required column `city` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `province` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipping_address` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "order_item" DROP CONSTRAINT "order_item_product_id_fkey";

-- AlterTable
ALTER TABLE "order" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "province" TEXT NOT NULL,
ADD COLUMN     "shipping_address" JSONB NOT NULL;
