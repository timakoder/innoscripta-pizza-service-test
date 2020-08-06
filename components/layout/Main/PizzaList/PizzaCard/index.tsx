import React from 'react';
import cn from 'classnames';
import styles from './pizzaCard.module.scss';
import { Pizza } from '../../../../../server/services/pizza';
import LazyImage from '../../../../common/LazyLoadImage';
import { buildPathToIcon } from '../../../../utils';

type IconsContainerProps = {
  items: string[]
}

const IconsContainer: React.FC<IconsContainerProps> = ({ items }) => <div className={styles.meta}>
  {items.map((i) => <span className={styles.icon} key={i}>
    <img src={buildPathToIcon(i)}/>
    <span className={styles.tooltip}>{i}</span>
  </span>)}
</div>

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
  <div className={styles.info}>
    {
      tags.length > 0 && <IconsContainer items={tags}/>
    }
    <IconsContainer items={ingredients}/>
    <p className={styles.title}>{name}</p>
    <p className={styles.description}>{description}</p>
  </div>
</div>

export default PizzaCard;