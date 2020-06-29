import React, { useState } from 'react';
import { SelectedPizzaData } from '../../../models/pizza';
import styles from './filter.module.scss';
import Button from '../../../common/Button';

export type FilterProps = {
  items: SelectedPizzaData[],
  onClick: (i: SelectedPizzaData) => void,
  name: string,
  collapsable: boolean
}

const Filter: React.FC<FilterProps> = ({
  items,
  onClick,
  name,
  collapsable
}) => {
  const [opened, setOpened] = useState(!collapsable);

  return <div className={styles.root}>
    {
      collapsable &&
     <p className={styles.title} onClick={() => setOpened(!opened)}>{name}</p>
    }
    {
      opened &&
      <div className={styles.itemsContainer}>
        {
          items.map((d, i) => <Button onClick={() => onClick(d)} color={d.selected ? 'transparent' : 'main'} key={i}>{d.name}</Button>)
        }
      </div>
    }
  </div>
}

export default Filter;