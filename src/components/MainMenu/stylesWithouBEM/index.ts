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
   ${tw`py-5 px-horizontal_padding`}
   ${tw`desktop_xsm:px-mobile_horizontal_padding`}
   ${tw`desktop_xsm_sm:px-sm_horizontal_padding`}
   ${tw`desktop_sm_md:px-md_horizontal_padding`}
` as INavMenu;

NavMenu.List = List;
NavMenu.Link = Link;

export default NavMenu;