import { Box, Button, Grid } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";
import { store } from "../../../State/store";

function DeliveryAddressForm() {

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {auth}=useSelector(store=>store);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const address = {
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            streetAddress:data.get("address"),
            city:data.get("city"),
            state:data.get("state"),
            zipCode:data.get("zip"),
            mobile:data.get("phone")
        }
        const orderData={address,navigate};
        dispatch(createOrder(orderData));
        console.log("address",address);
    }

    return (
        <div>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className="border rounded-e-mid shadow-md h-[30.5rem] overflow-y-scroll">
                    <div className="p-5 py-7 border-b cursor-pointer">
                    {auth.user.addresses.map(item => <AddressCard address={item} />)}
                        <Button sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }} size="large" variant="contained">Deliver Here</Button>
                    </div>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-s-md shadow-md p-5">
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="fname"
                                        name="fname"
                                        label="First Name"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lname"
                                        name="lname"
                                        label="Last Name"
                                        fullWidth
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="address"
                                        name="address"
                                        label="Address"
                                        fullWidth
                                        autoComplete="address"
                                        multiline
                                        rows={4}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="city"
                                        name="city"
                                        label="City"
                                        fullWidth
                                        autoComplete="address-level2"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="state"
                                        name="state"
                                        label="State"
                                        fullWidth
                                        autoComplete="address-level1"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="zip"
                                        name="zip"
                                        label="ZIP/Postal code"
                                        fullWidth
                                        autoComplete="postal-code"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="phone"
                                        name="phone"
                                        label="Phone Number"
                                        fullWidth
                                        autoComplete="tel"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button type="submit" sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }} size="large" variant="contained">Deliver Here</Button>
                                </Grid>
                            </Grid>
                        </form>

                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
export default DeliveryAddressForm;