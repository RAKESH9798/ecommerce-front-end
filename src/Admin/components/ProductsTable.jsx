import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, findProducts } from "../../State/Product/Action";

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);

  console.log("products----", products);

  const handleProductDelete=(productId)=>{
    dispatch(deleteProduct(productId));
  }

  useEffect(() => {
    const data = {
      category: "mens_kurta",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 10000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 5,
      stock: "",
    };
    dispatch(findProducts(data));
  }, [products.deletedProduct]);

  return (
    <div className="p-5">
      <Card className="mt-2">
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
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.products?.content?.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    <Avatar src={item.imageUrl}></Avatar>
                  </TableCell>
                  <TableCell component="th" scope="item">
                    {item.title}
                  </TableCell>
                  <TableCell align="right">{item.category.name}</TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">
                    <Button onClick={()=>handleProductDelete(item._id)} variant="outlined">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default ProductsTable;