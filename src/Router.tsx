import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainNavMenu } from './components';
import { Default, Home, Menu } from './pages';

export default function Router() {
   return (
      <main>
         <BrowserRouter>
            <MainNavMenu />
            <Routes>
               <Route path='/' element={<Default />} >
                  <Route index element={<Home />} />
                  <Route path='cardapio' element={<Menu />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </main>
   );
}