import React from 'react';
import { render } from 'react-dom';
import './styles.css';
import { Server } from 'miragejs';
import Users from './Users';

new Server({
  routes() {
    this.namespace = '/api';

    this.get('/users', () => [{ id: '1', name: 'Foo' }, { id: '2', name: 'Bar' }, { id: '3', name: 'Baz' }]);
  }
});

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <Users />
    </div>
  );
};

render(<App />, document.getElementById('root'));
