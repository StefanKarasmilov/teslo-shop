import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { IProduct } from '../../../interfaces'
import { Product } from '../../../models'

type Data = { message: string } | IProduct

const getProductBySlug = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) => {
  const { slug } = req.query

  await db.connect()

  const products = await Product.findOne({ slug })
    .select('title images price inStock slug -_id')
    .lean()
  await db.disconnect()

  if (products === undefined || products === null) {
    return res.status(404).json({ message: 'Not found' })
  }

  res.status(200).json(products)
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  switch (req.method) {
    case 'GET':
      return getProductBySlug(req, res)
    default:
      res.status(400).json({ message: 'Bad request' })
  }
}
