import {
    Typography,
    CircularProgress,
    Box,
    FormControl,
    Select,
    MenuItem,
    Stack,
} from '@mui/material';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react'
import CardAtletas from '../../components/CardAtletas';

export default function ProfileFem() {
    const [atletas, setAtletas] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [categoria, setCategoria] = useState('');
    const [atletasSeleccionados, setAtletasSeleccionados] = useState([]);
    useEffect(() => {
        fetch('https://script.google.com/macros/s/AKfycbzMwZqRB1eONV1RmFjIDgEVdcm-MPVaOANTA7JpU1LbfZLHGFTQM36JejwXbQYGBmFD/exec')
            .then((response) => response.json())
            .then((data) => {
                const agrupadosPorCategoriaYSexo = data.reduce((acc, atleta) => {
                    const categoria = atleta.catpeso;
                    const sexo = atleta.catsex; // Suponiendo que 'catsex' es el campo de sexo
                    if (!acc[categoria]) {
                        acc[categoria] = { masculino: [], femenino: [] }; // Inicializa las categorías con arreglos para ambos sexos
                    }
                    if (sexo === 'MALE') {
                        acc[categoria].masculino.push(atleta);
                    } else if (sexo === 'FEMALE') {
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

    const handleChange = (event) => {
        setCategoria(event.target.value);
        setAtletasSeleccionados(atletasFemeninos[event.target.value]);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
            {isLoading ? (
                <CircularProgress size={100} sx={{ marginTop: 50, color: '#153a4b' }} />
            ) : (
                <Grid container spacing={5} display={'flex'} justifyContent={'center'} padding={2} alignItems={'center'}>
                    <Grid item xs={12} display={'flex'} justifyContent={'center'} textAlign={'center'} alignContent={'center'}>
                        <Stack
                            spacing={2}
                            direction="row"
                            alignItems="center"
                            sx={{
                                backgroundColor: '#153a4b',
                                color: 'white',
                                borderRadius: '25px',
                                width: 'fit-content',
                                marginTop: '10px',
                                padding: '15px 20px'
                            }}
                        >
                            <Typography fontWeight={'bold'} variant="h5">
                                Selecciona la Categoría
                            </Typography>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={categoria}
                                    label="Categoría"
                                    onChange={(e) => handleChange(e)}
                                    sx={{
                                        fontWeight: 'bold',
                                        color: '#153a4b',
                                        width: 'fit-content',
                                        padding: '5px 10px',
                                        border: '1px solid white',
                                        borderRadius: '10px',
                                        backgroundColor: 'white',
                                        fontSize: '1.2rem'
                                    }}
                                >
                                    <MenuItem
                                        value={'43'}
                                        sx={{
                                            fontWeight: 'bold',
                                            color: '#153a4b',
                                            fontSize: '1.2rem'
                                        }}
                                    >
                                        - 43
                                    </MenuItem>
                                    <MenuItem
                                        value={'52'}
                                        sx={{
                                            fontWeight: 'bold',
                                            color: '#153a4b',
                                            fontSize: '1.2rem'
                                        }}
                                    >
                                        - 52
                                    </MenuItem>
                                    <MenuItem
                                        value={'57'}
                                        sx={{
                                            fontWeight: 'bold',
                                            color: '#153a4b',
                                            fontSize: '1.2rem'
                                        }}
                                    >
                                        - 57
                                    </MenuItem>
                                    <MenuItem
                                        value={'63'}
                                        sx={{
                                            fontWeight: 'bold',
                                            color: '#153a4b',
                                            fontSize: '1.2rem'
                                        }}
                                    >
                                        - 63
                                    </MenuItem>
                                    <MenuItem
                                        value={'69'}
                                        sx={{
                                            fontWeight: 'bold',
                                            color: '#153a4b',
                                            fontSize: '1.2rem'
                                        }}
                                    >
                                        - 69
                                    </MenuItem>
                                    <MenuItem
                                        value={'76'}
                                        sx={{
                                            fontWeight: 'bold',
                                            color: '#153a4b',
                                            fontSize: '1.2rem'
                                        }}
                                    >
                                        - 76
                                    </MenuItem>
                                    <MenuItem
                                        value={'84'}
                                        sx={{
                                            fontWeight: 'bold',
                                            color: '#153a4b',
                                            fontSize: '1.2rem'
                                        }}
                                    >
                                        - 84
                                    </MenuItem>
                                    <MenuItem
                                        value={'84+'}
                                        sx={{
                                            fontWeight: 'bold',
                                            color: '#153a4b',
                                            fontSize: '1.2rem'
                                        }}
                                    >
                                        + 84
                                    </MenuItem>
                                    <MenuItem
                                        value={'Guest'}
                                        sx={{
                                            fontWeight: 'bold',
                                            color: '#153a4b',
                                            fontSize: '1.2rem'
                                        }}
                                    >
                                        Guest
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                    </Grid>
                    {categoria === '' ? null : <Grid
                          item
                          xs={12}
                          display={'flex'}
                          justifyContent={'center'}
                          textAlign={'center'}
                          alignContent={'center'}
                      >
                          <Typography fontWeight={'bold'} variant="h4">
                              Categoría {categoria} Kg
                          </Typography>
                      </Grid> ? (
                        categoria === 'Guest'
                    ) : (
                        <Grid item xs={12} display={'flex'} justifyContent={'center'} textAlign={'center'} alignContent={'center'}>
                            {' '}
                            <Typography fontWeight={'bold'} variant="h4">
                                Categoría Guest
                            </Typography>
                        </Grid>
                    )}
                    {atletasSeleccionados.length === 0 ? (
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
                                No hay atletas en esta categoría o no se ha seleccionado una categoría
                            </Typography>
                        </Grid>
                    ) : (
                        atletasSeleccionados.map((atleta) => (
                            <Grid item xs={12} sm={6} md={4} key={atleta.nombre}>
                                <CardAtletas
                                    img={atleta.img}
                                    edad={atleta.edad}
                                    nombre={atleta.nombre}
                                    team={atleta.team}
                                    catedad={atleta.catedad}
                                    totalfpp={atleta.totalfpp}
                                    ipfpoints={atleta.ipfpoints}
                                    wilkspoints={atleta.wilkspoints}
                                    dotspints={atleta.dotspints}
                                    place={atleta.place}
                                />
                            </Grid>
                        ))
                    )}
                </Grid>
            )}
        </Box>
    );
}
