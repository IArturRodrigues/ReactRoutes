import carte from '@src/data/carte.json';

import { Item as SItem, Description, Tags } from './Item';

type IItemCategory = 'massas' | 'carnes' | 'combos' | 'veganos';

interface ItemProps {
   children?: React.ReactNode;
   item: typeof carte[0];
}

export default function Item({ item }: ItemProps): JSX.Element {
   const { photo, title, description, category, size, serving, price } = item;

   return (
      <SItem>
         <SItem.Image>
            <img src={photo} alt={title} />
         </SItem.Image>
         <Description>
            <Description.Title>
               <h2> {title} </h2>
               <p> {description} </p>
            </Description.Title>
            <Tags>
               <Tags.Category type={category.label.toLowerCase() as IItemCategory} >{category.label}</Tags.Category>
               <Tags.Description>{size}g</Tags.Description>
               <Tags.Description>Serve {serving} pessoa{serving === 1 ? '' : 's'}</Tags.Description>
               <Tags.Price>R$ {price},00</Tags.Price>
            </Tags>
         </Description>
      </SItem>
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