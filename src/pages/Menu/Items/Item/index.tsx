import { Food } from '@src/types/Restaurant';

import { FoodTags } from '@src/components';

import { Item as SItem, Description } from './Item';

export default function Item(props: Food): JSX.Element {
   const { photo, title, description } = props;

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
            <FoodTags {...props} />
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