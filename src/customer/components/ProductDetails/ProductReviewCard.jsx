import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

function ProductReviewCard(){
    return(
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className="text-white" sx={{width:56,height:56,bgcolor:"#9155fd"}}>R</Avatar>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <div>
                        <p className="font-semibold text-lg">Rakesh</p>
                        <p className="opacity-70">April 8, 2022</p>
                    </div>
                    <Rating value={4.5} name="half-rating" readOnly precision={0.5}/>
                    <p>The element ol has an implicit role of list. Defining this explicitly is redundant and should be avoided</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductReviewCard;