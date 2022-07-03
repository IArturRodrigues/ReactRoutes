import tw, { styled } from 'twin.macro';
import { StyledComponent } from 'styled-components';

type IAboutUs = StyledComponent<'div', any, {}, never> & {
   Text: StyledComponent<'div', any, {}, never>;
}

type IImages = StyledComponent<'div', any, {}, never> & {
   Item: StyledComponent<'div', any, {}, never>;
}

const AboutUs = styled.div`
   ${tw`flex gap-5 mb-[3.125rem]`}
` as IAboutUs;

AboutUs.Text = styled.div`
   ${tw`flex flex-col justify-center`}
   ${tw`text-2xl font-bold text-justify`}
   > p {
      ${tw`font-josefin`}
   }
`;

const Images = styled.div`
   ${tw`flex flex-wrap justify-between gap-5`}
` as IImages;

Images.Item = styled.div`
   ${tw`w-[37.5rem]`}
   img {
      ${tw`rounded-[0.3125rem] w-full`}
   }
`;

export { AboutUs, Images };
