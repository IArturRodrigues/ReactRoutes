import { useState } from 'react';
import Filters from './Filters';
import Items from './Items';
// import logo from '../../assets/logo.svg'; // utilizando o svg como uma imagem
// import { ReactComponent as Logo } from '../../assets/logo.svg'; // estava dando erro

import { MainMenu } from '@src/components';
import SearchEngine from './SearchEngine';
import Sorter from './Sorter';

import { Header, HeaderText, Carte, CarteTitle, CarteFilters } from './styles';

// interface MenuProps {
//    children?: React.ReactNode;
// }

export default function Menu(): JSX.Element {
   const [search, setSearch] = useState<string>('');
   const [filter, setFilter] = useState<number | null>(null);
   const [sorter, setSorter] = useState<string>('');
   return (
      <main>
         <MainMenu />
         <Header>
            <HeaderText>A casa do código e da massa</HeaderText>
         </Header>
         <Carte>
            <CarteTitle>Cardápio</CarteTitle>
            <SearchEngine search={search} setSearch={setSearch} />
            <CarteFilters>
               <Filters filter={filter} setFilter={setFilter} />
               <Sorter sorter={sorter} setSorter={setSorter} />
            </CarteFilters>
            <Items search={search} filter={filter} sorter={sorter} />
         </Carte>
      </main>
   );
}