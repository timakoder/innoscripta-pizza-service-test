import React, { useState, useRef, useEffect } from 'react';
import styles from './lazyImage.module.scss';

export type LazyImageProps = {
  src: string,
  alt?: string
}

const placeholder = '/img/pizzas/placeholder.svg';

const cache = {};

const LazyImage: React.FC<LazyImageProps> = ({ src, alt = '' }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const imageRef = useRef(null);

  useEffect(() => {
    let observer
    let didCancel = false

    if (cache[src]) {
      setImageSrc(src);
      return;
    }

    const image = imageRef.current;

    if (image && imageSrc === placeholder) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              // when image is visible in the viewport + rootMargin
              if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
                setImageSrc(src);
                cache[src] = src;
                observer.unobserve(image);
              }
            })
          },
          {
            threshold: 0.01,
            rootMargin: '75%',
          }
        )
        observer.observe(image)
      } else {
        // Old browsers fallback
        setImageSrc(src);
        cache[src] = src;
      }
    }
    return () => {
      didCancel = true
      // on component unmount, we remove the listner
      if (observer && observer.unobserve) {
        observer.unobserve(image)
      }
    }
  }, []);

  return <img ref={imageRef} src={imageSrc} alt={alt}/>
}

export default LazyImage;
