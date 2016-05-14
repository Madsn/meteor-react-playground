import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// route components
import App from '../imports/ui/App.jsx';
import TodoApp from '../imports/ui/TodoApp.jsx';

const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/todo" component={TodoApp}/>
  </Router>
);

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('render-target'));
});
