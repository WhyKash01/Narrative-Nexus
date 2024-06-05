/*
  Warnings:

  - Made the column `bio` on table `UserDetail` required. This step will fail if there are existing NULL values in that column.
  - Made the column `profilePhoto` on table `UserDetail` required. This step will fail if there are existing NULL values in that column.
  - Made the column `coverPhoto` on table `UserDetail` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "UserDetail_profilePhoto_key";

-- AlterTable
ALTER TABLE "Blog" ALTER COLUMN "Prophoto" DROP DEFAULT;

-- AlterTable
ALTER TABLE "UserDetail" ALTER COLUMN "bio" SET NOT NULL,
ALTER COLUMN "bio" SET DEFAULT '',
ALTER COLUMN "profilePhoto" SET NOT NULL,
ALTER COLUMN "profilePhoto" SET DEFAULT 'https://utfs.io/f/2d51fa23-2392-416d-a240-86b930bb32b8-1ufikm.png',
ALTER COLUMN "coverPhoto" SET NOT NULL,
ALTER COLUMN "coverPhoto" SET DEFAULT 'https://utfs.io/f/2d51fa23-2392-416d-a240-86b930bb32b8-1ufikm.png';
