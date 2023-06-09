import React from 'react';
import { useTranslation } from 'react-i18next';
import { MainPageContent } from './MainPageContent/MainPageContent';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
      <MainPageContent />
  );
};

export default MainPage;
