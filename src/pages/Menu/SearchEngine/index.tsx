import React from 'react';

import { CgSearch } from 'react-icons/cg';
// import { MagnifyingGlass } from 'phosphor-react';

import { Search, Input } from './styles';

interface SearchEngineProps {
   children?: React.ReactNode;
   search: string;
   setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchEngine({ search, setSearch }: SearchEngineProps): JSX.Element {
   return (
      <Search>
         <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar"
         />
         <CgSearch
            size={20}
            color="#4C4D5E"
         />
      </Search>
   );
}