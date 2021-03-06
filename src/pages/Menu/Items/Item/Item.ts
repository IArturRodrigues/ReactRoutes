import tw, { styled } from 'twin.macro';
import { StyledComponent } from 'styled-components';

type IItem = StyledComponent<'li', any, {}, never> & {
   Image: StyledComponent<'div', any, {}, never>;
}

type IDescription = StyledComponent<'div', any, {}, never> & {
   Title: StyledComponent<'div', any, {}, never>;
}

const Item = styled.li`
   ${tw`flex flex-wrap items-center`}
   ${tw`w-[90%] ease-in duration-200`}
   ${tw`rounded-[0.625rem] p-5 cursor-pointer`}
   ${tw`hover:bg-dark-300`}
` as IItem;

Item.Image = styled.div`
   ${tw`min-w-[15rem] desktop_xsm:w-full`}
   
   img {
      ${tw`w-full rounded-lg`}
   }
`;

const Description = styled.div`
   ${tw`flex flex-col flex-wrap flex-1 justify-around`}
   ${tw`px-5`}
   ${tw`desktop_xsm:flex-row`}
   ${tw`desktop_xsm:mt-5`}
   ${tw`desktop_xsm:p-0`}
` as IDescription;

Description.Title = styled.div`
   h2 {
      ${tw`text-[2rem] font-bold mb-5`}
   }
   p {
      ${tw`text-dark-500 text-[1.3rem] font-semibold max-w-[37.5rem] mb-5`}
   }
`;

export { Item, Description };