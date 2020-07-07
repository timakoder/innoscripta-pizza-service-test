import React from 'react';
import { usePizzas } from '../../../models/pizza';
import PizzaCard from './PizzaCard';
import styles from './pizzaList.module.scss';

const PizzaList: React.FC = () => {
  const { pizzas } = usePizzas();

  const pizzaItems = pizzas.data.pizzas;

  return <div className={styles.root}>
    {
      pizzaItems.map(p => <div className={styles.item} key={p.id}>
        <PizzaCard {...p}/>
      </div>)
    }
  </div>
};

export default PizzaList;
