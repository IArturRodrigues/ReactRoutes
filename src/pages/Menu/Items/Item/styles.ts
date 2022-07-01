import tw, { styled } from 'twin.macro';

interface ItemCategory {
   type: 'massas' | 'carnes' | 'combos' | 'veganos';
}

const MASSAS = '#d73b3b';
const CARNES = '#30201e';
const COMBOS = '#e6c864';
const VEGANOS = '#80aa40';

export const StyledItem = tw.li`
   flex
   flex-wrap
   w-[90%]
`;

export const ItemImage = styled.div`
   ${tw`min-w-[15rem] desktop_xsm:w-full`}
   
   img {
      ${tw`w-full rounded-lg`}
   }
`;

export const ItemDescription = tw.div`
   flex
   flex-col
   flex-wrap
   flex-1
   justify-around
   px-5
   desktop_xsm:flex-row
   desktop_xsm:mt-5
   desktop_xsm:px-0
`;

export const ItemTitle = styled.div`
   h2 {
      ${tw`text-[2rem] font-bold mb-5`}
   }
   p {
      ${tw`text-dark-500 text-[1.3rem] font-semibold max-w-[37.5rem] mb-5`}
   }
`;

export const ItemTags = styled.div`
   ${tw`flex flex-wrap justify-between mb-5 max-w-[43.75rem]`}
   ${tw`desktop_xsm:justify-end`}
   ${tw`mobile_max:justify-start`}
   > div {
      ${tw`m-2.5`}
   }
`;

const ItemType = tw.div`
   flex items-center justify-center
   rounded-sm
   py-2.5 px-[1.875rem]
   h-10
   font-bold
`;

export const ItemCategory = styled(ItemType) <ItemCategory>`
   ${({ type }) => type === 'massas' ? tw`bg-[${MASSAS}] text-white` : ''}
   ${({ type }) => type === 'carnes' ? tw`bg-[${CARNES}] text-white` : ''}
   ${({ type }) => type === 'combos' ? tw`bg-[${COMBOS}]` : ''}
   ${({ type }) => type === 'veganos' ? tw`bg-[${VEGANOS}]` : ''}
`;

export const ItemTagsDescription = tw.div`
   flex items-center justify-center
   text-xl font-bold
`;

export const ItemPrice = tw(ItemTagsDescription)`
   text-red-500 text-[1.7rem]
`;
