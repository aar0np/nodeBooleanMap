// webserver
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//cassandra
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'stackoverflow',
  username: 'cassandra',
  password: 'cassandra'
});

//const update1 = 'UPDATE string_map SET map_string_int = ? WHERE id = ?';
//const insert1 = 'INSERT INTO boolean_map (id,map_bool_int_col) VALUES (?,?)'
//const queries = [
//    { query: update1, params: [{"false":1,"true":2}, 1]}
//  ];

//client.batch(queries, { prepare: true });
client.execute("UPDATE string_map SET map_string_int = ? WHERE id = ?", [{'false': 1, 'true': 2}, 1], {prepare: true});
console.log('Data updated on cluster');
