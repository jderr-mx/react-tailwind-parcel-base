import { createServer, Model, RestSerializer } from 'miragejs';
import { users } from './mirage/routes';

export function makeServer({ environment = 'test' } = {}) {
  const server = createServer({
    serializers: {
      application: RestSerializer.extend({ root: false, embed: true }),
    },
    environment,
    models: {
      user: Model,
    },

    seeds(server) {},
    routes() {
      this.namespace = '/api';
      users(this);
    },
  });
  return server;
}
