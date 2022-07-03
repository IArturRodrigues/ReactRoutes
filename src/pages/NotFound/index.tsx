import { useNavigate } from 'react-router-dom';

import { NotFoundSVG } from '@src/components';

import { NotFound as SNotFound, GoBack } from './NotFound';

export default function NotFound() {
   const navigate = useNavigate();
   return (
      <SNotFound>
         <GoBack>
            <button onClick={() => navigate(-1)}>
               {'< Voltar'}
            </button>
         </GoBack>
         <NotFoundSVG />
      </SNotFound>
   );
}