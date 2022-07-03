import { useState } from 'react';
import Filters from './Filters';
import Items from './Items';
// import logo from '../../assets/logo.svg'; // utilizando o svg como uma imagem
// import { ReactComponent as Logo } from '../../assets/logo.svg'; // estava dando erro

import SearchEngine from './SearchEngine';
import Sorter from './Sorter';

import { Filters as CarteFilters } from './styles';
import Global from '@src/styles/Global';

// interface MenuProps {
//    children?: React.ReactNode;
// }

export default function Menu(): JSX.Element {
   const [search, setSearch] = useState<string>('');
   const [filter, setFilter] = useState<number | null>(null);
   const [sorter, setSorter] = useState<string>('');
   return (
      <>
         <Global.Title>Cardápio</Global.Title>
         <SearchEngine search={search} setSearch={setSearch} />
         <CarteFilters>
            <Filters filter={filter} setFilter={setFilter} />
            <Sorter sorter={sorter} setSorter={setSorter} />
         </CarteFilters>
         <Items search={search} filter={filter} sorter={sorter} />
      </>
   );
}