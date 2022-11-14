import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { NextLink } from './NextLink'

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/">
          <Typography variant="h6">Teslo | Shop</Typography>
        </NextLink>

        <Box flex={1} />

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <NextLink href="/category/men">
            <Button>Hombres</Button>
          </NextLink>
          <NextLink href="/category/women">
            <Button>Mujeres</Button>
          </NextLink>
          <NextLink href="/category/kid">
            <Button>Niños</Button>
          </NextLink>
        </Box>

        <Box flex={1} />

        <IconButton>
          <SearchOutlined />
        </IconButton>

        <NextLink href="/cart">
          <IconButton>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </NextLink>

        <Button>Menú</Button>
      </Toolbar>
    </AppBar>
  )
}
