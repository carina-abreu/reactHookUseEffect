import {Link} from 'react-router-dom'
import Counter3 from '../Counter3'
import { useState, useEffect } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material'
import Exemplo_2 from '../../Assets/Exemplo_2.png'

function Exemplo2() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('Valor inicial');
    
    useEffect(() => {
        alert('Mudou o title');
    }, [title]);

    function increase() {  
      setCount(old => ++old);
      
      if (count >= 10) {
        setTitle('Novo valor');
      }
    };
  
  return (
    <Grid container columns={12} 
    sx={{height:'100%', widht:'100%', backgroundColor:'#fafafa', display:'flex', justifyContent:'center', alignItems:'center'}}>
    <Box 
      sx={{height:'400px', padding:'10%', widht:'400px', backgroundColor:'#afafaf', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'20px'}}>
      <Typography variant='h5' color='primary'>Variante segunda do <strong>UseEffect:</strong> Atualiza a cada mudança de valor do componente</Typography>
      <Typography variant='h5'>Você clicou {count} vezes</Typography>
        <Button sx={{backgroundColor:'#ffeb3b', padding:'20px'}} onClick={increase}>
          Clique aqui
        </Button>
        <Typography variant='h6'>O useEffect é executado quando o componente atualiza ou é renderizado</Typography>
    <img src={Exemplo_2}/>
    </Box>
    <Link color='primary' to='/Counter3'>Exemplo 3</Link>  
  </Grid>  
  );
}

export default Exemplo2;