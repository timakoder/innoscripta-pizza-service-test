import React, { useState, useEffect, useCallback } from 'react';
import { SelectedPizzaData } from '../../../../models/pizza';
import styles from './filter.module.scss';
import Button from '../../../../common/Button';
import Input from '../../../../common/Input';
import Icon from '../../../../common/Icon';
import { debounce } from '../../../../utils';

export type FilterProps = {
  items: SelectedPizzaData[],
  onClick: (i: SelectedPizzaData) => void,
  name: string,
  searchable?: boolean
}

const Filter: React.FC<FilterProps> = ({
  items,
  onClick,
  name,
  searchable = false
}) => {
  const [itemsToShow, setItemsToShow] = useState(items);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const formattedQuery = query.trim();
    if (formattedQuery.length > 0) {
      setItemsToShow(items.filter(i => i.name.includes(query)));
      return;
    }
    setItemsToShow(items);
  }, [items, query]);

  const searchCallback = useCallback(debounce(300)((q: string) => setQuery(q.trim().toLowerCase())), [])

  return <div className={styles.root}>
    <p className={styles.title}>{name}:</p>
    {searchable && <Input className={styles.searchBox} onChange={searchCallback} color="transparent"/>}
    <div className={styles.itemsContainer}>
      {
        itemsToShow.map((d, i) => <Button
          onClick={() => onClick(d)}
          color={d.selected ? 'main' : 'transparent'}
          marginRight={12}
          marginBottom={12}
          size="small"
          key={i}>
            <Icon name={d.name} className={styles.icon}/>
            <span>{d.name} ({d.quantity})</span>
        </Button>)
      }
    </div>
  </div>
}

export default Filter;