import { useParams } from 'react-router-dom';

export function Food(): JSX.Element {
   console.log(useParams());
   return (
      <div>
         Prato
      </div>
   );
}

export default Food;