import tw, { styled } from 'twin.macro';
import { StyledComponent } from 'styled-components';

interface Props {
   isActive: boolean;
}

type ISort = StyledComponent<'div', any, {}, never> & {
   Button: StyledComponent<'button', any, Props, never>;
}

const Sort = styled.div`
   ${tw`flex min-w-[17.5rem] justify-between items-center`}
` as ISort;

Sort.Button = styled.button<Props>`
   ${tw`flex items-center justify-between relative`}
   ${tw`border-none rounded-tl rounded-tr`}
   ${tw`text-base font-bold`}
   ${tw`bg-dark-300`}
   ${tw`h-10`}
   ${tw`min-w-[15rem]`}
   ${tw`px-10`}
   ${({ isActive }) => isActive && tw`bg-blue-900 text-white`}
`;

export default Sort;
/* ${({ isActive }) => isActive && tw`bg-blue-900 cursor-pointer text-white`} */