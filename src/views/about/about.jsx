import { Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import { Container, styled } from '@mui/system';
import PersonCard from './person_card';

const About = () => {
  return (

    <div className="about">
      <Container maxWidth="xl" sx={{ mt: 3 }}>

        <Container sx={{ textAlign: 'center' }}>
          <Typography variant="h3" color="#022B3A" fontWeight='lighter'>
            FuelQ - Team
          </Typography>
        </Container>

        <Container sx={{ textAlign: 'center', mt:3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <PersonCard name={'Deshan Lakshitha'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deleniti eaque autem. Molestias quasi unde accusamus. Velit incidunt praesentium ducimus, aut alias at doloremque doloribus voluptatibus? Voluptate facere officiis autem.'} />
            </Grid>
            <Grid item xs={12} md={4}>
              <PersonCard name={'Theshan Wijerathne'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deleniti eaque autem. Molestias quasi unde accusamus. Velit incidunt praesentium ducimus, aut alias at doloremque doloribus voluptatibus? Voluptate facere officiis autem.'} />
            </Grid>
            <Grid item xs={12} md={4}>
              <PersonCard name={'Yasiru Lakshan'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deleniti eaque autem. Molestias quasi unde accusamus. Velit incidunt praesentium ducimus, aut alias at doloremque doloribus voluptatibus? Voluptate facere officiis autem.'} />
            </Grid>
          </Grid>
        </Container>

      </Container>
    </div>

  );
}

export default About;