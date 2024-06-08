import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="46"
      height="29"
      viewBox="0 0 46 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
        <path d="M30.037,29.924c-0.67-0.611-1.525-2.094-2.567-4.447L16.539,0.625h-0.424L5.276,24.805
		c-1.028,2.311-1.893,3.834-2.593,4.57c-0.7,0.738-1.595,1.189-2.683,1.352v0.828h10.079v-0.828
		C8.5,30.608,7.511,30.43,7.107,30.192c-0.687-0.401-1.029-1.026-1.029-1.877c0-0.641,0.209-1.453,0.627-2.438l1.273-2.949h10.705
		l1.608,3.777c0.416,0.98,0.642,1.541,0.67,1.676c0.091,0.283,0.135,0.559,0.135,0.826c0,0.447-0.163,0.791-0.49,1.029
		c-0.479,0.328-1.305,0.488-2.48,0.488h-0.604v0.828h14.659v-0.828C31.261,30.653,30.545,30.385,30.037,29.924z M8.764,21.274
		l4.647-10.436l4.516,10.436H8.764z"/>          </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
