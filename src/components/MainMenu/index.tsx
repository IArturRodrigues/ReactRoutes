import Logo from '../Logo';

import { MainMenuNav } from './styles';

export function MainMenu(): JSX.Element {
   return (
      <MainMenuNav>
         <Logo />
      </MainMenuNav>
   );
}

export default MainMenu;