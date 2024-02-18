import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ICard } from '../models/product';
import { Link } from 'react-router-dom';



export default function MediaCard({ product }: { product: ICard }) {
  return (
    <Card sx={{ minWidth: 280, margin:2  }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`${product.image}`}
        title="green iguana"
      />
      <CardContent>
      <Typography variant="body2" color="#2a59fe">
          {product.price} ₺
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {product.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link to={`/${product.id}`}>Detay</Link></Button>
        <Button size="small"> Add to Cart</Button>
      </CardActions>
    </Card>
  );
}
