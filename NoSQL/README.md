# MongoDB and PyMongo Guide

## Introduction to MongoDB

MongoDB is a NoSQL database that uses a document-based model to store data. Instead of using tables like relational databases, MongoDB stores data in flexible, JSON-like documents. This structure makes it easier to store and retrieve data that doesn’t fit neatly into the rigid structure of a table.

### Why Use MongoDB?

- **Flexibility:** MongoDB’s document model allows you to store data with varying structures.
- **Scalability:** MongoDB scales well for large datasets, handling high throughput and large amounts of data.
- **Speed:** It is designed to perform fast read and write operations, making it ideal for real-time applications.
- **Aggregation:** MongoDB supports powerful aggregation capabilities, such as filtering, grouping, and sorting.

---

## Key Concepts in MongoDB

### Document

A **document** is a set of key-value pairs. It's similar to a row in a relational database, but it can be much more flexible in terms of structure. Documents are stored in BSON format (Binary JSON).

### Collection

A **collection** is a group of MongoDB documents. It is analogous to a table in a relational database. Collections do not enforce a schema, so documents within a collection can have different fields and structures.

### Database

A **database** in MongoDB is a container for collections. MongoDB supports multiple databases within a single server instance, and each database can have many collections.

## Mongosh commands
show dbs : Lists the available databases.

use <database_name> : Switches to the specified database.

show collections : Lists the collections in the current database.

db.<collection_name>.find() : Retrieves all documents from the specified collection.

db.<collection_name>.insertOne(<document>) : Inserts a single document into the collection.

db.<collection_name>.insertMany([<documents>]) : Inserts multiple documents into the collection.

db.<collection_name>.updateOne(<filter>, <update>) : Updates a single document that matches the filter.

db.<collection_name>.updateMany(<filter>, <update>) : Updates multiple documents that match the filter.

db.<collection_name>.deleteOne(<filter>) : Deletes a single document that matches the filter.

db.<collection_name>.deleteMany(<filter>) : Deletes all documents that match the filter.

db.<collection_name>.countDocuments(<filter>) : Counts the number of documents that match the filter.

## PyMongo commands
from pymongo import MongoClient : Import the MongoClient class to interact with MongoDB.

client = MongoClient('<connection_string>') : Create a connection to the MongoDB server using the provided connection string.

db = client['<database_name>'] : Access the specified database.

collection = db['<collection_name>'] : Access the specified collection in the database.

collection.find() : Retrieves all documents from the collection.

collection.find_one(<filter>) : Retrieves a single document that matches the filter.

collection.insert_one(<document>) : Inserts a single document into the collection.

collection.insert_many([<documents>]) : Inserts multiple documents into the collection.

collection.update_one(<filter>, <update>) : Updates a single document that matches the filter.

collection.update_many(<filter>, <update>) : Updates multiple documents that match the filter.

collection.delete_one(<filter>) : Deletes a single document that matches the filter.

collection.delete_many(<filter>) : Deletes all documents that match the filter.

collection.count_documents(<filter>) : Counts the number of documents that match the filter.
