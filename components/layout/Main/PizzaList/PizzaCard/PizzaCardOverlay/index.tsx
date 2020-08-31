import React from 'react';
import cn from 'classnames';
import { Default } from '../../../../../common/types';
import { Pizza } from '../../../../../../server/services/pizza';
import styles from './pizzaCardOverlay.module.scss';
import Icon from '../../../../../common/Icon';
import Button from '../../../../../common/Button';
import { useModalActions } from '../../../../../models/modal';

export type OverlayProps = Default & {
  item: Pizza
}

const PizzaCardOverlay: React.FC<OverlayProps> = ({
  className,
  item
}) => {
const { openAddToCart } = useModalActions();
return <div className={cn(styles.root, className)}>
  <div className={styles.ingredients}>
    {item.ingredients.map((ingr, i) => <div key={i} className={styles.ingredientItem}>
      <Icon name={ingr} className={styles.ingredientIcon}/><span>{ingr}</span>
    </div>)}
  </div>
  <Button onClick={() => openAddToCart({item})}>Add to cart</Button>
</div>
}

export default PizzaCardOverlay;
