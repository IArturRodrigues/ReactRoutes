import carte from '@src/data/carte.json';

import { StyledItem, ItemImage, ItemDescription, ItemTitle, ItemTags, ItemCategory, ItemTagsDescription, ItemPrice } from './styles';

type IItemCategory = 'massas' | 'carnes' | 'combos' | 'veganos';

interface ItemProps {
   children?: React.ReactNode;
   item: typeof carte[0];
}

export default function Item({ item }: ItemProps): JSX.Element {
   const { photo, title, description, category, size, serving, price } = item;

   return (
      <StyledItem>
         <ItemImage>
            <img src={photo} alt={title} />
         </ItemImage>
         <ItemDescription>
            <ItemTitle>
               <h2> {title} </h2>
               <p> {description} </p>
            </ItemTitle>
            <ItemTags>
               <ItemCategory type={category.label.toLowerCase() as IItemCategory} >{category.label}</ItemCategory>
               <ItemTagsDescription>{size}g</ItemTagsDescription>
               <ItemTagsDescription>Serve {serving} pessoa{serving === 1 ? '' : 's'}</ItemTagsDescription>
               <ItemPrice>R$ {price},00</ItemPrice>
            </ItemTags>
         </ItemDescription>
      </StyledItem>
   );
}


// this is a comment
/**
 * const mode = useMode();
 *
 * useLayoutEffect(() => {
 *    if (title === "Macarrão mediterrâneo") console.log("componentWillMount");
 * }, [title]);
 *
 * useEffect(() => {
 *    if (title === "Macarrão mediterrâneo") console.log("componentDidMount");
 * }, [title]);
 *
 * useEffect(() => {
 *    if (title === "Macarrão mediterrâneo") console.log("componentDidUpdate: ", mode);
 * }, [title, mode]);
 *
 * useEffect(() => {
 *    return () => {
 *       if (title === "Macarrão mediterrâneo") console.log("componentWillUnmount");
 *    }
 * }, [title]);
 */