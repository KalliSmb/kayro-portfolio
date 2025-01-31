import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

function PortfolioBlock({ image, source, title, description }) {
    const [hover, setHover] = useState(false);

    return (
        <Box 
            position="relative"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{ 
                overflow: 'hidden',
                borderRadius: '10px',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' } // Efeito de zoom
            }}
        >
            {/* Imagem do projeto */}
            <Box 
                component="img" 
                src={image} 
                alt={title} 
                width="100%" 
                sx={{ borderRadius: '10px' }}
            />

            {/* Sobreposição ao passar o cursor */}
            {hover && (
                <Box 
                    position="absolute" 
                    top={0} left={0} width="100%" height="100%"
                    bgcolor="rgba(0, 0, 0, 0.8)"
                    display="flex" flexDirection="column"
                    justifyContent="center" alignItems="center"
                    sx={{ borderRadius: '10px' }}
                >
                    <Typography 
                        variant="h6" 
                        color="#00ffa4"
                        fontWeight="bold"
                        sx={{ mb: 2 }} // Margem inferior para espaçamento
                    >
                        {title}
                    </Typography>
                    <Typography color="#ffffff" textAlign="center" sx={{ px: 2, mb: 2 }}>
                        {description}
                    </Typography>
                    <Button 
                        variant="contained" 
                        href={source} 
                        target="_blank" 
                        sx={{
                            bgcolor: '#6b47f0',
                            '&:hover': { bgcolor: 'rgba(108, 71, 240, 0.7)' },
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                     >
                        <i className='fa fa-code' style={{ fontSize: '1rem' }} />
                           Source Code
                     </Button>
                </Box>
            )}
        </Box>
    );
}

export default PortfolioBlock;
