export const Query = {
  // Assuming context contains the user information
  me: async (_, __, ctx) => {
    const userId = ctx.userId;
    if (!userId) {
      throw new Error("Not authenticated");
    }

    return ctx.prisma.user.findUnique({
      where: { id: userId },
    });
  },

  user: async (_, { id }, ctx) => {
    return ctx.prisma.user.findUnique({
      where: { id },
    });
  },

  users: async (_, __, ctx) => {
    return ctx.prisma.user.findMany();
  },

  post: async (_, { id }, ctx) => {
    return ctx.prisma.post.findUnique({
      where: { id },
    });
  },

  posts: async (_, __, ctx) => {
    return ctx.prisma.post.findMany();
  },
};
