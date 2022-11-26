import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ShopLayout } from '../../components/layout'
import { Box, Button, Grid, Typography } from '@mui/material'
import {
  ItemCounter,
  ProductSlideshow,
  SizeSelector,
} from '../../components/products'
import { IProduct } from '../../interfaces'
import { getAllProductSlug, getProductBySlug } from '../../database'

interface Props {
  product: IProduct
}

const ProductPage: NextPage<Props> = ({ product }) => {
  return (
    <div>
      <ShopLayout title={product.title} pageDescription={product.description}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={7}>
            <ProductSlideshow images={product.images} />
          </Grid>

          <Grid item xs={12} sm={5}>
            <Box display="flex" flexDirection="column">
              {/*Titulos*/}
              <Typography variant="h1" component="h1">
                {product.title}
              </Typography>
              <Typography variant="subtitle1" component="h2">
                ${product.price}
              </Typography>

              {/*Cantidad*/}
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2">Cantidad</Typography>
                <ItemCounter />
                <SizeSelector
                  selectedSize={product.sizes[0]}
                  sizes={product.sizes}
                />
              </Box>

              {/*Agregar al carrito*/}
              <Button color="secondary" className="circular-btn">
                Agregar al carrito
              </Button>

              {/*<Chip label="No hay disponibles" color="error" variant="outlined" />*/}

              {/*Descripción*/}
              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle2">Descripción</Typography>
                <Typography variant="body2">{product.description}</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ShopLayout>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getAllProductSlug()

  const paths = slugs.map(value => ({
    params: {
      slug: value.slug,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = '' } = params as { slug: string }
  const product = await getProductBySlug(slug)

  if (!product) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24,
  }
}
export default ProductPage
