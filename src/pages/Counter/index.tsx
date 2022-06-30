import { useState, useEffect } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material'
import exemplo_1 from '../../Assets/Exemplo_1.png'

function Exemplo() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  });

  return (
    <Grid container columns={12} 
      sx={{height:'100%', widht:'100%', backgroundColor:'#fafafa', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Box 
        sx={{height:'400px', padding:'10%', widht:'400px', backgroundColor:'#afafaf', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'20px'}}>
        <Typography variant='h5' color='primary'>Variante primeira do <strong>UseEffect:</strong> Atualiza a cada renderização do componente</Typography>
        <Typography variant='h5'>Você clicou {count} vezes</Typography>
          <Button sx={{backgroundColor:'#ffeb3b', padding:'20px'}} onClick={() => setCount(count + 1)}>
            Clique aqui
          </Button>
          <Typography variant='h6'>O useEffect é executado quando o componente atualiza ou é renderizado</Typography>
      <img src={exemplo_1}/>
      </Box>
    </Grid>      
  );
}

export default Exemplo;