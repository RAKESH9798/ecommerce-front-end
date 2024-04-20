import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../State/Product/Action';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
];

const CreateProductForm = () => {
  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountPercent: "",
    size: initialSizes,
    quantity: "",
    topLevelCategory: "",
    secondLevelCategory: "",
    thirdLevelCategory: "",
    description: "",
  });

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name === "size_quantity" ? name = "quantity" : name = e.target.name;

    const sizes = [...productData.size];
    sizes[index][name] = value;

    setProductData((prevState) => ({
      ...prevState,
      [name]: sizes,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(productData));
    console.log(productData);
  };

  return (
    <div className='p-10'>
      <Typography variant='h3' sx={{ textAlign: "center" }} className='py-5 text-center'>
        Add New Product
      </Typography>
      <form onSubmit={handleSubmit} className='min-h-screen'>
        <Grid container spacing={2}>
          {/* Image URL */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image Url"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
            />
          </Grid>
          {/* Brand */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>
          {/* Title */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>
          {/* Color */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={productData.color}
              onChange={handleChange}
            />
          </Grid>
          {/* Quantity */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
            />
          </Grid>
          {/* Price */}
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
            />
          </Grid>
          {/* Discounted Price */}
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
            />
          </Grid>
          {/* Discounted Percent */}
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Percent"
              name="discountedPercent"
              value={productData.discountedPercent}
              onChange={handleChange}
            />
          </Grid>
          {/* Top Level Category */}
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name='topLevelCategory'
                value={productData.topLevelCategory}
                onChange={handleChange}
                label="Top Level Category"
              >
                <MenuItem>Men</MenuItem>
                <MenuItem>Women</MenuItem>
                <MenuItem>Kids</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* Second Level Category */}
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name='secondLevelCategory'
                value={productData.secondLevelCategory}
                onChange={handleChange}
                label="Second Level Category"
              >
                <MenuItem>Clothing</MenuItem>
                <MenuItem>Accessories</MenuItem>
                <MenuItem>Brands</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* Third Level Category */}
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name='thirdLevelCategory'
                value={productData.thirdLevelCategory}
                onChange={handleChange}
                label="Third Level Category"
              >
                <MenuItem>Tops</MenuItem>
                <MenuItem>Dresses</MenuItem>
                <MenuItem>T-shirts</MenuItem>
                <MenuItem>Saree</MenuItem>
                <MenuItem>Lehanga</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* Description */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              id='outlined-multiline-static'
              label="Description"
              multiline
              name="description"
              rows={3}
              value={productData.description}
              onChange={handleChange}
            />
          </Grid>
          {/* Sizes */}
          {productData.size.map((size, index) => (
            <Grid container item spacing={3} key={index}>
              {/* Size Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Size Name"
                  name="name"
                  value={size.name}
                  onChange={(event) => handleSizeChange(event, index)}
                  required
                />
              </Grid>
              {/* Size Quantity */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Quantity"
                  name="size_quantity"
                  value={size.quantity}
                  onChange={(event) => handleSizeChange(event, index)}
                  required
                />
              </Grid>
            </Grid>
          ))}
          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              variant='contained'
              sx={{ p: 1.8 }}
              className='py-20'
              size='large'
              type='submit'
            >
              Add New Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateProductForm;
