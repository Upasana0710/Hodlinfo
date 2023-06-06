-- CreateTable
CREATE TABLE "info" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "last" TEXT NOT NULL,
    "buy" TEXT NOT NULL,
    "sell" TEXT NOT NULL,
    "volume" TEXT NOT NULL,
    "base_unit" TEXT NOT NULL,

    CONSTRAINT "info_pkey" PRIMARY KEY ("id")
);
