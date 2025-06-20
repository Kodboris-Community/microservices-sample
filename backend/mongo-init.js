db.createUser({
  user: 'service-one',
  pwd: 'service-one',
  roles: [{ role: 'readWrite', db: 'service-one' }]
});
