import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainNavMenu, Default, Footer } from './components';
import { Home, Menu, About, Food, NotFound } from './pages';

export default function Router() {
   return (
      <main className="container">
         <BrowserRouter>
            <MainNavMenu />
            <Routes>
               <Route path='/' element={<Default />} >
                  <Route index element={<Home />} />
                  <Route path='cardapio' element={<Menu />} />
                  <Route path='sobre' element={<About />} />
                  <Route path='prato/:id' element={<Food />} />
               </Route>
               <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </main>
   );
}