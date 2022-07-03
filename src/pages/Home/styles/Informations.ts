import tw, { styled } from 'twin.macro';
import { StyledComponent } from 'styled-components';

type IOurHome = StyledComponent<'div', any, {}, never> & {
   Address: StyledComponent<'div', any, {}, never>;
}

const OurHome = styled.div`
   ${tw`mb-[6.25rem] relative w-full`}
   img {
      ${tw`rounded-[0.3125rem] w-full`}
   }
` as IOurHome;

OurHome.Address = styled.div`
   ${tw`flex flex-col justify-center items-center absolute`}
   ${tw`bg-dark-900 text-white font-bold`}
   ${tw`rounded-[0.3125rem]`}
   ${tw`w-[12.5rem] h-[6.25rem]`}
   ${tw`mx-auto`}
   ${tw`bottom-[-2.8125rem] left-0 right-0`}
`;

export default OurHome;