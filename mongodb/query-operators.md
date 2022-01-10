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
