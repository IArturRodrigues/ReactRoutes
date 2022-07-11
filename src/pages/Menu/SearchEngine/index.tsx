import React, { memo, useMemo } from 'react';

import { CgSearch } from 'react-icons/cg';
// import { MagnifyingGlass } from 'phosphor-react';

import Search from './Search';

interface SearchEngineProps {
   children?: React.ReactNode;
   search: string;
   setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function SearchEngine({ search, setSearch }: SearchEngineProps): JSX.Element {
   const searchIcon = useMemo(() => <CgSearch size={20} color="#4C4D5E" />, []);
   return (
      <Search>
         <Search.Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar"
         />
         {searchIcon}
      </Search>
   );
}

export default memo(SearchEngine);
