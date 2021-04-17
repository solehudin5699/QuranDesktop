import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
// import Home from './pages/Home/Index';
import AlQuran from './pages/AlQuran/Index';
import Hadist from './pages/Hadist/Index';
import Doa from './pages/Doa/Index';
import Surat from './pages/Surat/Index';

export default function AppRouter() {
  return (
    <>
      <HashRouter>
        <div>
            {/* <Route path="/" exact component={Home} />  */}
            <Route path="/" exact component={AlQuran} />
            <Route path="/hadist" component={Hadist} />
            <Route path="/doa" component={Doa} />
            <Route path="/al-quran/surat" component={Surat} />
        </div>
      </HashRouter>
    </>
  );
}
