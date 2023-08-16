import React from "react";
import { Grid } from "@mui/material";
import { navdata } from "./data";
import { NavItem } from "./NavItem";

export const Nav=()=>{
    return(
        <Grid container spacing={2} sx={{marginBottom:5}}>
            {
                navdata.map((item)=>
                <NavItem item={item} />
                )
            }
        </Grid>
    )
}