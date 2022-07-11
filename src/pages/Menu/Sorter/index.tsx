import React, { memo, useState } from 'react';

import { SortAscending, SortDescending } from 'phosphor-react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import options from './options.json';

import { Sort, Options } from './styles';

interface SorterProps {
   children?: React.ReactNode;
   sorter: string;
   setSorter: React.Dispatch<React.SetStateAction<string>>;
}

// onBlur serve para quando for clicado fora do botao, nisso queremos sempre que ele feche

function Sorter({ sorter, setSorter }: SorterProps): JSX.Element {
   const [open, setOpen] = useState(false);
   const sorterName = sorter && options.find((option) => option.value === sorter)?.name;
   return (
      <Sort>
         <Sort.Button
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(false)}
            isActive={sorter !== ''}
         >
            <span>{sorterName || 'Ordenar por'}</span>

            {
               open
                  ? <MdKeyboardArrowUp size={20} />
                  : <MdKeyboardArrowDown size={20} />
            }
            <Options isActive={open} >
               {options.map((option) => (
                  <Options.Item key={option.value} onClick={() => setSorter(option.value)}>
                     {option.name}
                  </Options.Item>
               ))}
            </Options>
         </Sort.Button>
         {
            open
               ? <SortAscending size={32} alt="Ordem decrescente" />
               : <SortDescending size={32} alt="Ordem crescente" />
         }
      </Sort>
   );
}

export default memo(Sorter);
