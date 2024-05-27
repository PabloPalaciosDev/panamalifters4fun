import { Card, CardHeader, CardContent, Typography, Tooltip, CircularProgress, Box } from '@mui/material';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import CategoryIcon from '@mui/icons-material/Category';
import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupsIcon from '@mui/icons-material/Groups';

export default function AtletasFemTop10() {
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
        if (atletas.catsex === 'FEMALE') atletasMasculinos.push(atletas);
    });

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
            {isLoading ? (
                <CircularProgress size={100} sx={{ marginTop: 50, color: '#153a4b' }} />
            ) : atletasMasculinos.length > 0 ? (
                <Grid container spacing={5} display={'flex'} justifyContent={'center'} padding={2} alignItems={'center'}>
                    {atletasMasculinos.map((atleta, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card elevation={5} sx={{ borderRadius: '25px' }}>
                                <CardHeader
                                    sx={{ textTransform: 'uppercase' }}
                                    title={index + 1 + '° ' + atleta.nombre}
                                    subheader={atleta.edad + ' años'}
                                />
                                <AccountCircleIcon sx={{ fontSize: 150, color: '#0049B0' }} />
                                <br />
                                <CardContent sx={{ padding: '1px' }}>
                                    <CardContent sx={{ padding: '1px' }}>
                                        <Grid container spacing={1} display={'flex'} justifyContent={'center'}>
                                            <Tooltip title="Equipo" arrow>
                                                <Grid item xs={6}>
                                                    <GroupsIcon sx={{ fontSize: 20, color: '#153a4b' }} />
                                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                                        {atleta.team}
                                                    </Typography>
                                                </Grid>
                                            </Tooltip>
                                            <Tooltip title="Categoría de Edad" arrow>
                                                <Grid item xs={12}>
                                                    <CategoryIcon sx={{ fontSize: 20, color: '#153a4b' }} />
                                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                                        {atleta.catedad}
                                                    </Typography>
                                                </Grid>
                                            </Tooltip>
                                            <Tooltip title="Mejor Total Oficial" arrow>
                                                <Grid item xs={12} md={6}>
                                                    <StarIcon sx={{ fontSize: 20, color: '#153a4b' }} />
                                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                                        Total Oficial
                                                        <br />
                                                        {atleta.totalfpp} Kg
                                                    </Typography>
                                                </Grid>
                                            </Tooltip>
                                            <Tooltip title="Puntos IPF" arrow>
                                                <Grid item xs={12} md={6}>
                                                    <StarIcon sx={{ fontSize: 20, color: '#153a4b' }} />
                                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                                        Puntos IPF
                                                        <br />
                                                        {atleta.ipfpoints}
                                                    </Typography>
                                                </Grid>
                                            </Tooltip>
                                        </Grid>
                                    </CardContent>
                                </CardContent>
                            </Card>
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
