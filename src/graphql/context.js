import { prisma } from "../../lib/prisma.mjs";

export const context = async ({ req }) => {
  const authHeader = req.headers.authorization || "";

  // Logique simple pour récupérer le token (ex: "Bearer <token>")
  // Dans un vrai projet, vous utiliseriez jsonwebtoken (jwt.verify) ici
  const token = authHeader.replace("Bearer ", "");

  // Simulation: si on a un token, on considère que c'est l'ID utilisateur
  // TODO: Remplacer par : const userId = getUserFromToken(token);
  const userId = token ? token : null;

  return {
    prisma,
    userId,
  };
};
