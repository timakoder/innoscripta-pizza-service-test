import React, { useMemo, useCallback, useState } from 'react';
import { usePizzas, SelectedPizzaData } from '../../../models/pizza';
import Button from '../../../common/Button';
import Filter from './Filter';
import styles from './filters.module.scss';

const getSelectedDataNames = (data: SelectedPizzaData[]): string[] => data
  .filter(d => d.selected)
  .map(d => d.name);

const Filters: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);

  const {
    pizzas,
    fetchPizzas
  } = usePizzas();

  const {
    tags,
    ingredients,
    meta
  } = pizzas.data;

  const selectedFiltersCount = useMemo(() => meta.tags.length + meta.ingredients.length, [meta]);

  const onFilterClick = useCallback((type: 'tags' | 'ingredients') => (d: SelectedPizzaData) => {
    const selectedTags = type === 'tags'
      ? getSelectedDataNames(tags.map(t => ({ ...t, selected: t.name === d.name ? !d.selected : t.selected })))
      : getSelectedDataNames(tags);

    const selectedIngredients = type === 'ingredients'
      ? getSelectedDataNames(ingredients.map(t => ({ ...t, selected: t.name === d.name ? !d.selected : t.selected })))
      : getSelectedDataNames(ingredients);

    fetchPizzas({
      tags: selectedTags,
      ingredients: selectedIngredients
    });
  }, [tags, ingredients]);

  const clearFilters = useCallback(() => fetchPizzas({
    tags: [],
    ingredients: []
  }), []);

  return <div className={styles.root}>
    <Button color={showFilters ? 'main' : 'transparent'} marginBottom={8} onClick={() => setShowFilters(!showFilters)}>
      Filters { selectedFiltersCount > 0 ? `(${selectedFiltersCount})` : '' }
    </Button>
    {
      selectedFiltersCount > 0 &&
      <Button marginLeft={4} size="small" color="white" withoutBorder onClick={clearFilters}>
        Clear Filters
      </Button>
    }
    {
      showFilters &&
      <div>
        <Filter
          items={tags}
          onClick={onFilterClick('tags')}
          name="Tags"
        />
        <Filter
          items={ingredients}
          onClick={onFilterClick('ingredients')}
          name="Ingredients"
          searchable={true}
        />
      </div>
    }
  </div>
}

export default Filters;
