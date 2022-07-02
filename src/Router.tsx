import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainNavMenu } from './components';
import Home from './pages/Home';
import Menu from './pages/Menu';

export default function Router() {
   return (
      <BrowserRouter>
         <MainNavMenu />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cardapio' element={<Menu />} />
         </Routes>
      </BrowserRouter>
   );
}