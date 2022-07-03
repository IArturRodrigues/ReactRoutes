import home from '@src/assets/sobre/casa.png';
import pasta1 from '@src/assets/sobre/massa1.png';
import pasta2 from '@src/assets/sobre/massa2.png';

import { AboutUs, Images } from './AboutUs';
import Global from '@src/styles/Global';

const images = [pasta1, pasta2];

export function About(): JSX.Element {
   return (
      <section>
         <Global.Title> Sobre </Global.Title>
         <AboutUs>
            <img src={home} alt="Casa Aluroni" />
            <AboutUs.Text>
               <p>
                  Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
               </p>
               <p>
                  Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
               </p>
               <p>
                  Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
               </p>
            </AboutUs.Text>
         </AboutUs>
         <Images>
            {images.map((image, index) => (
               <Images.Item key={index} >
                  <img src={image} alt="Imagem de massa" />
               </Images.Item>
            ))}
         </Images>
      </section>
   );
}

export default About;