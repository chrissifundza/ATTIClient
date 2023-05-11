import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,HashRouter } from 'react-router-dom';
import App from './app-universal.jsx';
import config from 'config';
import { ContextDataProvider } from './context/ContextData.jsx';
import { ThemeProvider } from 'styled-components';
import { light } from './Home/theme/Themes.jsx';

const MainApp = () => (
   <ThemeProvider theme={light}>
   <ContextDataProvider>
   <Router  basename={`${config.publicPath}`}>
      <Switch>
         <Route path="/" component={App} />
      </Switch>
	</Router>
   </ContextDataProvider>
   </ThemeProvider>
);

export default MainApp;