import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { AccountBoxOutlined, CellTowerOutlined, MoreVertOutlined, TrendingUp } from '@mui/icons-material';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';

const salesData = [
    {
        stats: '245k',
        title: "Sales",
        color: "#fbc531",
        icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />
    },
    {
        stats: '12.5k',
        title: "Customers",
        color: "#4cd137",
        icon: <AccountBoxOutlined sx={{ fontSize: "1.75rem" }} />
    },
    {
        stats: '1.5k',
        title: "Products",
        color: "#c23616",
        icon: <CellTowerOutlined sx={{ fontSize: "1.75rem" }} />
    },
    {
        stats: '120.5k',
        title: "Revenue",
        color: "#40739e",
        icon: <CurrencyDollarIcon sx={{ fontSize: "1.75rem" }} />
    },
];

const renderStats = () => {
    return salesData.map((item, index) => (
        <Grid item xs={12} sm={3} key={index}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                    variant='rounded'
                    sx={{
                        mr: 3,
                        width: 44,
                        height: 44,
                        boxShadow: 3,
                        color: "white",
                        background: item.color 
                    }}
                >
                    {item.icon}
                </Avatar>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='caption'>{item.title}</Typography>
                    <Typography variant='h6'>{item.stats}</Typography>
                </Box>
            </Box>
        </Grid>
    ))
}

const MonthlyOverview = () => {
    return (
        <Card sx={{ bgcolor: "#353b48", color: "white" }} className='my-5'>
            <CardHeader
                title="Monthly Overview"
                action={
                    <IconButton size='small'>
                        <MoreVertOutlined />
                    </IconButton>
                }
                subheader={
                    <Typography variant='body2'>
                        <Box component="span" sx={{ fontWeight: 600, color: "white" }}>Total 48.5% growth📶 </Box>
                        This month
                    </Typography>
                }
                titleTypographyProps={{
                    sx: {
                        mb: 2.5,
                        lineHeight: '2rem !important',
                        letterSpacing: '.15px !important',

                    }
                }}
            />
            <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
                <Grid container spacing={[5, 0]}>
                    {renderStats()}
                </Grid>
            </CardContent>
        </Card>
    )
}

export default MonthlyOverview;
