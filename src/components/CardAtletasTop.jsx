import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    Tooltip,
    Grid
} from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import PropTypes from 'prop-types';

export default function CardAtletasTops({img, nombre, edad, team, catedad, totalfpp, ipfpoints, posicion }) {
    return (
        <Card elevation={5} sx={{ borderRadius: '25px' }}>
            <CardHeader sx={{ textTransform: 'uppercase' }} title={posicion + '° ' + nombre} subheader={edad + ' años'} />
            {img ? (
                <img src={img} alt={nombre} style={{ objectFit: 'scale-down' }} width="200xp" />
            ) : (
                <AccountCircleIcon sx={{ fontSize: 200, color: '#153a4b', margin: 'auto', display: 'block' }} />
            )}
            <br />
            <CardContent sx={{ padding: '1px' }}>
                <Grid container spacing={1} display={'flex'} justifyContent={'center'}>
                    <Tooltip title="Equipo" arrow>
                        <Grid item xs={6}>
                            <GroupsIcon sx={{ fontSize: 20, color: '#153a4b' }} />
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                {team}
                            </Typography>
                        </Grid>
                    </Tooltip>
                    <Tooltip title="Categoría de Edad" arrow>
                        <Grid item xs={12}>
                            <CategoryIcon sx={{ fontSize: 20, color: '#153a4b' }} />
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                {catedad}
                            </Typography>
                        </Grid>
                    </Tooltip>
                    <Tooltip title="Mejor Total Oficial" arrow>
                        <Grid item xs={12} md={6}>
                            <StarIcon sx={{ fontSize: 20, color: '#153a4b' }} />
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                Total Oficial
                                <br />
                                {totalfpp} Kg
                            </Typography>
                        </Grid>
                    </Tooltip>
                    <Tooltip title="Puntos IPF" arrow>
                        <Grid item xs={12} md={6}>
                            <StarIcon sx={{ fontSize: 20, color: '#153a4b' }} />
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                Puntos IPF
                                <br />
                                {ipfpoints}
                            </Typography>
                        </Grid>
                    </Tooltip>
                </Grid>
            </CardContent>
        </Card>
    );
}

CardAtletasTops.propTypes = {
    img: PropTypes.string,
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    catedad: PropTypes.string.isRequired,
    totalfpp: PropTypes.string.isRequired,
    ipfpoints: PropTypes.string.isRequired,
    wilkspoints: PropTypes.string.isRequired,
    dotspints: PropTypes.string.isRequired,
    posicion: PropTypes.number.isRequired
};
