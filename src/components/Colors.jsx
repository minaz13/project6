import React from "react";
import {Grid,Button} from "@mui/material"

export const Colors=()=>{
    return(
        <div>
            <h1>Material UI Grid</h1>
            {/* row-container */}
           <Grid container spacing={3}>
            {/* item-column */}
            <Grid item xs={3}>
            <Button variant="contained"  fullWidth>01</Button>
           </Grid>
           <Grid item xs={3}>
            <Button variant="contained" fullWidth>02</Button>
           </Grid>
           <Grid item xs={3}>
            <Button variant="contained" fullWidth>03</Button>
           </Grid>
           <Grid item xs={3}>
           <Button variant="contained" fullWidth>04</Button>
           </Grid>
           <Grid item xs={2}>
           <Button variant="contained" fullWidth>05</Button>
           </Grid>
           <Grid item xs={8}>
            <Button variant="contained" fullWidth color="success">06</Button>
           </Grid>
           <Grid item xs={2}>
           <Button variant="contained" fullWidth color="error">07</Button>
           </Grid>
             <Grid item xs={1}>
               <Button variant="contained" fullWidth color="warning">08</Button>
             </Grid>
             <Grid item xs={3}>
              <Button variant="contained" fullWidth color="inherit">09</Button>
             </Grid>
             <Grid item xs={1}>
                <Button variant="contained" fullWidth color="error">10</Button>   
             </Grid>
             <Grid item xs={3}>
                <Button variant="contained" fullWidth color="success">11</Button>
             </Grid>
             <Grid item xs={3}>
                <Button variant="contained" fullWidth color="primary">12</Button>
             </Grid>
             <Grid item xs={1}>
                <Button variant="contained" fullWidth color="warning">13</Button>
             </Grid>
           </Grid>
                   </div>
    )

}