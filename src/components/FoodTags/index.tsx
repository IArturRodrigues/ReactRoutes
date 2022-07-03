import { Food } from '@src/types/Restaurant';

import Tags from './Tags';

export function FoodTags(props: Food): JSX.Element {
   const { category, size, serving, price } = props;
   return (
      <Tags>
         <Tags.Type category={category.label.toLowerCase() as 'massas' | 'carnes' | 'combos' | 'veganos'}>
            {category.label}
         </Tags.Type>
         <Tags.Portion>{size}g</Tags.Portion>
         <Tags.Serving>
            Serve {serving} pessoa{serving === 1 ? '' : 's'}
         </Tags.Serving>
         <Tags.Price>R$ {price.toFixed(2).replace('.', ',')}</Tags.Price>
      </Tags>
   );
}

export default FoodTags;