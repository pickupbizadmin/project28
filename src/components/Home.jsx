import React from "react";
import { Grid } from "@mui/material";

export const Home=()=>{
    return(
        <Grid container spacing={2}>
            <Grid item xs={4}>
                Available Seats
            </Grid>
            <Grid item xs={4}>
                Booked Seats
            </Grid>
        </Grid>
    )
}