# Chapter 4 - Advanced CRUD Operations

## Notes

`$` precedes the query operators

### Comparison

`$eq` equal
`$ne` unequal
`$lte` less than or equal
`$gte` greater than or equal
`$lt` less than
`$gt` greater than

### Logic Operators

`$and` all values equal (present in queries by default)
`$or` one or more equal
`$nor` fail to match both
`$not` not equal

All but `$not`, use an array of filter queries

Nested example:

```js
db.companies
  .find({
    $or: [
      {
        $and: [
          { founded_year: 2004 },
          { $or: [{ category_code: "web" }, { category_code: "social" }] },
        ],
      },
      {
        $and: [
          { founded_month: 10 },
          { $or: [{ category_code: "web" }, { category_code: "social" }] },
        ],
      },
    ],
  })
  .count();
```

### Expressive Operators

`$expr` aggregate expressions

`$` denotes an operator, or addresses a specific document field value

Aggregation Query Example:

```js
db.trips
  .find({
    $expr: {
      $and: [
        { $gt: ["$tripduration", 1200] },
        { $eq: ["$end station id", "$start station id"] },
      ],
    },
  })
  .count();
```

### Array Operators

`$push` adds a value to an array
`$all` returns documents will all values included in the array
`$size` returns a values with a specified array length

Example:

```js
db.listingsAndReviews
  .find({
    amenities: {
      $size: 20,
      $all: [
        "Internet",
        "Wifi",
        "Kitchen",
        "Heating",
        "Family/kid friendly",
        "Washer",
        "Dryer",
        "Essentials",
        "Shampoo",
        "Hangers",
        "Hair dryer",
        "Iron",
        "Laptop friendly workspace",
      ],
    },
  })
  .pretty();
```

`$elemMatch` to search subvalues in arrays/objects

Example:

```js
db.grades
  .find({ class_id: 431 }, { scores: { $elemMatch: { score: { $gt: 85 } } } })
  .pretty();
```

### Projection

Describes which fields should be returned

Included after the query

- 1 to include the field
- 0 to exclude the field

Example:

```js
db.listingsAndReviews
  .find(
    { amenities: "Wifi" },
    { price: 1, address: 1, _id: 0, maximum_nights: 0 }
  )
  .pretty();
```

### Querying Sub-Documents (sub-objects)

Use dot notation in queries to access field values of sub-documents

Access values at indexes with _dot notation_ as well

`$regex` to match string expressions

Example:

```js
db.companies
  .find(
    {
      "relationships.0.person.first_name": "Mark",
      "relationships.0.title": { $regex: "CEO" },
    },
    { name: 1 }
  )
  .count();
```
