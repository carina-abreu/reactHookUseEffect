import { useState, useEffect } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material'
import Exemplo_3 from '../../Assets/Exemplo_3.png'

function Exemplo3() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('Valor inicial');
    
    useEffect(() => {
        alert('Mudou o title');
    }, []);

    function increase() {  
      setCount(old => ++old);
    
      if (count > 10) {
        setTitle('Novo valor');
      }
    };
  
  return (
    <Grid container columns={12} 
      sx={{height:'100%', widht:'100%', backgroundColor:'#fafafa', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Box 
        sx={{height:'400px', padding:'10%', widht:'400px', backgroundColor:'#afafaf', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'20px'}}>
        <Typography variant='h5' color='primary'>Variante terceira do <strong>UseEffect:</strong> Atualiza na primeira e única renderização do componente</Typography>
        <Typography variant='h5'>Você clicou {count} vezes</Typography>
          <Button sx={{backgroundColor:'#ffeb3b', padding:'20px'}} onClick={increase}>
            Clique aqui
          </Button>
          <Typography variant='h6'>O useEffect é executado quando o componente atualiza ou é renderizado</Typography>
      <img src={Exemplo_3}/>
      </Box>
      
    </Grid>      
  );
}

export default Exemplo3;