import React from 'react';
import Header from 'components/layout/Header';
import { ContentContainer } from 'components/layout/ContentContainer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FunctionComponent<MainLayoutProps> = ({
  children,
}: MainLayoutProps) => {

  return (
    <>
      <Header></Header>
      <ContentContainer>
        {children}
      </ContentContainer>
    </>
  );
};
