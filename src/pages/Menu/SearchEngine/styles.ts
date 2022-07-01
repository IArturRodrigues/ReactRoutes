import tw from 'twin.macro';

export const Search = tw.div`
   items-center
   bg-dark-300
   rounded-[5px]
   flex
   gap-[1.125rem]
   h-[2.625rem]
   justify-between
   px-[0.9375rem]
   w-25
   mobile_max:w-full
`;

export const Input = tw.input`
   bg-dark-300
   border-none
   text-2xl
   font-bold
   outline-none
   w-full
   placeholder:text-dark-700

`;