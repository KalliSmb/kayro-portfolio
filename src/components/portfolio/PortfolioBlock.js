import React, { useState } from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
    const { image, live, source, title, description } = props;
    const [hovered, setHovered] = useState(false);

    return (
        <Box 
            display={'flex'} 
            flexDirection={'column'} 
            justifyContent={'center'} 
            alignItems={'center'} 
            position={'relative'} 
            width={'100%'}
        >
            <Box
                position={'relative'}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                width={'100%'}
                maxWidth={'500px'}
                display={'inline-block'}
            >
                <Box 
                    component={'img'} 
                    src={image} 
                    alt={'mockup'} 
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        borderRadius: '10px',
                        transition: 'transform 0.3s ease',
                        transform: hovered ? 'scale(1.1)' : 'scale(1)',
                    }}
                />
                {hovered && (
                    <Box 
                        position={'absolute'} 
                        top={0} 
                        left={0} 
                        width={'100%'} 
                        height={'100%'} 
                        bgcolor={'rgba(39, 36, 47, 0.75)'} 
                        color={'#fff'} 
                        display={'flex'} 
                        flexDirection={'column'} 
                        justifyContent={'center'} 
                        alignItems={'center'} 
                        borderRadius={'10px'}
                        zIndex={1}
                        p={2}
                    >
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h2>
                        <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>{description}</p>
                        <Box display={'flex'} gap={'1rem'}>
                            <Box p={1} border={'2px solid white'} borderRadius={'25px'}>
                                <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
                            </Box>
                            <Box p={1} border={'2px solid white'} borderRadius={'25px'}>
                                <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
                            </Box>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    );
}

export default PortfolioBlock;
