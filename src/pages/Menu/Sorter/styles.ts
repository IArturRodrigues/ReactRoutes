// import tw, { styled } from 'twin.macro';

// interface Props {
//    isActive: boolean;
// }

// export const StyledSorter = tw.div`
//    flex min-w-[17.5rem] justify-between items-center
// `;

// export const Sort = styled.button<Props>`
//    ${tw`flex items-center justify-between relative`}
//    ${tw`border-none rounded-tl rounded-tr`}
//    ${tw`text-base font-bold`}
//    ${tw`bg-dark-300`}
//    ${tw`h-10`}
//    ${tw`min-w-[15rem]`}
//    ${tw`px-10`}
//    ${({ isActive }) => isActive && tw`bg-blue-900 text-white`}
// `;

// export const Options = styled.ul<Props>`
//    ${tw`hidden absolute flex-col`}
//    ${tw`left-0 top-full`}
//    ${tw`w-full`}
//    ${({ isActive }) => isActive && tw`flex`}
// `;

// export const Option = styled.li`
//    ${tw`flex items-center justify-center box-border`}
//    ${tw`bg-dark-300`}
//    ${tw`border-t-2 border-t-dark-100`}
//    ${tw`text-white`}
//    ${tw`h-10`}
//    width: inherit;
// `;
// /* ${({ isActive }) => isActive && tw`bg-blue-900 cursor-pointer text-white`} */