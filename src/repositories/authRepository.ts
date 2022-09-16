import { prisma } from "./../database.js";
import { User } from "@prisma/client";

export type UserCredentials = Omit<User, "id">;

async function create(userCredentials: UserCredentials) {
  return prisma.user.create({
    data: userCredentials,
  });
}

async function findByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}

export default {
  create,
  findByEmail,
};
