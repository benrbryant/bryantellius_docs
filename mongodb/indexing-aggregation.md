# Chapter 5 - Indexing and Aggregation Pipeline

## Notes

Aggregation _pipeline_ creates stages for aggregating data through ordered filters

`.aggregate()` instead of `.find()`

`$match` creates matches for data to be filtered by
`$group` takes incoming data, and groups data
`$project` to choose which datapoints are returned

Example:

```js
db.listingsAndReviews.aggregate([
  { $project: { address: 1, _id: 0 } },
  { $group: { _id: "$address.country", count: { $sum: 1 } } },
]);
```

## Sorting and Limiting Results

`.sort()` - `{ field: <dir>}` to sort by asc (1) or desc (-1)
`.limit()` - takes a number to limit results

Example:

```js
db.zips.find().sort({ pop: -1 }).limit(10);
```

## Adding Indexes

Data structure that stores a traversible representation of data to optimize queries

Example:

```js
db.trips.createIndex({ "birth year": 1 });

db.trips.createIndex({ "start station id": 1, "birth year": 1 });

db.trips.find({ "start station id": 476 }).sort({ "birth year": 1 });
```

## Data Modeling

Deciding the structure of your databases, collections and documents

> RULE: "Data is stored as it is used"

## Upsert

The third param after query and project

Hybrid between insert and update

Useful for when you need to check if data exists and either insert a new document, or update the document exists ("Conditional Updates")

Example:

```js
db.iot.updateOne(
  { sensor: r.sensor, date: r.date, valcount: { $lt: 48 } },
  {
    $push: { readings: { v: r.value, t: r.time } },
    $inc: { valcount: 1, total: r.value },
  },
  { upsert: true }
);
```
