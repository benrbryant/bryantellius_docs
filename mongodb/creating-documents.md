# Chapter 3 - Creating and Maintaining Documents

## Notes

In Mongo Atlas, select `INSERT DOCUMENT` to insert via JSON or field values

Use `ObjectId()` function for inserting `_id` values for documents

- `_id` is a required field in Mongodb

Generally, new documents should follow the existing data points/structure of the other documents

In mongosh, `db.<collection>.insert(<document>)` to insert new documents as JSON

- `ObjectId()` is automatically used to create an `_id` value if omitted from an insert query

Add multiple documents at a time with passing an array of JSON documents to `db.<collection>.insert()`

- Include `{ ordered: false }` to insert documents independent of index position in the insert array

To update documents, use

- `db.<collection>.updateOne({ filter: value }, { $set: { key: value }})`
- `db.<collection>.updateMany({ filter: value }, { $set: { key: value }})`
- You have several update methods other that `$set` (e.g. `$inc` to increment, `$push` to push to an array)

To delete documents, use

- `db.<collection>.deleteOne({ filter: value }})`
- `db.<collection>.deleteMany({ filter: value }})`
- For `deleteOne`, try and use `_id` to guarantee the deletion of _one_ document
- Use `db.<collection>.drop()` to delete a collection