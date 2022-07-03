import tw, { styled } from 'twin.macro';
import { StyledComponent } from 'styled-components';

interface Props {
   isActive: boolean;
}

type IOptions = StyledComponent<'ul', any, Props, never> & {
   Item: StyledComponent<'li', any, {}, never>;
}

const Options = styled.ul<Props>`
   ${tw`hidden absolute flex-col`}
   ${tw`left-0 top-full`}
   ${tw`w-full`}
   ${({ isActive }) => isActive && tw`flex`}
` as IOptions;

Options.Item = styled.li`
   ${tw`flex items-center justify-center box-border`}
   ${tw`bg-dark-300`}
   ${tw`border-t-2 border-t-dark-100`}
   ${tw`text-white`}
   ${tw`h-10`}
   width: inherit;
`;

export default Options;

/* ${({ isActive }) => isActive && tw`bg-blue-900 cursor-pointer text-white`} */