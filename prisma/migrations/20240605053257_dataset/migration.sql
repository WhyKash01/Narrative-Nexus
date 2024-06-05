/*
  Warnings:

  - You are about to drop the column `Username` on the `Blog` table. All the data in the column will be lost.
  - Added the required column `Uname` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blogId` to the `Comments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_postId_fkey";

-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "Username",
ADD COLUMN     "Uname" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Comments" ADD COLUMN     "blogId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_Uname_fkey" FOREIGN KEY ("Uname") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_Prophoto_fkey" FOREIGN KEY ("Prophoto") REFERENCES "UserDetail"("profilePhoto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
