/*
  Warnings:

  - Added the required column `title` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vote` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "vote" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Comments" (
    "postId" INTEGER NOT NULL,
    "accoutId" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "like" INTEGER NOT NULL DEFAULT 0,
    "dislike" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Comments_postId_key" ON "Comments"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "Comments_accoutId_key" ON "Comments"("accoutId");

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_accoutId_fkey" FOREIGN KEY ("accoutId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
