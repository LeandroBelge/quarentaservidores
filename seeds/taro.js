import seeder from 'knex-csv-seeder';
 
exports.seed = seeder({
  table: 'users',
  file: '/path/to/users.csv',
  
});