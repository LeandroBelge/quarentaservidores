import seeder from 'knex-csv-seeder';
 
exports.seed = seeder({
  table: 'users',
  file: '/path/to/users.csv',
  // recordsPerQuery: 100,
  // encoding: 'utf8' default encoding
  // parser: {
  //   delimiter: ',',
  //   quote: '"',
  //   escape: '\\'
  // }
});