import { Navigate, useParams, useNavigate } from 'react-router-dom';

export function Admin(): JSX.Element {
   const { user } = useParams();
   const isAdmin = (user && user === 'Adm123') ?? false;
   const navigate = useNavigate();

   function goToCartePage() {
      navigate('/cardapio');
   }

   return (
      <div>
         {
            isAdmin
               ? 'Olá, administrador'
               : <Navigate to='/' />
         }
         <button onClick={() => goToCartePage()}>
            Ver cardápio
         </button>
      </div>
   );
}

export default Admin;