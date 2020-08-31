import React from 'react';
import cn from 'classnames';
import styles from './pizzaCard.module.scss';
import { Pizza } from '../../../../../server/services/pizza';
import LazyImage from '../../../../common/LazyLoadImage';
import Icon from '../../../../common/Icon';
import { useGlobalContext } from '../../../../utils/hooks';
import Overlay from './PizzaCardOverlay';

type IconsContainerProps = {
  items: string[],
  className?: string
}

const IconsContainer: React.FC<IconsContainerProps> = ({
  items,
  className
}) => <div className={cn(styles.meta, className)}>
  {items.map((i) => <span className={styles.icon} key={i}>
    <Icon name={i}/>
  </span>)}
</div>

type PizzaCardProps = Pizza;

const PizzaCard: React.FC<PizzaCardProps> = (pizzaItem) => {
  const { isMobile } = useGlobalContext();

  const {
    name,
    imageUrl,
    description,
    tags,
    ingredients,
  } = pizzaItem;

  return <div className={cn(styles.root)}>
    {!isMobile && <Overlay className={styles.overlay} item={pizzaItem}/>}
    <LazyImage
      alt={name}
      src={imageUrl}
    />
    <div className={styles.info}>
      {
        tags.length > 0 && <IconsContainer items={tags} className={styles.tagsContainer}/>
      }
      <IconsContainer items={ingredients}/>
      <p className={styles.title}>{name}</p>
      <p className={styles.description}>{description}</p>
    </div>
  </div>
}

export default PizzaCard;