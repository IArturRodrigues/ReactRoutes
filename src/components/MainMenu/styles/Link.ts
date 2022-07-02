import tw, { styled } from 'twin.macro';
// import styled from 'styled-components';

const Link = styled.li`
   ${tw`list-none px-5`}
   ${tw`[> a]:text-dark-900 text-2xl font-semibold`}
   ${tw`[> a]:ease-in duration-200 cursor-pointer no-underline`}
   ${tw`[> a]:hover:text-dark-500`}
`;

export default Link;

// list-style-type: none;
// padding: 0 20px;
// a {
//    color: $dark;
//    cursor: pointer;
//    font-size: 24px;
//    font-weight: 600;
//    text-decoration: none;
//    transition: .2s ease;
//    &:hover {
//       color: $dark-grey;
//    }
// }