import { Card, CardHeader, CardContent, Typography, Tooltip, CircularProgress, Box } from '@mui/material';
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DateRangeIcon from '@mui/icons-material/DateRange';
import HeightIcon from '@mui/icons-material/Height';
import CategoryIcon from '@mui/icons-material/Category';
import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function ProfileMasc() {
    const [atletas, setAtletas] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(
            'https://script.googleusercontent.com/macros/echo?user_content_key=M1PfDyhy7hl2skr1aF9waSaXKflJs5eJgypKVz9sbb9P2j_WcbtVRt0p3PD1oaGFgSqjRjRJ7greWBe6OFwIu60JCIoeMA1im5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDUkpXiR-LokQSZU5vqRbk_EuETLPNCZVrWLNurcEqvXnwE4XyJOXIzH0reijr7fgyBuZq1p5noMbiPXg-rCb-PvzN_Zk_CcJA&lib=MQCNB6nzcXOwY7GhoceHgX9xbyX9ou6FY'
        )
            .then((response) => response.json())
            .then((data) => {
                const agrupadosPorCategoriaYSexo = data.reduce((acc, atleta) => {
                    const categoria = atleta.catpeso;
                    const sexo = atleta.catsex; // Suponiendo que 'catsex' es el campo de sexo
                    if (!acc[categoria]) {
                        acc[categoria] = { masculino: [], femenino: [] }; // Inicializa las categorías con arreglos para ambos sexos
                    }
                    if (sexo === 'Masculina') {
                        acc[categoria].masculino.push(atleta);
                    } else if (sexo === 'Femenina') {
                        acc[categoria].femenino.push(atleta);
                    }
                    return acc;
                }, {});
                setAtletas(agrupadosPorCategoriaYSexo);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    }, []);

    let atletasMasculinos = {};
    let atletasFemeninos = {};

    Object.entries(atletas).forEach(([categoria, atletasPorSexo]) => {
        if (!atletasMasculinos[categoria]) {
            atletasMasculinos[categoria] = [];
        }
        if (!atletasFemeninos[categoria]) {
            atletasFemeninos[categoria] = [];
        }

        atletasPorSexo.masculino.forEach((atleta) => atletasMasculinos[categoria].push(atleta));
        atletasPorSexo.femenino.forEach((atleta) => atletasFemeninos[categoria].push(atleta));
    });
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
            {isLoading ? (
                <CircularProgress size={100} sx={{ marginTop: 50, color: 'red' }} />
            ) : (
                <Grid container spacing={5} display={'flex'} justifyContent={'center'} padding={2} alignItems={'center'}>
                    {Object.entries(atletasMasculinos).map(([categoria, atletas]) => (
                        <React.Fragment key={categoria}>
                            <Grid item xs={12} display={'flex'} justifyContent={'center'} textAlign={'center'}>
                                {atletas.length != 0 ? (
                                    <Typography fontWeight={'bold'} borderBottom={'5px dotted red'} variant="h5">
                                        CATEGORÍA: {categoria}
                                    </Typography>
                                ) : null}
                            </Grid>
                            {atletas.map((atleta) => (
                                <Grid item xs={12} sm={6} md={4} key={atleta.nombre}>
                                    <Card elevation={5} sx={{ borderRadius: '25px' }}>
                                        <CardHeader sx={{ textTransform: 'uppercase' }} title={atleta.nombre} subheader={atleta.edad + ' años'} />
                                        <AccountCircleIcon sx={{ fontSize: 150, color: '#0049B0' }} />
                                        <br />
                                        <CardContent sx={{ padding: '1px' }}>
                                            <Grid container spacing={1} display={'flex'} justifyContent={'center'}>
                                                <Tooltip title="Tiempo desde su primera competencia" arrow>
                                                    <Grid item xs={4}>
                                                        <DateRangeIcon sx={{ fontSize: 20, color: 'red' }} />
                                                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                                            {atleta.tiempoentrenando}
                                                        </Typography>
                                                    </Grid>
                                                </Tooltip>
                                                <Tooltip title="Estatura" arrow>
                                                    <Grid item xs={4}>
                                                        <HeightIcon sx={{ fontSize: 20, color: 'red' }} />
                                                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                                            {atleta.estatura} m
                                                        </Typography>
                                                    </Grid>
                                                </Tooltip>
                                                <Tooltip title="Categoría de Edad" arrow>
                                                    <Grid item xs={4}>
                                                        <CategoryIcon sx={{ fontSize: 20, color: 'red' }} />
                                                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                                            {atleta.catedad}
                                                        </Typography>
                                                    </Grid>
                                                </Tooltip>
                                                <Tooltip title="Mejor Total Oficial" arrow>
                                                    <Grid item xs={4}>
                                                        <StarIcon sx={{ fontSize: 20, color: 'red' }} />
                                                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                                            {atleta.totalfpp} Kg
                                                        </Typography>
                                                    </Grid>
                                                </Tooltip>
                                                <Tooltip title="Mejor Total No Oficial" arrow>
                                                    <Grid item xs={4}>
                                                        <StarIcon sx={{ fontSize: 20, color: 'red' }} />
                                                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                                            {atleta.totalnofpp} Kg
                                                        </Typography>
                                                    </Grid>
                                                </Tooltip>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </React.Fragment>
                    ))}
                </Grid>
            )}
        </Box>
    );
}
