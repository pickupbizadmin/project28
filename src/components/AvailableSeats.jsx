import React from "react";
import { Grid, Button } from "@mui/material";
import { useDispatch } from "react-redux";

export const AvailableSeats=()=>{
    const dispatch= useDispatch();
    const handleSubmit=(seatNumber)=>{
        const type = "allocate";
        const payload = seatNumber;
        const action={
            type,
            payload
        }
        dispatch(action);
    }
    return(
        <Grid container spacing={2}>
            <Grid item xs={4}>
               <Button onClick={()=>handleSubmit(1)} variant="contained" fullWidth sx={{height:150}}>
                1
               </Button>
            </Grid>
            <Grid item xs={4}>
               <Button  onClick={()=>handleSubmit(2)} variant="contained" fullWidth sx={{height:150}}>
                2
               </Button>
            </Grid>
            <Grid item xs={4}>
               <Button  onClick={()=>handleSubmit(3)} variant="contained" fullWidth sx={{height:150}}>
                3
               </Button>
            </Grid>
            <Grid item xs={4}>
               <Button  onClick={()=>handleSubmit(4)} variant="contained" fullWidth sx={{height:150}}>
                4
               </Button>
            </Grid>
            <Grid item xs={4}>
               <Button  onClick={()=>handleSubmit(5)} variant="contained" fullWidth sx={{height:150}}>
                5
               </Button>
            </Grid>
            <Grid item xs={4}>
               <Button  onClick={()=>handleSubmit(6)} variant="contained" fullWidth sx={{height:150}}>
                6
               </Button>
            </Grid>
            <Grid item xs={4}>
               <Button  onClick={()=>handleSubmit(7)} variant="contained" fullWidth sx={{height:150}}>
                7
               </Button>
            </Grid>
        </Grid>
    )
}