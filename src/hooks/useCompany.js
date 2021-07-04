import { useState } from 'react';
import { resetStyle } from 'helpers/resetStyle';
import { useTheme } from 'styled-components';

export const useCompany = (eventElement) => {
  const [company, setCompany] = useState('');
  const themeEventElement = useTheme();

  const showCompany = (e) => {
    setCompany(e.target.textContent);
    resetStyle(eventElement, 'transparent', themeEventElement.colors.white);
  };

  return {
    company,
    showCompany,
  };
};
