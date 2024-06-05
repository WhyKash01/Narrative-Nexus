/*
  Warnings:

  - A unique constraint covering the columns `[Prophoto]` on the table `Blog` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profilePhoto]` on the table `UserDetail` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Prophoto` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Username` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "Prophoto" TEXT NOT NULL,
ADD COLUMN     "Username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Blog_Prophoto_key" ON "Blog"("Prophoto");

-- CreateIndex
CREATE UNIQUE INDEX "UserDetail_profilePhoto_key" ON "UserDetail"("profilePhoto");
