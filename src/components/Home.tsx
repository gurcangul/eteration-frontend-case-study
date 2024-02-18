import React, { useState, useEffect } from 'react';
import { ICard } from '../models/product';
import { getData } from '../api/Api';
import Navbar from './Navbar';
import ICardi from './ICardi';
import { Box, Grid } from '@mui/material';
import SortCard from './SortCard';


export default function Home() {
  const [dataApi, setDataApi] = useState<ICard[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(); // await kullanarak veri al

        setDataApi(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // useEffect() ilk kez çalıştığında servis isteğini başlat
  }, []); // Boş bağımlılık dizisi, yalnızca bileşen yüklendiğinde bir kez çalışır

  return (
    <div style={{ width: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <SortCard />
        </Grid>
        <Grid item xs={8}>
          <Box sx={{
            display: 'flex',
            maxWidth: 1,
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems: 'flex-start',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}>
            {dataApi?.map((item, index) => (
              <ICardi key={index} product={item} />
            ))}
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box>Sepet comp yapılacak</Box>
        </Grid>
      </Grid>
    </div>
  );
}

