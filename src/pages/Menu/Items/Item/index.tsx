import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Food } from '@src/types/Restaurant';

import { FoodTags } from '@src/components';

import { Item as SItem, Description } from './Item';

function Item(props: Food): JSX.Element {
   const { id, photo, title, description } = props;
   const navigate = useNavigate();

   return (
      <SItem onClick={() => navigate(`/prato/${id}`)}>
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

export default memo(Item);

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