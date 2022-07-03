import tw, { styled } from 'twin.macro';

import Global from '@src/styles/Global';

const NotFound = styled(Global.Container)`
   ${tw`flex flex-1 flex-col justify-center items-center`}
`;

const GoBack = styled.div`
   ${tw`flex justify-start w-full`}
   button {
      ${tw`bg-transparent`}
      ${tw`border-none`}
      ${tw`cursor-pointer`}
      ${tw`text-2xl font-bold text-red-500`}
   }
`;

export { NotFound, GoBack };

// .container {
//    align-items: center;
//    display: flex;
//    flex: 1;
//    flex-direction: column;
//    justify-content: center;
// }
// .voltar {
//    display: flex;
//    justify-content: flex-start;
//    width: 100%;
//    button {
//       background-color: transparent;
//       border: none;
//       color: $red;
//       cursor: pointer;
//       font-size: 1.5rem;
//       font-weight: bold;
//    }
// }