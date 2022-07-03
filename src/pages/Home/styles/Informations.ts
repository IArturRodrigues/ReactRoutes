import tw, { styled } from 'twin.macro';

const OurHome = styled.div`
   ${tw`mb-[6.25rem] relative w-full`}
   img {
      ${tw`rounded-[0.3125rem] w-full`}
   }
`;

const Address = tw`
   flex flex-col justify-center items-center absolute
   bg-dark-900 text-white font-bold
   rounded-[0.3125rem]
   w-[12.5rem] h-[6.25rem]
   mx-auto
   bottom-[-2.8125rem] left-0 right-0
`;

export { OurHome, Address };