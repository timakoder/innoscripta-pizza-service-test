import React from 'react';
import cn from 'classnames';
import styles from './pizzaCard.module.scss';
import { Pizza } from '../../../../../server/services/pizza';
import LazyImage from '../../../../common/LazyLoadImage';

type PizzaCardProps = Pizza;

const PizzaCard: React.FC<PizzaCardProps> = ({
  name,
  imageUrl,
  description,
  tags,
  ingredients,
  variants
}) => <div className={cn(styles.root)}>
  <LazyImage
    alt={name}
    src={imageUrl}
  />
  <p className={styles.title}>{name}</p>
  <p className={styles.description}>{description}</p>
</div>

export default PizzaCard;