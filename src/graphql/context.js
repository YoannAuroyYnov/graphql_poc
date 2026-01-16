import { prisma } from "../../lib/prisma.mjs";

export const context = async () => {
  // Extract user information from request headers
  // and return userId in the context
  return {
    prisma,
    userId: 1,
  };
};
