import React from "react";
import { Grid, Typography, Button, Link } from "@mui/material";

function Footer(){
    return(
        <div>
            <Grid className="bg-black text-white text-center mt-10"
                container
                sx={{bgcolor:"black",color:"white",py:3}}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pn-5" variant='h6'>Company</Typography>
                    <div>
                        <Button className="pb-5" variant='h6'>About</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant='h6'>Blog</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant='h6'>Press</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant='h6'>Jobs</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant='h6'>Partners</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pn-5" variant='h6'>Help</Typography>
                    <div>
                        <Button className="pb-5" variant='h6'>Payments</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant='h6'>Shipping</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant='h6'>Cancellation & returns</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant='h6'>FAQ</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant='h6'>Report Infringment</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pn-5" variant='h6'>Consumer Policy</Typography>
                    <div>
                        <Button className="pb-5" variant='h6'>Cancellation & returns</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant='h6'>Terms of use</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant='h6'>Security</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant='h6'>Privacy</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant='h6'>Sitemap</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pn-5" variant='h6'>Mail us:</Typography>
                    <div>
                        <Button className="pb-5" variant='h6'>Dr MGR Boys Hostel</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant='h6'>Maduravoyal</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant='h6'>Chennai, 600095</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant='h6'>Tamilnadu, India</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant='h6'>xyz@gmail.com</Button>
                    </div>
                </Grid>
                
                <Grid className="pt-20" item xs={12}>
                    <Typography variant="body2" component="p" align="center">
                        &copy;2024 My Company. All Right reserved.
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Made with love by Me.
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Icons made by {' '}
                        <Link href="https://www.freepik.com" color="inherit" underline="always">Freepic </Link>
                        from{' '}
                        <Link href="https://www.flaticon.com" color="inherit" underline="always">Flaticon</Link>
                    </Typography>
                </Grid>

            </Grid>
        </div>
    )
}

export default Footer;