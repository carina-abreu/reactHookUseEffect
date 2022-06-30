import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Counter from './pages/Counter'
import Counter2 from './pages/Counter2'
import Counter3 from './pages/Counter3'
import Counter4 from './pages/Counter4'

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/landing' element={<Landing/>} />
                <Route path='/counter2' element={<Counter2/>} />
                <Route path='/counter3' element={<Counter3/>} />
                <Route path='/counter4' element={<Counter4/>} />
            </Routes>
        </BrowserRouter>
    );
}