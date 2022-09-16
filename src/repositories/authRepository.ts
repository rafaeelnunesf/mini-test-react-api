import { prisma } from "./../database.js";
import { User } from "@prisma/client";

export type UserCredentials = Omit<User, "id">;

async function create(userCredentials: UserCredentials) {
  return prisma.user.create({
    data: userCredentials,
  });
}

export default {
  create,
};
