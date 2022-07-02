import React, { useState } from 'react';

import { SortAscending, SortDescending } from 'phosphor-react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import options from './options.json';

import { StyledSorter, Sort, Options, Option } from './styles';

interface SorterProps {
   children?: React.ReactNode;
   sorter: string;
   setSorter: React.Dispatch<React.SetStateAction<string>>;
}

// onBlur serve para quando for clicado fora do botao, nisso queremos sempre que ele feche

export default function Sorter({ sorter, setSorter }: SorterProps): JSX.Element {
   const [open, setOpen] = useState(false);
   const sorterName = sorter && options.find((option) => option.value === sorter)?.name;
   return (
      <StyledSorter>
         <Sort
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
                  <Option key={option.value} onClick={() => setSorter(option.value)}>
                     {option.name}
                  </Option>
               ))}
            </Options>
         </Sort>
         {
            open
               ? <SortAscending size={32} alt="Ordem decrescente" />
               : <SortDescending size={32} alt="Ordem crescente" />
         }
      </StyledSorter>
   );
}