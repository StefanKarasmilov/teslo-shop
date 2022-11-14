import { NextPage } from 'next'
import { ShopLayout } from '../../components/layout'
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Typography,
} from '@mui/material'
import { CartList, OrderSummary } from '../../components/cart'
import { NextLink } from '../../components/ui'
import { CreditScoreOutlined } from '@mui/icons-material'

const OrderPage: NextPage = () => {
  return (
    <ShopLayout
      title="Resumen de la orden 1231"
      pageDescription="Resumen de la orden"
    >
      <Typography variant="h1" component="h1">
        Orden: 123
      </Typography>

      {/*<Chip*/}
      {/*  sx={{ my: 2 }}*/}
      {/*  label="Pendiente de pago"*/}
      {/*  variant="outlined"*/}
      {/*  color="error"*/}
      {/*  icon={<CreditCardOffOutlined />}*/}
      {/*/>*/}

      <Chip
        sx={{ my: 2 }}
        label="Pagada"
        variant="outlined"
        color="success"
        icon={<CreditScoreOutlined />}
      />

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen (3 productos)</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">
                  Dirección de entrega
                </Typography>
                <NextLink href="/checkout/address">Editar</NextLink>
              </Box>

              <Typography>Stefan Karasmilov</Typography>
              <Typography>Carretera Artajona</Typography>
              <Typography>Tafalla, 31300</Typography>
              <Typography>España</Typography>
              <Typography>+34 664 11 32 23</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="end">
                <NextLink href="/cart">Editar</NextLink>
              </Box>

              <OrderSummary />
              <Box sx={{ mt: 3 }}>
                {/*TODO: */}
                <h1>Pagar</h1>
                <Chip
                  sx={{ my: 2 }}
                  label="Pagada"
                  variant="outlined"
                  color="success"
                  icon={<CreditScoreOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default OrderPage
