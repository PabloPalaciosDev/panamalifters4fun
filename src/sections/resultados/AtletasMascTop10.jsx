import { Typography, CircularProgress, Box } from '@mui/material';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import CardAtletasTops from '../../components/CardAtletasTop';

export default function AtletasMascTop10() {
    const [atletas, setAtletas] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    let atletasMasculinos = [];

    useEffect(() => {
        fetch('https://script.google.com/macros/s/AKfycbyAM85lp9xoClpwaMGIF_7FaisBhxkdinzkiqWkwRGqz9m1-YlAmiswzeEeJwli5WbU/exec')
            .then((response) => response.json())
            .then((data) => {
                setAtletas(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    }, []);

    Object.entries(atletas).forEach(([catsex, atletas]) => {
        catsex;
        if (atletas.catsex === 'MALE') atletasMasculinos.push(atletas);
    });
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
            {isLoading ? (
                <CircularProgress size={100} sx={{ marginTop: 50, color: '#153a4b' }} />
            ) : atletasMasculinos.length > 0 ? (
                <Grid container spacing={5} display={'flex'} justifyContent={'center'} padding={2} alignItems={'center'}>
                    <Grid item xs={12} display={'flex'} justifyContent={'center'} textAlign={'center'} alignContent={'center'}>
                        <Typography
                            fontWeight={'bold'}
                            variant="h3"
                            sx={{
                                color: '#153a4b',
                                marginTop: '10px',
                                borderBottom: '3px solid #153a4b'
                            }}
                        >
                            Top 10 Atletas Masculinos
                        </Typography>
                    </Grid>
                    {atletasMasculinos.map((atleta, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <CardAtletasTops
                                img={atleta.img}
                                nombre={atleta.nombre}
                                edad={atleta.edad}
                                team={atleta.team}
                                catedad={atleta.catedad}
                                totalfpp={atleta.totalfpp}
                                ipfpoints={atleta.ipfpoints}
                                posicion={index + 1}
                            />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Grid item xs={12} display={'flex'} justifyContent={'center'} textAlign={'center'} alignContent={'center'}>
                    <Typography
                        fontWeight={'bold'}
                        variant="h6"
                        sx={{
                            color: '#153a4b',
                            marginTop: '10px',
                            borderBottom: '1px solid #153a4b'
                        }}
                    >
                        No hay atletas en este Top
                    </Typography>
                </Grid>
            )}
        </Box>
    );
}
