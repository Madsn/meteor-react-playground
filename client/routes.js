import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// route components
import App from '../imports/ui/App.jsx';
import TodoApp from '../imports/ui/todo/TodoApp.jsx';
import Index from '../imports/ui/Index.jsx';

const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="todo" component={TodoApp}/>
    </Route>
  </Router>
);

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('render-target'));
});
