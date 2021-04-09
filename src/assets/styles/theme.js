import { lighten } from 'polished';

export const theme = {
  colors: {
    white: '#ffffff',
    yellow: '#fdd425',
    black: '#222222',
    lightenBlack: lighten(0.1, '#222222'),
  },

  fontSizes: {
    small: '.7rem',
    primary: '1rem',
    medium: '1.2rem',
    large: '1.4rem',
  },
};
