import React from "react";
import {Grid,TextField,Button,Card,CardContent} from "@mui/material"

export const Login=()=>{
    return(
        <Grid sx={{marginTop:"100px"}} container spacing={2}>
            <Grid item xs={4.5}></Grid>
            <Grid item xs={3}>
            
            <Card sx={{border:"black"}}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{color:"blue"}}>
                            <h2>Login</h2>
                        </Grid>
                         <Grid item xs={12}>
                            <TextField variant="outlined" label="Email" fullWidth sx={{border:"black"}}/>
                         </Grid>
                         <Grid item xs={12}>
                            <TextField variant="outlined" label="Password" fullWidth sx={{border:"black"}}/>
                         </Grid>
                         
                         <Grid item xs={12}>
                            <Button variant="contained" fullWidth>LOGIN</Button> 
                         </Grid>
                         <Grid item xs={12}>
                            <p>Not a  Member? <span style={{color:"blue"}}> Sign-up now</span></p>
                         </Grid>
                    </Grid>
                </CardContent>
            </Card>
            </Grid>
        </Grid>

    )
}