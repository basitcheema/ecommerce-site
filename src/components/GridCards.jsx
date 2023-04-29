import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import ProductCard from './ProductCard';


export default function GridCards(props) {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 8 }}>
      <Grid container spacing={2}>
      {props.data.map((item,index) => {
        return (
          <Grid xs={4} key={index}>
            <ProductCard name={item.name} description={item.description}/>
          </Grid>
        )
      })}
        
      </Grid>
    </Box>
  );
}