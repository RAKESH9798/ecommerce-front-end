import { Button, Card, CardContent, Typography, styled } from '@mui/material';
import React from 'react';

const TriangleImg=styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute"
});

const TrophyImg=styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:"absolute"
})


const Achievement = () => {
  return (
      <Card className='my-5' sx={{position:"relative", bgcolor:"#353b48",color:"white"}}>
        <CardContent>
            <Typography variant='h6' sx={{letterSpacing:".25px"}}>
                learn with rakesh
            </Typography>
            <Typography variant='body2'>
                Congratulations🎉🥳
            </Typography>
            <Typography variant='h5' sx={{my:3.1}}>
                420.8k
            </Typography>
            <Button size="small" variant="contained">View sales</Button>
            <TriangleImg></TriangleImg>
            <TrophyImg src='https://i.etsystatic.com/28440235/r/il/8a3aa5/3850800418/il_570xN.3850800418_llrn.jpg'></TrophyImg>
        </CardContent>
      </Card>
  )
}

export default Achievement;
