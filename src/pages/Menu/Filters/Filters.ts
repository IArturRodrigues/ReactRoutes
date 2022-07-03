import tw, { styled } from 'twin.macro';
import { StyledComponent } from 'styled-components';

interface FilterProps {
   isActive: boolean;
}

type IFilter = StyledComponent<'div', any, {}, never> & {
   Item: StyledComponent<'button', any, FilterProps, never>;
}

const Filters = styled.div`
   ${tw`flex flex-wrap`}
   ${tw`gap-6`}
   ${tw`my-5`}
` as IFilter;

Filters.Item = styled.button<FilterProps>`
   ${tw`flex items-center justify-center`}
   ${tw`bg-dark-300`}
   ${tw`border-none`}
   ${tw`rounded`}
   ${tw`text-xl font-bold`}
   ${tw`h-10`}
   ${tw`w-[9.375rem]`}
   ${({ isActive }) => isActive && tw`bg-blue-900 text-white`}
   /* ${tw`hover:cursor-pointer`} */
`;

export default Filters;