import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Toolbar,
  Typography,
} from '@mui/material'
import {
  ClearOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material'
import { NextLink } from './NextLink'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { UiContext } from '../../context'

export const Navbar = () => {
  const { asPath, push } = useRouter()
  const { toggleSideMenu } = useContext(UiContext)

  const [searchTerm, setSearchTerm] = useState('')
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return

    push({ pathname: `/search/${searchTerm}` })
  }

  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/">
          <Typography variant="h6" color="black" sx={{ cursor: 'pointer' }}>
            Teslo | Shop
          </Typography>
        </NextLink>

        <Box flex={1} />

        <Box
          className="fadeIn"
          sx={{
            display: isSearchVisible ? 'none' : { xs: 'none', sm: 'block' },
          }}
        >
          <NextLink href="/category/men">
            <Button color={asPath === '/category/men' ? 'primary' : 'info'}>
              Hombres
            </Button>
          </NextLink>
          <NextLink href="/category/women">
            <Button color={asPath === '/category/women' ? 'primary' : 'info'}>
              Mujeres
            </Button>
          </NextLink>
          <NextLink href="/category/kid">
            <Button color={asPath === '/category/kid' ? 'primary' : 'info'}>
              Niños
            </Button>
          </NextLink>
        </Box>

        <Box flex={1} />

        {isSearchVisible ? (
          <Input
            autoFocus
            className="fadeIn"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            onKeyDown={e => (e.key === 'Enter' ? onSearchTerm() : null)}
            type="text"
            placeholder="Buscar..."
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setIsSearchVisible(false)}
                >
                  <ClearOutlined />
                </IconButton>
              </InputAdornment>
            }
          />
        ) : (
          <IconButton
            onClick={() => setIsSearchVisible(true)}
            className="fadeIn"
          >
            <SearchOutlined />
          </IconButton>
        )}

        <IconButton
          sx={{ display: { xs: 'flex', sm: 'none' } }}
          onClick={toggleSideMenu}
        >
          <SearchOutlined />
        </IconButton>

        <NextLink href="/cart">
          <IconButton>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </NextLink>

        <Button onClick={toggleSideMenu}>Menú</Button>
      </Toolbar>
    </AppBar>
  )
}
