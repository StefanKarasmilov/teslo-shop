import { NextPage } from 'next'
import { ShopLayout } from '../../components/layout'
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material'
import { CartList, OrderSummary } from '../../components/cart'
import { NextLink } from '../../components/ui'

const SummaryPage: NextPage = () => {
  return (
    <ShopLayout
      title="Resumen de orden"
      pageDescription="Resumen de la orden"
    >
      <Typography variant="h1" component="h1">
        Resumen de la orden
      </Typography>
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
                <Typography variant="subtitle1">Dirección de entrega</Typography>
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
                <Button color="secondary" className="circular-btn" fullWidth>
                  Confirmar orden
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default SummaryPage
