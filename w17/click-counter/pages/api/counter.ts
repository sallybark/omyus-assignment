import type { NextApiRequest, NextApiResponse } from "next";
// 자바스크립트로 Prisma db 조작을 할 수 있도록 도와주는 도구
const { PrismaClient } = require("@prisma/client");
const client = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    const count = await client.counter.findMany({
      where: {
        id: 1,
      },
      select: {
        click: true,
      },
    });
    return res.status(200).json(count);
  }
  if (req.method == "POST") {
    const result = await client.counter.update({
      where: {
        id: 1,
      },
      data: {
        // click 칼럼의 값을 증가시키기 위해 increment 사용
        click: { increment: 1 },
      },
    });

    return res.status(200).json({ ok: true });
  }
}
