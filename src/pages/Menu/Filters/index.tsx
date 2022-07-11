import React, { memo } from 'react';

import filters from './filters.json';

import SFilters from './Filters';

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

function Filters({ filter, setFilter }: FilterProps): JSX.Element {

   function selectFilter(option: IOption) {
      if (filter === option.id) return setFilter(null);
      return setFilter(option.id);
   }

   return (
      <SFilters>
         {filters.map((option: IOption) => (
            <SFilters.Item
               key={option.id}
               onClick={() => selectFilter(option)}
               // className={`${filter == option.id ? 'active:bg-blue-900 active:text-white' : ''}`}
               isActive={filter === option.id ? true : false}
            >
               {option.label}
            </SFilters.Item>
         ))}
      </SFilters>
   );
}

export default memo(Filters);
