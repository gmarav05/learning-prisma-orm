"use server";

import { prisma } from "../lib/db.js";

export const seedDB = async () => {
  const post = await prisma.post.createMany({
    data: {
      title: "Hello World",
      description: "This is my first post",
    },
  });
  console.log(post);
}

export const createPost = async (title, description) => {
  const post = await prisma.post.create({
    data: {
      title,
      description,
    },
  });

  return {
    success: true,
    data: post,
  }

}