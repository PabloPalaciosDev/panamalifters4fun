import { useState, useEffect, useMemo } from 'react';
import { Box } from '@mui/material';
import juan from '../../../assets/img/juan-portada.jpeg';
import mattew from '../../../assets/img/mattew-portada.jpeg';
import ramiro from '../../../assets/img/ramiro-portada.png';
import enzo from '../../../assets/img/enzo-portada.jpeg';
import leo from '../../../assets/img/leo-portada.jpg';
import pablo from '../../../assets/img/pablo-portada.jpeg';

export default function BannerMovil() {
    // Lista de imágenes para alternar
    const images = useMemo(() => [juan, mattew, ramiro, enzo, leo, pablo], []);
    const randomIndex = Math.floor(Math.random() * images.length);

    // Estado para manejar la imagen actual
    const [currentImage, setCurrentImage] = useState(images[randomIndex]);


    useEffect(() => {
        // Función para cambiar a la siguiente imagen
        let currentIndex = 0;
        const changeImage = () => {
            currentIndex = (currentIndex + 1) % images.length;
            setCurrentImage(images[currentIndex]);
        };
        const interval = setInterval(changeImage, 2500);

        // Limpieza al desmontar el componente
        return () => clearInterval(interval);
    }, [images]);

    return (
        <Box className="banner-portada">
            <img src={currentImage} alt="banner" className="banner-portada" style={{  clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)" }} />
        </Box>
    );
}
