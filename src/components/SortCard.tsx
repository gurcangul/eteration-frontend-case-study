import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 250, marginLeft:12, marginTop:2, padding:2, }}>
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Short by</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="short"
        name="radio-buttons-group"
      >
        <FormControlLabel value="oldtonew" control={<Radio />} label="Old to new" />
        <FormControlLabel value="newtoold" control={<Radio />} label="New to old" />
        <FormControlLabel value="hightolow" control={<Radio />} label="Price high to low" />
        <FormControlLabel value="lowyohigh" control={<Radio />} label="Price low to hight" />
      </RadioGroup>
    </FormControl>
    </Card>
  );
}

