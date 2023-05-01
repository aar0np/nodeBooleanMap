# nodejsCassandraTest
Helping someone on StackOverflow with Nodejs driver

## To run
1. Install Nodejs & Cassandra

2. Create a new keyspace named "stackoverflow" and this table inside that keyspace:
```SQL
    CREATE TABLE string_map (
        id int PRIMARY KEY,
        map_string_int map<text,int>);
```

3. Install Nodejs Cassandra driver:
```bash
npm install cassandra-driver
```

4. Clone this repo:
```bash
git clone git@github.com:aar0np/nodeBooleanMap.git
```

5. `cd` into the `nodeBooleanMap` directory, andb uild w/ npm:
```npm i```

6. Run:
```bash
node app.js
```

7. Verify table contents:
```SQL
SELECT * FROm stackoverflow.string_map;


 id | map_string_int
----+-------------------------
  1 | {'false': 1, 'true': 2}

(1 rows)
```
