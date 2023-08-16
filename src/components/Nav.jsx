import React from "react";
import { Grid } from "@mui/material";
import { navdata } from "./data";
import { NavItem } from "./NavItem";

export const Nav=()=>{
    return(
        <Grid container spacing={2}>
            {
                navdata.map((item)=>
                <NavItem item={item} />
                )
            }
        </Grid>
    )
}