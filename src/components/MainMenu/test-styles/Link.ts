// import tw from 'twin.macro';
import styled from 'styled-components';

const Link = styled.li`
   list-style-type: none;
   padding: 0 1.25rem;
   a {
      color: rgba(36, 37, 54);
      font-size: 1.5rem;
      font-weight: 600;
      transition: .2s ease;
      cursor: pointer;
      text-decoration: none;
      &:hover {
         color: rgba(146, 146, 157);
      }
   }
`;

// const Link = tw.li`
//    list-none px-5
//    [> a]:text-dark-900 text-2xl font-semibold
//    [> a]:ease-in duration-200 cursor-pointer no-underline
//    [> a]:hover:text-dark-500
// `;

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