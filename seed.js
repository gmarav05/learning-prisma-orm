import { prisma } from "./lib/db.js";

async function main() {
  const post = await prisma.post.createMany({
    data: {
      title: "Hello World",
      description: "This is my first post",
    },
  });
  console.log(post);
}

main()