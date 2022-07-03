import { useParams, useNavigate, Routes, Route } from 'react-router-dom';

import NotFound from '../NotFound';
import { Default, FoodTags } from '@src/components';

import carte from '@src/data/carte.json';

import { GoPreviousPage, Container, Title, Image, Content } from './styles';

export function Food(): JSX.Element {
   const navigate = useNavigate();
   const { id } = useParams();
   const food = carte.find(food => food.id === Number(id));
   
   if (!food) return <NotFound />;
   const { title, photo, description } = food;

   function goPreviousPage() {
      navigate(-1);
   }

   return (
      <Routes>
         <Route path='*' element={<Default />}>
            <Route index element={
               <>
                  <GoPreviousPage onClick={() => goPreviousPage()}>
                     {'< Voltar'}
                  </GoPreviousPage>
                  <Container>
                     <Title>{title}</Title>
                     <Image>
                        <img src={photo} alt={title} />
                     </Image>
                     <Content>
                        <Content.Description>
                           {description}
                        </Content.Description>
                        <FoodTags {...food} />
                     </Content>
                  </Container>
               </>
            } />
         </Route>
      </Routes>
   );
}

export default Food;

// const { state } = useLocation();
// const { food } = state as { food: typeof carte[0] };
// const { title, photo, description, category, size, serving, price } = food;