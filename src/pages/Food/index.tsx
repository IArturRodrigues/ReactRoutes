import { useParams } from 'react-router-dom';

import carte from '@src/data/carte.json';

import { GoBack, Container, Title, Image, Content, Tags } from './styles';

export function Food(): JSX.Element {
   const { id } = useParams();
   const food = carte.find(food => food.id === Number(id));
   if(!food) return <div></div>;
   const { title, photo, description, category, size, serving, price } = food;
   return (
      <>
         <GoBack>
            {'< Voltar'}
         </GoBack>
         <Container>
            <Title>{title}</Title>
            <Image>
               <img src={photo} alt={title} />
            </Image>
            <Content>
               <Content.Description>
                  {description}
               </Content.Description>
               <Tags>
                  <Tags.Type category={category.label.toLowerCase() as 'massas' | 'carnes' | 'combos' | 'veganos'}>
                     {category.label}
                  </Tags.Type>
                  <Tags.Portion>{size}g</Tags.Portion>
                  <Tags.Serving>
                     Serve {serving} pessoa{serving === 1 ? '' : 's'}
                  </Tags.Serving>
                  <Tags.Price>R$ {price.toFixed(2)}</Tags.Price>
               </Tags>
            </Content>
         </Container>
      </>
   );
}

export default Food;

// const { state } = useLocation();
// const { food } = state as { food: typeof carte[0] };
// const { title, photo, description, category, size, serving, price } = food;