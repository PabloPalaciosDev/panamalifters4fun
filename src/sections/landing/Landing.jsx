import { Typography, Grid } from '@mui/material';
import Banner from './banner/Banner';
import BannerMovil from './banner/BannerMovil';

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
                    <Typography sx={{ fontSize: { md: '40px', lg: '100px'} }} variant="h1" component="h1" color={'#153A4B'} className='font-body' fontFamily='Rubik Mono One, monospace'>
                        Panama Lifters
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Banner />
                </Grid>
            </Grid>
            <Grid container sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column'}}>
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
                    <Typography sx={{ fontSize: { xs: '40px', md: '40px', lg: '100px'}, margin: '10px auto' }} variant="h1" component="h1" color={'#153A4B'} className='font-body' fontFamily='Rubik Mono One, monospace'>
                        Panama Lifters
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <BannerMovil />
                </Grid>
            </Grid>
        </>
    );
}
