import { Typography, Grid } from '@mui/material';
import Banner from './banner/Banner';

export default function Landing() {
    return (
        <>
            <Grid container sx={{ display: { xs: 'none', md: 'flex' }}}>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Typography sx={{ fontSize: { md: '40px', lg: '55px'} }} variant="h1" component="h1" color={'black'} className='font-body' fontFamily='Rubik Mono One, monospace'>
                        Panama Lifters
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Banner />
                </Grid>
            </Grid>
        </>
    );
}
