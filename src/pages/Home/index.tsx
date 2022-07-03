import carte from '@src/data/carte.json';
import ourHome from '@src/assets/nossa_casa.png';

import { Recommended, Item, OurHome } from './styles';
import Global from '@src/styles/Global';

export function Home(): JSX.Element {
   let recommendedPlates = [...carte];
   recommendedPlates = recommendedPlates.sort(() => 0.5 - Math.random()).splice(0,3);

   return (
      <>
         <section>
            <Global.Title>
               Recomendações da cozinha
            </Global.Title>
            <Recommended>
               {recommendedPlates.map((item) => (
                  <Item key={item.id}>
                     <Item.Image>
                        <img src={item.photo} alt={item.title} />
                     </Item.Image>
                     <Item.Button>
                        Ver mais
                     </Item.Button>
                  </Item>
               ))}
            </Recommended>
            <Global.Title> Nossa casa </Global.Title>
            <OurHome>
               <img src={ourHome} alt="Casa do aluroni" />
               <OurHome.Address>
                  Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
               </OurHome.Address>
            </OurHome>
         </section>
      </>
   );
}

export default Home;