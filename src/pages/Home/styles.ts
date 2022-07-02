import tw, { styled } from 'twin.macro';

export const Container = tw.section``;

export const Title = tw.h3`
   text-dark-900 text-5xl
   mb-[1.875rem]
`;

export const Recommended = tw.div`
   rounded-sm
   flex flex-wrap justify-between
   gap-[1.875rem]
`;

export const RecommendedItem = tw.div``;

export const RecommendedImage = styled.div`
   ${tw`w-[18.75rem] mb-2.5`}
   img {
      ${tw`rounded-lg w-full`}
   }
`;

export const RecommendedButton = tw.button`
   bg-red-500
   rounded-[0.3125rem] border-none 
   text-white text-[1.2rem] font-bold
   cursor-pointer
   py-2.5
   w-full
   ease-in duration-200
   hover:bg-red-901
`;

export const OurHome = styled.div`
   ${tw`mb-[6.25rem] relative w-full`}
   img {
      ${tw`rounded-[0.3125rem] w-full`}
   }
`;

export const Address = tw`
   flex flex-col justify-center items-center absolute
   bg-dark-900 text-white font-bold
   rounded-[0.3125rem]
   w-[12.5rem] h-[6.25rem]
   mx-auto
   bottom-[-2.8125rem] left-0 right-0
`;
