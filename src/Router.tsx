import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainNavMenu, Footer } from './components';

const Default = lazy(() => import('./components/Default'));
const Home = lazy(() => import('./pages/Home'));
const Menu = lazy(() => import('./pages/Menu'));
const About = lazy(() => import('./pages/About'));
const Food = lazy(() => import('./pages/Food'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Admin = lazy(() => import('./pages/Admin'));

export default function Router() {
   return (
      <main className="container">
         <BrowserRouter>
            <MainNavMenu />
            <Suspense>
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
            </Suspense>
            <Footer />
         </BrowserRouter>
      </main>
   );
}