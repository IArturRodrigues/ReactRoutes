import carte from '@src/data/carte.json';

import { Recommended, OurHome, Address } from './styles';
import Global from '@src/styles/Global';

export function Home(): JSX.Element {
   let recommendedPlates = [...carte];
   recommendedPlates = recommendedPlates.sort(() => 0.5 - Math.random()).splice(0,3);

   return (
      <>
         <Global.Title>
            Recomendações da cozinha
         </Global.Title>
         <Recommended>
            {recommendedPlates.map((item) => (
               <Recommended.Item key={item.id}>
                  <Recommended.Item.Image>
                     <img src={item.photo} alt={item.title} />
                  </Recommended.Item.Image>
                  <Recommended.Item.Button>
                     Ver mais
                  </Recommended.Item.Button>
               </Recommended.Item>
            ))}
         </Recommended>
      </>
   );
}

export default Home;