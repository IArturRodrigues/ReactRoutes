import tw, { styled } from 'twin.macro';
import { StyledComponent } from 'styled-components';

type IHeader = StyledComponent<'header', any, {}, never> & {
   Text: StyledComponent<'div', any, {}, never>;
}

const Header = styled.header`
   ${tw`h-[18.75rem]`}
   ${tw`bg-header bg-cover bg-no-repeat`}
   ${tw`flex items-center`}
   ${tw`px-horizontal_padding`}
   ${tw`desktop_xsm:px-mobile_horizontal_padding`}
   ${tw`desktop_xsm_sm:px-sm_horizontal_padding`}
   ${tw`desktop_sm_md:px-md_horizontal_padding`}
` as IHeader;

Header.Text = styled.div`
   ${tw`text-white text-[5rem]`}
   ${tw`leading-tight`}
   ${tw`min-w-25`}
   ${tw`w-[40%]`}
`;

export { Header };