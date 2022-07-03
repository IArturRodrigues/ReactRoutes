import React, { useState, useEffect } from 'react';

import Item from './Item';

import carte from '@src/data/carte.json';

import { List } from './List';

interface ItemsProps {
   children?: React.ReactNode;
   search: string;
   filter: number | null;
   sorter: string;
}

export default function Items({ search, filter, sorter }: ItemsProps): JSX.Element {
   const [list, setList] = useState(carte);

   sort({
      filter: filter,
      search: search,
      sorter: sorter,
      setList: setList
   });

   return (
      <List>
         {list.map((item) => (
            <Item key={item.id} item={item} />
         ))}
      </List>
   );
}

interface ISortFuncProps {
   search: string;
   filter: number | null;
   sorter: string;
   setList: React.Dispatch<React.SetStateAction<typeof carte>>;
}

function sort(props: ISortFuncProps) {
   const { filter, search, sorter, setList } = props;
   function testSearch(title: string) {
      const regex = new RegExp(search, 'i');
      return regex.test(title);
   }

   function testFilter(id: number) {
      if (filter !== null) return filter === id;
      return true;
   }

   // function auxSort(list: typeof carte, property: 'size' | 'price' | 'serving') {
   //    return list.sort((firstItem, secondItem) => (firstItem[property] > secondItem[property] ? 1 : -1));
   // }

   function auxSort(list: typeof carte, property: keyof Pick<typeof carte[0], 'size' | 'price' | 'serving'>) {
      return list.sort((firstItem, secondItem) => (firstItem[property] > secondItem[property] ? 1 : -1));
   }

   function sort(carteList: typeof carte) {
      switch (sorter) {
      case 'porcao':
         // return carteList.sort((firstItem, secondItem) => firstItem.size > secondItem.size ? 1 : -1);
         return auxSort(carteList, 'size');
      case 'qtd_pessoas':
         // return carteList.sort((firstItem, secondItem) => firstItem.serving > secondItem.serving ? 1 : -1);
         return auxSort(carteList, 'serving');
      case 'preco':
         // return carteList.sort((firstItem, secondItem) => firstItem.price > secondItem.price ? 1 : -1);
         return auxSort(carteList, 'price');
      default:
         return carteList;
      }
   }

   useEffect(() => {
      // se filtrasse pela list nao iria funcionar, pois apos a primeira filtragem ele perderia os outros valores
      const carteList = carte.filter(item => testSearch(item.title) && testFilter(item.category.id));
      setList(sort(carteList));
   }, [search, filter, sorter]);
}

// interface ICarte {
//    title: string;
//    description: string;
//    photo: string;
//    size: number;
//    serving: number;
//    price: number;
//    id: number;
//    category: {
//       id: number;
//       label: string;
//    };
// }

// function testSearch(title: string) {
//    const regex = new RegExp(search, 'i');
//    return regex.test(title);
// }

// function testFilter(id: number) {
//    if (filter !== null) return filter === id;
//    return true;
// }

// // function auxSort(list: typeof carte, property: 'size' | 'price' | 'serving') {
// //    return list.sort((firstItem, secondItem) => (firstItem[property] > secondItem[property] ? 1 : -1));
// // }

// type keysOfCarte = keyof typeof carte[0]; // retorna todas as keys do objeto na posição
// type specificKeysOfCarte = keyof Pick<typeof carte[0], 'size' | 'price' | 'serving'> // retorna somente as chaves especificadas depois da virgula
// type specificKeysOfCarte = keyof Pick<ICarte, 'category'>;
// type specificKeysOfCarte = keyof ICarte;
// function auxSort(list: typeof carte, property: keyof Pick<typeof carte[0], 'size' | 'price' | 'serving'>) {
//    return list.sort((firstItem, secondItem) => (firstItem[property] > secondItem[property] ? 1 : -1));
// }

// function sort(carteList: typeof carte) {
//    switch (sorter) {
//       case 'porcao':
//          // return carteList.sort((firstItem, secondItem) => firstItem.size > secondItem.size ? 1 : -1);
//          return auxSort(carteList, 'size');
//       case 'qtd_pessoas':
//          // return carteList.sort((firstItem, secondItem) => firstItem.serving > secondItem.serving ? 1 : -1);
//          return auxSort(carteList, 'serving');
//       case 'preco':
//          // return carteList.sort((firstItem, secondItem) => firstItem.price > secondItem.price ? 1 : -1);
//          return auxSort(carteList, 'price');
//       default:
//          return carteList
//    }
// }

// useEffect(() => {
//    // se filtrasse pela list nao iria funcionar, pois apos a primeira filtragem ele perderia os outros valores
//    const carteList = carte.filter(item => testSearch(item.title) && testFilter(item.category.id));
//    setList(sort(carteList));
// }, [search, filter, sorter]);