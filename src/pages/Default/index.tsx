import { Outlet } from 'react-router-dom';

import { Header } from './styles';
import Global from '@src/styles/Global';

export function Default(): JSX.Element {
   return (
      <>
         <Header>
            <Header.Text>A casa do código e da massa</Header.Text>
         </Header>
         <Global.Container>
            <Outlet />
         </Global.Container>
      </>
   );
}

export default Default;