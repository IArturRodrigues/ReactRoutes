import tw, { styled } from 'twin.macro';

const Footer = styled.footer`
   ${tw`flex justify-end`}
   ${tw`py-2.5 px-horizontal_padding`}
   ${tw`bg-red-500`}
   ${tw`desktop_xsm:px-mobile_horizontal_padding`}
   ${tw`desktop_xsm_sm:px-sm_horizontal_padding`}
   ${tw`desktop_sm_md:px-md_horizontal_padding`}
`;

export default Footer;