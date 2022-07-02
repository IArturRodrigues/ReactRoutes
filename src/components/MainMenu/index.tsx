import { Link } from 'react-router-dom';
import Logo from '../Logo';

import NavMenu from './styles';

interface IRoutes {
   label: string;
   to: string;
}

export function MainNavMenu(): JSX.Element {
   const routes: IRoutes[] = [
      {
         label: 'Início',
         to: '/'
      },
      {
         label: 'Cardápio',
         to: '/cardapio'
      },
      {
         label: 'Sobre',
         to: '/sobre'
      }
   ];

   return (
      <NavMenu>
         <Logo />
         <NavMenu.List>
            {routes.map((route, index) => (
               <NavMenu.Link key={index}>
                  <Link to={route.to}>
                     {route.label}
                  </Link>
               </NavMenu.Link>
            ))}
         </NavMenu.List>
      </NavMenu>
   );
}

export default MainNavMenu;