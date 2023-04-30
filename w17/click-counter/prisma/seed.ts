import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
  const init = await client.counter.create({
    data: {
      click: 0,
    },
  });
}

main()
  .catch((e) => console.log(e))
  .finally(() => client.$disconnect);
