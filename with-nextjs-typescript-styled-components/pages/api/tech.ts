// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Technology } from "../../services/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Technology[] | string>
) {
  setTimeout(() => {
    res.status(200).json([
      { id: 1, name: "react" },
      { id: 2, name: "jest" },
      { id: 3, name: "styled-components" },
      { id: 4, name: "rollup" },
      { id: 5, name: "react-testing-library" },
    ]);
  }, 3000);

  // setTimeout(() => {
  //   res.status(400).json("algo de errado aconteceu");
  // }, 3000);
}
