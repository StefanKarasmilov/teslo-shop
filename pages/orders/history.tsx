import { NextPage } from 'next'
import { ShopLayout } from '../../components/layout'
import { Chip, Grid, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { NextLink } from '../../components/ui'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullname', headerName: 'Nombre Completo', width: 300 },
  {
    field: 'paid',
    headerName: 'Pagada',
    description: 'Muestra información si está pagada la orden',
    width: 200,
    renderCell: (params: GridRenderCellParams) => {
      return params.row.paid ? (
        <Chip color="success" label="Pagada" variant="outlined" />
      ) : (
        <Chip color="error" label="No pagada" variant="outlined" />
      )
    },
  },
  {
    field: 'order',
    headerName: 'Ver orden',
    width: 200,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
      return <NextLink underline href={`/orders/${params.row.id}`}>Ver orden</NextLink>
    },
  },
]

const rows = [
  { id: 1, paid: true, fullname: 'Stefan Karasmilov' },
  { id: 2, paid: false, fullname: 'Gorka Moreno' },
  { id: 3, paid: true, fullname: 'Pablo Albizu' },
  { id: 5, paid: true, fullname: 'Javier Gutierrez' },
  { id: 6, paid: true, fullname: 'Sancho Panza' },
]

const HistoryPage: NextPage = () => {
  return (
    <ShopLayout
      title="Historial de ordenes"
      pageDescription="Historial de ordenes"
    >
      <Typography variant="h1" component="h1">
        Historial de ordenes
      </Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid
            columns={columns}
            rows={rows}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default HistoryPage
