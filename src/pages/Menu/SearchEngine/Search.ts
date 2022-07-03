import tw, { styled } from 'twin.macro';
import { StyledComponent } from 'styled-components';

type ISearch = StyledComponent<'div', any, {}, never> & {
   Input: StyledComponent<'input', any, {}, never>;
}

const Search = styled.div`
   ${tw`flex justify-between items-center`}
   ${tw`bg-dark-300`}
   ${tw`rounded-[5px]`}
   ${tw`gap-[1.125rem]`}
   ${tw`px-[0.9375rem]`}
   ${tw`h-[2.625rem] w-25`}
   ${tw`mobile_max:w-full`}
` as ISearch;

Search.Input = styled.input`
   ${tw`bg-dark-300`}
   ${tw`border-none`}
   ${tw`text-2xl font-bold`}
   ${tw`outline-none`}
   ${tw`w-full`}
   ${tw`placeholder:text-dark-700`}
`;

export default Search;