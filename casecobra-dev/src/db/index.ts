// importing prisma client class which is a class that is used to interact with the database
import { PrismaClient } from '@prisma/client'

// declaring global variable to store the prisma client instance

declare global {
  var cachedPrisma: PrismaClient
}

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }

  prisma = global.cachedPrisma
}

export const db = prisma
