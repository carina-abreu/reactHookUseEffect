import {Link} from 'react-router-dom'
import { Grid, Typography } from '@mui/material';
import CustomPaper from '../../components/CustomPaper';
import Counter from '../Counter'
import Counter2 from '../Counter2'


export default function Home() {
    return (
        <Grid style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center',
            width: '100vw'}}>
            
            <Grid item xs={12}>
                <CustomPaper title='O que é o useEffect?
                                    useEffect é um hook que tem como
                                    principal objetivo sincronizar estados e 
                                    executar efeitos colaterais. Esse hook 
                                    é uma função que pode receber até 2 argumentos, 
                                    uma função e um array de dependências.'/>
            </Grid>
            <Counter></Counter> 
            <Link color='primary' to='/Counter2'>Exemplo 2</Link>         
        </Grid>
    );
}