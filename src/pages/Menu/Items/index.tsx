import React, { useState, useEffect } from 'react';

import Item from './Item';

import carte from './items.json';

import { List } from './styles';

interface ItemsProps {
   children?: React.ReactNode;
   search: string;
   filter: number | null;
   sorter: string;
}

export default function Items({ search, filter, sorter }: ItemsProps): JSX.Element {
   const [list, setList] = useState(carte);

   function testSearch(title: string) {
      const regex = new RegExp(search, 'i');
      return regex.test(title);
   }

   function testFilter(id: number) {
      if (filter !== null) return filter === id;
      return true;
   }

   function sort(carteList: typeof carte) {
      switch (sorter) {
         case 'porcao':
            return carteList.sort((firstItem, secondItem) => firstItem.size > secondItem.size ? 1 : -1);
         case 'qtd_pessoas':
            return carteList.sort((firstItem, secondItem) => firstItem.serving > secondItem.serving ? 1 : -1);
         case 'preco':
            return carteList.sort((firstItem, secondItem) => firstItem.price > secondItem.price ? 1 : -1);
         default:
            return carteList
      }
   }

   useEffect(() => {
      // se filtrasse pela list nao iria funcionar, pois apos a primeira filtragem ele perderia os outros valores
      const carteList = carte.filter(item => testSearch(item.title) && testFilter(item.category.id));
      setList(sort(carteList));
   }, [search, filter, sorter]);

   return (
      <List>
         {list.map((item) => (
            <Item key={item.id} item={item} />
         ))}
      </List>
   );
}