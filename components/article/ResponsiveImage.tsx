import React from 'react';
import styles from 'styles/components/responsiveImage.module.scss';
import { baseUrl } from 'configs';

interface ResponsiveImageProps {
  imageUrl: string;
}

export const ResponsiveImage: React.FunctionComponent<ResponsiveImageProps> = ({
  imageUrl,
}: ResponsiveImageProps) => {

  return (
    <img src={`${baseUrl}${imageUrl}`} className={styles.image} />
  );
};
