import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainNavMenu, Default, Footer } from './components';
import { Home, Menu, About, Food, NotFound, Admin } from './pages';

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
               </Route>
               <Route path='admin/:user' element={<Admin />} />
               <Route path='prato/:id' element={<Food />} />
               <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </main>
   );
}