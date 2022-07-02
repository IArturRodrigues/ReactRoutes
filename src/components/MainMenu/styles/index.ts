import tw, { styled } from 'twin.macro';
import { StyledComponent } from 'styled-components';

import List from './List';
import Link from './Link';

// StyledComponent<typeof HTMLTag as string, any, Props = any, never>
type INavMenu = StyledComponent<'nav', any, any, never> & {
   List: StyledComponent<'ul', any, any, never>;
   Link: StyledComponent<'li', any, any, never>;
}

const NavMenu = styled.nav`
   ${tw`flex`}
   ${tw`py-5 px-15.625`}
   ${tw`desktop_xsm:px-6.25`}
   ${tw`desktop_xsm_sm:px-9.375`}
   ${tw`desktop_sm_md:px-12.5`}
` as INavMenu;

NavMenu.List = List;
NavMenu.Link = Link;

export default NavMenu;