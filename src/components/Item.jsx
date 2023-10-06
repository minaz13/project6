import React from "react";
import {Button,Grid} from "@mui/material"

export const Item=()=>{
    return(
        <Grid container spacing={3}>
            <Grid item xs={6}>
             <Button variant="contained" fullWidth color="error">Item1</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" fullWidth color="error">Item2</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" fullWidth color="inherit">Item3</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" fullWidth color="inherit">Item4</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" fullWidth color="secondary">Item5</Button>
            </Grid>
            <Grid item xs={8}>
                <Button variant="contained" fullWidth color="secondary">Item6</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" fullWidth color="warning">Item7</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" fullWidth color="success">Item8</Button>
            </Grid>
            <Grid item xs={8}>
                <Button variant="contained" fullWidth color="success">Item9</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" fullWidth color="inherit">Item10</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" fullWidth color="inherit">Item11</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" fullWidth color="inherit">Item12</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" fullWidth color="inherit">Item13</Button>
            </Grid>

        </Grid>
    ) 
}