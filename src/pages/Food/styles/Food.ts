import tw, { styled } from 'twin.macro';
import { StyledComponent } from 'styled-components';

type IContent = StyledComponent<'div', any, {}, never> & {
   Description: StyledComponent<'p', any, {}, never>;
   Details: StyledComponent<'div', any, {}, never>;
}

const Container = styled.section`
   ${tw`flex flex-col items-center gap-5`}
`;

const Title = styled.h1`
   ${tw`text-5xl`}
`;

const Image = styled.div`
   ${tw`w-[37.5rem]`}
   img {
      ${tw`rounded-lg w-full`}
   }
`;

const Content = styled.div`
   ${tw`flex flex-col items-center`}
` as IContent;

Content.Description = styled.p`
   ${tw`text-dark-600 text-2xl font-bold`}
`;

Content.Details = styled.div`
   ${tw`flex justify-between`}
`;

export { Container, Title, Image, Content };