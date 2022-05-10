import { Grid, Paper, Box, Button } from '@material-ui/core';
import React from 'react';
import './citation.css';

const CitationCard = () => {
  return (
    <>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper elevation={5}>
                <Box className='cardTitleBox'>
                Fecha 
                <br/>
                Jornada
                </Box>
                <Box className='cardContentBox'>
                Convocatoria: 
                <br/>
                Cupos disponibles: 
                <br/>
                Aspirantes inscritos: 
                <br/>
                </Box>
                <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                paddingY={1}>

            <Button variant="outlined" color='success'>
            <i class="far fa-edit"></i>
			</Button>
                <Button variant="outlined" color='secondary' >
                <i
					className='far fa-trash-alt'
					style={{ color: "red" }}>     
                </i>
                </Button> 
                </Box>
            </Paper>            
        </Grid>
    </>
  )
}

export default CitationCard;