import { useState } from 'react';

import carte from '@src/data/carte.json';

import { Container, Title, Recommended, RecommendedItem, RecommendedImage, RecommendedButton, OurHome, Address } from './styles';

interface HomeProps {
   children?: React.ReactNode;
}

export function Home({ }: HomeProps): JSX.Element {
   let recommendedPlates = [...carte];
   recommendedPlates = recommendedPlates.sort(() => 0.5 - Math.random()).splice(0,3);

   return (
      <Container>
         <Title>
            Recomendações da cozinha
         </Title>
         <Recommended>
            {recommendedPlates.map((item) => (
               <RecommendedItem key={item.id}>
                  <RecommendedImage>
                     <img src={item.photo} alt={item.title} />
                  </RecommendedImage>
                  <RecommendedButton>
                     Ver mais
                  </RecommendedButton>
               </RecommendedItem>
            ))}
         </Recommended>
      </Container>
   );
}

export default Home;