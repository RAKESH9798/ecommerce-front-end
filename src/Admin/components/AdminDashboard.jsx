import { Grid } from '@mui/material';
import React from 'react'
import Achievement from './Achievement';
import MonthlyOverview from './MonthlyOverview';
import ProductsTable from './ProductsTable';
import OrdersTable from './OrdersTable';

const AdminDashboard = () => {
  return (
    <div className='px-10'>
      <Grid container spacing={3}>
        <Grid className='shadow-lg shadow-gray-600' item xs={12} md={4}>
          <Achievement/>
        </Grid>
        <Grid className='shadow-lg shadow-gray-600' item xs={12} md={8}>
          <MonthlyOverview/>
        </Grid>
        <Grid className='shadow-lg shadow-gray-600' item xs={12} md={6}>
          <ProductsTable/>
        </Grid>
        <Grid className='shadow-lg shadow-gray-600' item xs={12} md={6}>
          <OrdersTable/>
        </Grid>
      </Grid>
    </div>
  )
}

export default AdminDashboard;
