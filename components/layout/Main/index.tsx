import React, { useEffect, useCallback } from 'react';
import { usePizzas, fetchPizzas, SelectedPizzaData } from '../../models/pizza';
import { useGlobalContext } from '../../utils/hooks';
import styles from './main.module.scss';
import utilStyles from '../../../styles/utils.module.scss';
import Filter from './Filter';

const Main: React.FC = () => {
  const {
    pizzas,
    dispatch
  } = usePizzas();

  const { isMobile } = useGlobalContext();

  const {
    pizzas: pizzasList,
    tags,
    ingredients,
    meta
  } = pizzas.data;

  useEffect(() => {
    dispatch(fetchPizzas({
      tags: ['spicy', 'vegetarian'],
      ingredients: []
    }));    
  }, []);

  console.log(pizzasList);

  // const onFilterClick

  return <main className={styles.root}>
    <div className={utilStyles.fullPageContainer}>
      <div className={styles.filtersContainer}>
        {/* <Filter items={tags} /> */}
      </div>
      <div className={styles.pizzasContainer}>

      </div>
    </div>
  </main>
}

export default Main;