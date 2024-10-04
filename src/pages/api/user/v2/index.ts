
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
  name: string;
  age:number;
  isStudent:boolean;
  city:string;
  country:string;
  version:string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: "John Doe",age:20,city:"mumbai",country:"india",isStudent:false,version:"v2"});
}
