import tw, { styled } from 'twin.macro';
import { StyledComponent } from 'styled-components';

type INavMenu = StyledComponent<'nav', any, {}, never> & {
   List: StyledComponent<'ul', any, {}, never>;
   Link: StyledComponent<'li', any, {}, never>;
}

const NavMenu = styled.nav`
   ${tw`flex`}
   ${tw`py-5 px-horizontal_padding`}
   ${tw`desktop_xsm:px-mobile_horizontal_padding`}
   ${tw`desktop_xsm_sm:px-sm_horizontal_padding`}
   ${tw`desktop_sm_md:px-md_horizontal_padding`}
` as INavMenu;

NavMenu.List = styled.ul`
   ${tw`flex items-center`}
`;

NavMenu.Link = styled.li`
   ${tw`list-none px-5`}
   ${tw`[> a]:text-dark-900 text-2xl font-semibold`}
   ${tw`[> a]:ease-in duration-200 cursor-pointer no-underline`}
   ${tw`[> a]:hover:text-dark-500`}
`;

export default NavMenu;