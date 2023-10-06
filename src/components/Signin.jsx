import React, { useState } from "react";
import {Grid,Button, Card,CardContent,TextField} from "@mui/material"


 export const Signin=()=>{
    
    // javascript
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    const [password,setPassword]=useState("");
    const [confirm,setConfirm]=useState("");

    const handleClear=()=>{
        setUsername('');
        setEmail('');
        setMobile('');
        setPassword('');
        setConfirm('');
    }
    return(
        // html
        <Grid container spacing={2}>
            <Grid item xs={4}>
            <Card >
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>

                    <h2>SignIn</h2>
                        </Grid>
                          <Grid item xs={12}>
                           <TextField value={username} label="username" variant="outlined" fullWidth onChange={(e)=>setUsername(e.target.value)}/>
                        </Grid>
                          <Grid item xs={12}>
                    <TextField value={email} label="email id" variant="outlined" fullWidth onChange={(e)=>setEmail(e.target.value)}/>
                          </Grid>
                          <Grid item xs={12}>
                            <TextField value={mobile} label="mobile no" variant="outlined" fullWidth onChange={(e)=>setMobile(e.target.value)}/>
                          </Grid>
                          <Grid item xs={6}>
                            <TextField value={password} label="password" variant="outlined" fullWidth onChange={(e)=>setPassword(e.target.value)}/>
                          </Grid>
                          <Grid item xs={6}>
                            <TextField value={confirm} label="confirm password" variant="outlined" fullWidth onChange={(e)=>setConfirm(e.target.value)}/>
                          </Grid>
                          <Grid item xs={6}></Grid>
                          <Grid item xs={3}>
                            <Button variant="contained" fullWidth >SignIn</Button>
                          </Grid>
                          <Grid item xs={3}>
                            <Button onClick={handleClear} variant="contained" fullWidth color="warning">Cancel</Button>

                          </Grid>
                    </Grid>

                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={8}> 
            <Card>
                <CardContent>
                    <Grid container spacing={3}>
                    <Grid  item xs={4}><h3>User Name:</h3></Grid>
                    <Grid item xs={8}> <h3>{username}</h3></Grid>
                    <Grid item xs={4}> <h3>Email Id:</h3></Grid>
                    <Grid item xs={8}><h3>{email}</h3></Grid>
                    <Grid item xs={4}><h3>Mobile No:</h3></Grid>
                    <Grid item xs={8}><h3>{mobile}</h3></Grid>
                    <Grid item xs={4}> <h3>Password:</h3></Grid>
                    <Grid item xs={8}><h3>{password}</h3></Grid>
                    <Grid item xs={4}><h3>Confirm Password:</h3></Grid>
                    <Grid item xs={8}><h3>{confirm}</h3></Grid>
                    </Grid>
                 
                </CardContent>
            </Card>
             </Grid>
        </Grid>
    
    )
}