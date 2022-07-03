import tw, { styled } from 'twin.macro';
import { StyledComponent } from 'styled-components';

type ICarte = StyledComponent<'section', any, {}, never> & {
   Filters: StyledComponent<'div', any, {}, never>;
}

const Carte = styled.section`
   ${tw`py-[3.125rem]`}
   ${tw`px-horizontal_padding`}
   ${tw`desktop_xsm:px-mobile_horizontal_padding`}
   ${tw`desktop_xsm_sm:px-sm_horizontal_padding`}
   ${tw`desktop_sm_md:px-md_horizontal_padding`}
` as ICarte;

Carte.Filters = styled.div`
   ${tw`flex flex-wrap justify-between items-center`}
   ${tw`mb-[1.875rem]`}
   ${tw`w-full`}
`;

export default Carte;