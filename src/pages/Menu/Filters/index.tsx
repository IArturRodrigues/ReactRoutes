import React from 'react';

import filters from './filters.json';

import { StyledFilters, Filter } from './styles';

type IOption = typeof filters[0];

// interface Option {
//    label: string;
//    id: number;
// }

interface FilterProps {
   children?: React.ReactNode;
   filter: number | null;
   setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filters({ filter, setFilter }: FilterProps): JSX.Element {

   function selectFilter(option: IOption) {
      if (filter === option.id) return setFilter(null);
      return setFilter(option.id);
   }

   return (
      <StyledFilters>
         {filters.map((option: IOption) => (
            <Filter
               key={option.id}
               onClick={() => selectFilter(option)}
               // className={`${filter == option.id ? 'active:bg-blue-900 active:text-white' : ''}`}
               isActive={filter === option.id ? true : false}
            >
               {option.label}
            </Filter>
         ))}
      </StyledFilters>
   );
}