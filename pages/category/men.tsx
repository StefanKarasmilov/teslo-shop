import { NextPage } from 'next'
import { Typography } from '@mui/material'
import { ShopLayout } from '../../components/layout'
import { FullScreenLoading } from '../../components/ui'
import { ProductList } from '../../components/products'
import { useProducts } from '../../hooks'

const MenPage: NextPage = () => {
  const { products, isLoading } = useProducts('/products?gender=men')

  return (
    <ShopLayout
      title="Teslo-Shop - Men"
      pageDescription="Encuentra los mejores productos de hombres aquí"
    >
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos de hombres
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  )
}

export default MenPage
