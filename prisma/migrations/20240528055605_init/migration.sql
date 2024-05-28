/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `UserDetail` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserDetail_userId_key" ON "UserDetail"("userId");
