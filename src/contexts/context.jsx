/* eslint-disable no-unused-vars */
import { createContext } from 'react';

export const ThemeContext = createContext({
  globalTheme: {
    primaryColor: '',
    secondaryColor: '',
    backgroundColor: '',
  },
});

const ThemeContextParent = (props) => {
  const primary = '#001969';
  const secondary = '#0065CB';
  const background = '#fff';

  const { children } = props;

  const value = {
    globalTheme: {
      primaryColor: primary,
      secondaryColor: secondary,
      backgroundColor: background,
    },
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextParent;
