import tw, { styled } from 'twin.macro';
import { StyledComponent } from 'styled-components';

type IRecommended = StyledComponent<'div', any, {}, never> & {
   Item: IItem;
}

type IItem = StyledComponent<'div', any, {}, never> & {
   Image: StyledComponent<'div', any, {}, never>;
   Button: StyledComponent<'button', any, {}, never>;
}

const Recommended = styled.div`
   ${tw`rounded-sm`}
   ${tw`flex flex-wrap justify-between`}
   ${tw`gap-[1.875rem]`}
` as IRecommended;

Recommended.Item = styled.div`` as IItem;

Recommended.Item.Image = styled.div`
   ${tw`w-[18.75rem] mb-2.5`}
   img {
      ${tw`rounded-lg w-full`}
   }
`;

Recommended.Item.Button = styled.button`
   ${tw`bg-red-500`}
   ${tw`rounded-[0.3125rem] border-none`} 
   ${tw`text-white text-[1.2rem] font-bold`}
   ${tw`cursor-pointer`}
   ${tw`py-2.5`}
   ${tw`w-full`}
   ${tw`ease-in duration-200`}
   ${tw`hover:bg-red-901`}
`;
// const Item = ...;
// Recommended.Item = Item;

// const Image = ...;
// const Button = ...;
// Item.Image = Image;
// Item.Button = Button;

export { Recommended };