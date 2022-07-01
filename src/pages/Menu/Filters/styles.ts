import tw, { styled } from 'twin.macro';

interface FilterProps {
   isActive: boolean;
}

// export const StyledWithProps = styled.div<Props>``;

export const StyledFilters = tw.div`
   flex
   gap-6
   flex-wrap
   my-5
`;

export const Filter = styled.button<FilterProps>`
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