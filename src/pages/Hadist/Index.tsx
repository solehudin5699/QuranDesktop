import React from 'react';
import PageContent from '../../components/ContentPage/Index';
import AppBar from '../../components/AppBar/Index';

export default function Index() {
  return (
    <>
      <AppBar pageName="Hadist" />
      <PageContent>
        <h1>Hadis</h1>
      </PageContent>
    </>
  );
}
