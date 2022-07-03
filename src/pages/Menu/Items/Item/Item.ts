import tw, { styled } from 'twin.macro';
import { StyledComponent } from 'styled-components';

interface ItemCategory {
   type: 'massas' | 'carnes' | 'combos' | 'veganos';
}

type IItem = StyledComponent<'li', any, {}, never> & {
   Image: StyledComponent<'div', any, {}, never>;
}

type IDescription = StyledComponent<'div', any, {}, never> & {
   Title: StyledComponent<'div', any, {}, never>;
}

type ITags = StyledComponent<'div', any, {}, never> & {
   Category: StyledComponent<'div', any, ItemCategory, never>;
   Description: StyledComponent<'div', any, {}, never>;
   Price: StyledComponent<'div', any, {}, never>;
}

const MASSAS = '#d73b3b';
const CARNES = '#30201e';
const COMBOS = '#e6c864';
const VEGANOS = '#80aa40';

const Item = styled.li`
   ${tw`flex flex-wrap`}
   ${tw`w-[90%]`}
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
   ${tw`desktop_xsm:px-0`}
` as IDescription;

Description.Title = styled.div`
   h2 {
      ${tw`text-[2rem] font-bold mb-5`}
   }
   p {
      ${tw`text-dark-500 text-[1.3rem] font-semibold max-w-[37.5rem] mb-5`}
   }
`;

const Tags = styled.div`
   ${tw`flex flex-wrap justify-between mb-5 max-w-[43.75rem]`}
   ${tw`desktop_xsm:justify-end`}
   ${tw`mobile_max:justify-start`}
   > div {
      ${tw`m-2.5`}
   }
` as ITags;

const Type = styled.div`
   ${tw`flex items-center justify-center`}
   ${tw`rounded-sm`}
   ${tw`py-2.5 px-[1.875rem]`}
   ${tw`h-10`}
   ${tw`font-bold`}
`;

Tags.Category = styled(Type) <ItemCategory>`
   ${({ type }) => type === 'massas' ? tw`bg-[${MASSAS}] text-white` : ''}
   ${({ type }) => type === 'carnes' ? tw`bg-[${CARNES}] text-white` : ''}
   ${({ type }) => type === 'combos' ? tw`bg-[${COMBOS}]` : ''}
   ${({ type }) => type === 'veganos' ? tw`bg-[${VEGANOS}]` : ''}
`;

Tags.Description = styled.div`
   ${tw`flex items-center justify-center`}
   ${tw`text-xl font-bold`}
`;

Tags.Price = styled(Tags.Description)`
   ${tw`text-red-500 text-[1.7rem]`}
`;

export { Item, Description, Tags };