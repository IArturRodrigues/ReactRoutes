import tw, { styled } from 'twin.macro';
// import { StyledComponent } from 'styled-components';

const Container = styled.div`
   ${tw`py-[3.125rem] px-horizontal_padding`}
   ${tw`desktop_xsm:px-mobile_horizontal_padding`}
   ${tw`desktop_xsm_sm:px-sm_horizontal_padding`}
   ${tw`desktop_sm_md:px-md_horizontal_padding`}
`;

const Title = styled.h3`
   ${tw`text-dark-900 text-5xl mb-[1.875rem]`}
`;

export default { Container, Title };