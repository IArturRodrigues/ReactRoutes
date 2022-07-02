import tw, { styled } from 'twin.macro';
import { StyledComponent } from 'styled-components';

type IHeader = StyledComponent<'header', any, any, never> & {
   Text: StyledComponent<'div', any, any, never>;
}

const StyledHeader = styled.header`
   ${tw`h-[18.75rem]`}
   ${tw`bg-header bg-cover bg-no-repeat`}
   ${tw`flex items-center`}
   ${tw`px-15.625`}
   ${tw`desktop_xsm:px-6.25`}
   ${tw`desktop_xsm_sm:px-9.375`}
   ${tw`desktop_sm_md:px-12.5`}
` as IHeader;

StyledHeader.Text = styled.div`
   ${tw`text-white text-[5rem]`}
   ${tw`leading-tight`}
   ${tw`min-w-25`}
   ${tw`w-[40%]`}
`;

export default StyledHeader;