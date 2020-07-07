import React, { useEffect, useCallback, useState, useMemo } from 'react';
import { usePizzas, SelectedPizzaData } from '../../models/pizza';
import styles from './main.module.scss';
import utilStyles from '../../../styles/utils.module.scss';
import PizzaList from './PizzaList';
import Filters from './Filters';

const Main: React.FC = () => {
  const {
    fetchPizzas
  } = usePizzas();

  useEffect(() => {
    fetchPizzas();    
  }, []);

  return <main className={styles.root}>
    <div className={utilStyles.fullPageContainer}>
      <Filters/>
      <PizzaList/>
    </div>
  </main>
}

export default Main;