import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { ICard } from '../models/product';
import { getData } from '../api/Api';
import { log } from 'console';
import { Box, Grid } from '@mui/material';

export default function MediaCard(props:any) {
    return (
        <Grid container spacing={2}>
        <Grid item xs={10}>
            
        <Card sx={{ margin:15 }}>
            <CardMedia
                sx={{ height: 340 }}
                image="https://loremflickr.com/640/480/city"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h2" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
              </Grid>
                <Grid item xs={2}>
                <Box>Sepet comp yapılacak</Box>
              </Grid>
            </Grid>
    );
}
