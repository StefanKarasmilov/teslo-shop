import { NextPage } from 'next'
import { ShopLayout } from '../../components/layout'
import { Box, Typography } from '@mui/material'
import { RemoveShoppingCartOutlined } from '@mui/icons-material'
import { NextLink } from '../../components/ui'

const EmptyCart: NextPage = () => {
  return (
    <ShopLayout
      title="Carrito vacío"
      pageDescription="No hay artículos en el carrito"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography>Su carrito está vacío</Typography>
          <NextLink href="/" style={{fontSize: 36}}>Regresar</NextLink>
        </Box>
      </Box>
    </ShopLayout>
  )
}

export default EmptyCart
