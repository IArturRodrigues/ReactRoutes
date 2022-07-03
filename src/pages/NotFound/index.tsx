import NotFoundSVG from '@src/components/NotFoundSVG';

import { NotFound as SNotFound, GoBack } from './NotFound';

export default function NotFound() {
   return (
      <SNotFound>
         <NotFoundSVG />
      </SNotFound>
   );
}