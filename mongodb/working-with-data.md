# Chapter 2 - Importing, Exporting, and Quering Data

## Lecture Notes

- Mongodb stores data as BSON, Binary JSON to optimize speed, space, and flexibility
- You edit/query data as JSON which is easy to use and familiar
- Exporting Data Commands
  - `mongodump --uri "<Atlas Cluster URI>"` exports data as BSON
  - `mongoexport -- uri "<Atlas Cluster URI>" --collection=sales --out=sales.json` exports data as JSON
    > URI stands for _Uniform Resource Identifier_
- Importing Data Commands
  - `mongorestore --uri "<Atlas Cluster URI>" --drop dump` imports data as BSON
  - `mongoimport --uri "<Atlas Cluster URI>" --drop=<Filename>.json` imports data as JSON
    > `--drop` is necessary to prevent duplicate entries in your database after an import
- Querying Data
  - Use the data explorer directly on [mongodb.com](mondodb.com), or mongosh
  - `showdbs` shows databases in cluster
  - `use <dbname>` to use a db
  - `show collections` to view all collections of a db
  - `db.<collection>.find(<query>)` is a valid _read_ query
  - `it` to iterate to the next set of results
  - `.count()` returns the count of results per query
  - `.pretty()` to format results in a readable format
