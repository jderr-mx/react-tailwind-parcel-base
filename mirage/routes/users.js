export default function (server) {
  server.config({
    seeds(server) {
      console.log('seeding users');
      server.create('user', { name: 'Foo' });
      server.create('user', { name: 'Bar' });
      server.create('user', { name: 'Baz' });
    },
    routes() {
      this.get('/users', (schema) => schema.users.all());
    },
  });
}
