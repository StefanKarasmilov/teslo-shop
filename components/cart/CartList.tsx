import { initialData } from '../../database/products'
import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import { NextLink } from '../ui'
import { ItemCounter } from '../products'
import { FC } from 'react'

const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

interface Props {
  editable?: boolean
}

export const CartList: FC<Props> = ({ editable = false }) => {
  return (
    <>
      {productInCart.map(product => {
        return (
          <Grid container spacing={2} key={product.slug} sx={{ mb: 1 }}>
            <Grid item xs={3}>
              {/*LLevar a la página del producto*/}
              <NextLink href="/product/slug">
                <CardActionArea>
                  <CardMedia
                    image={`/products/${product.images[0]}`}
                    component="img"
                    sx={{ borderRadius: '5px' }}
                  />
                </CardActionArea>
              </NextLink>
            </Grid>

            <Grid item xs={7}>
              <Box display="flex" flexDirection="column">
                <Typography variant="body1">{product.title}</Typography>
                <Typography variant="body1">
                  Talla: <strong>M</strong>
                </Typography>
                {editable ? (
                  <ItemCounter />
                ) : (
                  <Typography variant="h5">3 items</Typography>
                )}
              </Box>
            </Grid>

            <Grid
              item
              xs={2}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Typography variant="subtitle1">${product.price}</Typography>
              {editable && (
                <Button variant="text" color="secondary">
                  Remover
                </Button>
              )}
            </Grid>
          </Grid>
        )
      })}
    </>
  )
}
