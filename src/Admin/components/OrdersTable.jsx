import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from '../../State/AdminOrderControlerState/Action';
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const OrdersTable = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event,index)=> {
    const newAnchorElArray=[...anchorEl];
    newAnchorElArray[index]=event.currentTarget;
    setAnchorEl(newAnchorElArray);
  };
  const handleClose = (index) => {
    const newAnchorElArray=[...anchorEl];
    newAnchorElArray[index]=null;
    setAnchorEl(newAnchorElArray);
  };


  const dispatch=useDispatch();

  const {adminOrder} =useSelector(store=>store);

  useEffect(()=>{
    dispatch(getOrders())
  },[adminOrder.confirmed,adminOrder.shipped,adminOrder.delivered,adminOrder.deletedOrder]);

  const handleShippedOrder=(orderId)=>{
    dispatch(shipOrder(orderId));
    handleClose();
  };

  const handleConfirmedOrder=(orderId)=>{
    dispatch(confirmOrder(orderId));
    handleClose();
  };

  const handleDeliveredOrder=(orderId)=>{
    dispatch(deliveredOrder(orderId));
    handleClose();
  };

  const handleDeleteOrder=(orderId)=>{
    dispatch(deleteOrder(orderId));
    handleClose();
  };

  return (
    <div>
      <Card className="mt-2 p-10">
        <CardHeader title="All products"></CardHeader>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Update</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders?.map((item,index) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    <AvatarGroup max={3} sx={{justifyContent:"start"}}>
                     {item.orderItems.map((orderItem)=><Avatar src={orderItem.product.imageUrl}></Avatar>)}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell component="th" scope="item">
                  {item.orderItems.map((orderItem)=><p src={orderItem.product.title}></p>)}
                  </TableCell>
                  <TableCell align="right">{item.category.name}</TableCell>
                  <TableCell align="right">{item.totalPrice}</TableCell>
                  <TableCell align="right">
                    <span
                      className={` text-white px-5 py-2 rounded-full
                        ${item.orderStatus==="CONFIRMED"?"bg-[green]":
                        item.orderStatus==="PLACED"?"bg-[gray]":
                        item.orderStatus==="PENDING"?"bg-[yellow]":
                        item.orderStatus==="SHIPPED"?"bg-[blue]":"bg-[red]"}
                      `}
                    >
                      {item.orderStatus}
                    </span>
                  </TableCell>
                  <TableCell align="right">
                  <Button
                      id="basic-button"
                      aria-controls={`basic-menu-${item.id}`}
                      aria-haspopup="true"
                      aria-expanded={Boolean(anchorEl[index])}
                      onClick={handleClick}
                    >
                      Status
                    </Button>
                    <Menu
                      id={`basic-menu-${item.id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={()=>handleClose(index)}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={()=>handleConfirmedOrder(item.id)}>Confirmed Order</MenuItem>
                      <MenuItem onClick={()=>handleShippedOrder(item.id)}>Shipped Order</MenuItem>
                      <MenuItem onClick={()=>handleDeliveredOrder(item.id)}>Delivered Order</MenuItem>
                    </Menu>
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="outlined" onClick={()=>handleDeleteOrder(item.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  )
}

export default OrdersTable;
