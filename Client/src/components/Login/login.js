import React from 'react';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import useStyles from './styles.js';

const Login = () => { 
      
      // function SignIn() {
      //   const classes = useStyles();
      
      //   return (
      //     <Container component="main" maxWidth="xs">
      //       <CssBaseline />
      //       <div className={classes.paper}>
      //         <Avatar className={classes.avatar}>
      //           <LockOutlinedIcon />
      //         </Avatar>
      //         <Typography component="h1" variant="h5">
      //           Sign in
      //         </Typography>
      //         <form className={classes.form} noValidate>
      //           <TextField
      //             variant="outlined"
      //             margin="normal"
      //             required
      //             fullWidth
      //             id="email"
      //             label="Email Address"
      //             name="email"
      //             autoComplete="email"
      //             autoFocus
      //           />
      //           <TextField
      //             variant="outlined"
      //             margin="normal"
      //             required
      //             fullWidth
      //             name="password"
      //             label="Password"
      //             type="password"
      //             id="password"
      //             autoComplete="current-password"
      //           />
      //           <FormControlLabel
      //             control={<Checkbox value="remember" color="primary" />}
      //             label="Remember me"
      //           />
      //           <Button
      //             type="submit"
      //             fullWidth
      //             variant="contained"
      //             color="primary"
      //             className={classes.submit}
      //           >
      //             Sign In
      //           </Button>
      //           <Grid container>
      //             <Grid item xs>
      //               <Link href="#" variant="body2">
      //                 Forgot password?
      //               </Link>
      //             </Grid>
      //             <Grid item>
      //               <Link href="#" variant="body2">
      //                 {"Don't have an account? Sign Up"}
      //               </Link>
      //             </Grid>
      //           </Grid>
      //         </form>
      //       </div>
      //       <Box mt={8}>
              
      //       </Box>
      //     </Container>
      //   );
      // }

    const classes = useStyles();

    return (
      <h1>Poopy</h1>
      // <Paper className = {classes.paper}>
      //   <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      //     <Typography variant="h5">{currentId ? 'Editing': 'Creating'} a memory</Typography>
      //     <TextField name="gameName" required = "true" variant="outlined" label="Game" fullWidth value={reviewData.gameName} onChange={(e) => setReviewData({ ...reviewData,  gameName: e.target.value})}/>
      //     <TextField name="userEmail" required = "true" variant="outlined"  label="Email" fullWidth value={reviewData.userEmail} onChange={(e) => setReviewData({ ...reviewData,  userEmail: e.target.value})}/>
      //     <TextField name="reviewText"  variant="outlined" label="Review"  multiline = "true"  rows = "8" fullWidth value={reviewData.reviewText}  onChange={(e) => setReviewData({ ...reviewData,  reviewText: e.target.value})}  />
      //     <TextField name="rating"  variant="outlined" label="Rating"   fullWidth value={reviewData.rating}  onChange={(e) => setReviewData({ ...reviewData,  rating: e.target.value})}  />
      //     {/* <Typography variant="h6">Rating*</Typography> */}
      //     {/* <Slider name = "rating" label = "Rating"  step = {1} valueLabelDisplay = "on" defaultValue = {1} min = {1} max = {5} marks={true} onChange={(e) => setReviewData({ ...reviewData,  rating: e.target.value})}/> */}
      //     <Button className = {classes.buttonSubmit} variant= "contained" color = "primary" size= "large" type="submit" fullWidth>Submit</Button>
      //     <Button  variant= "contained" color = "secondary" size= "small" onClick = {clear} fullWidth>Clear</Button>
      //   </form>
      // </Paper>
    );
}
export default Login;