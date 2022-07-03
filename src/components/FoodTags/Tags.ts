import tw, { styled } from 'twin.macro';
import { StyledComponent } from 'styled-components';

interface ICategory {
   category: 'massas' | 'carnes' | 'combos' | 'veganos';
}

type ITags = StyledComponent<'div', any, {}, never> & {
   Type: StyledComponent<'div', any, ICategory, never>
   Portion: StyledComponent<'div', any, {}, never>
   Serving: StyledComponent<'div', any, {}, never>
   Price: StyledComponent<'div', any, {}, never>
}

const MASSAS = '#d73b3b';
const CARNES = '#30201e';
const COMBOS = '#e6c864';
const VEGANOS = '#80aa40';

const Tags = styled.div`
   ${tw`flex flex-wrap justify-between mb-5 max-w-[43.75rem]`}
   ${tw`mobile_max:justify-start`}
   ${tw`desktop_xsm:justify-end`}
   div {
      ${tw`m-2.5`}
   }
` as ITags;

Tags.Type = styled.div<ICategory>`
   ${tw`flex justify-center items-center`}
   ${tw`py-2.5 px-[1.875rem] rounded-sm`}
   ${tw`font-bold h-[2.5rem]`}
   ${({ category }) => category === 'massas' ? tw`bg-[${MASSAS}] text-white` : ''}
   ${({ category }) => category === 'carnes' ? tw`bg-[${CARNES}] text-white` : ''}
   ${({ category }) => category === 'combos' ? tw`bg-[${COMBOS}]` : ''}
   ${({ category }) => category === 'veganos' ? tw`bg-[${VEGANOS}]` : ''}
`;

Tags.Portion = styled.div`
   ${tw`flex items-center justify-center`}
   ${tw`font-bold text-xl`}
`;

Tags.Serving = styled(Tags.Portion)``;

Tags.Price = styled(Tags.Portion)``;

export default Tags;