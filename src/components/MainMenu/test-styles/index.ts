// import tw, { TwComponent } from 'twin.macro';
import styled, { StyledComponent } from 'styled-components';

import List from './List';
import Link from './Link';

type NavMenu = StyledComponent<'nav', any, any, never> & {
   // List: TwComponent<'ul'>;
   // Link: TwComponent<'li'>;
   List: any;
   Link: any;
}

const NavMenu = styled.nav`
   display: flex;
   padding: 1.25rem 15.625rem;
   @media (max-width: 980px) {
      padding: inherit 6.25rem;
   }
   @media (min-width: 980px) and (max-widtth: 1080px) {
      padding: inherit 9.375rem;
   }
   @media (min-width: 1080px) and (max-width: 1280px) {
      padding: inherit 12.5px;
   }
` as NavMenu;

// const NavMenu = tw.nav`
//    flex
//    py-5 px-15.625
//    desktop_xsm:px-6.25
//    desktop_xsm_sm:px-9.375
//    desktop_sm_md:px-12.5
// ` as NavMenu;

NavMenu.List = List;
NavMenu.Link = Link;

export default NavMenu;