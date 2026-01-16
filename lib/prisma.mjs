import { PrismaClient } from "@prisma/client";

// L'initialisation standard suffit largement pour SQLite
const prisma = new PrismaClient({});

export { prisma };
