import locally from cli :- mongoimport PATH\FILE-NAME.json -d DATABASE-NAME -c COLLECTION-NAME

#### When to use Quotes and when not to ?

##### Special characters

`If a field name contains special characters or spaces, or starts with a number digit using Quotes is necessary.`

##### Reserved words

`If a field name. Is a reserved keyword in Mongodb. Use quotes, distinguish it from the reserved keyword.`

> Example: {'course name':'fullstack'} space is a special characters

#### Ordered an unordered inserts

When executing bulk write operations ordered and unordered, determine the batch behaviour.

> Ordered insert
> default behaviour is ordered, where Mongodb stops on the first error
> Unordered inserts
> when executing bulk write operations with unordered flag. Mongodb continue processing after encountering an error

##### Documents before the one with an error will be inserted, and the documents after the one with an error will also be inserted. Only the document with the error will not be inserted

`db.COLLECTION-NAME.insertMany([{KEY:VALUE},{KEY:VALUE}],{ordered:false})`

### **_Queries Below_**

```
show dbs    ||    show databases                                  ===> ALL DATABASE LIST
use DB-NAME                                                       ===> SWITCH TO DATABASE || CREATE DATABASE
db.dropDatabase()                                                 ===> DELETE DATABASE
show collections                                                  ===> ALL COLLECTIONS IN DATABASE
db.createCollection('COLLECTION-NAME')                            ===> CREATE COLLECTION IN DATABASE
db.COLLECTION-NAME.drop()                                         ===> DELETE COLLECTION FROM DATABASE

db.COLLECTION-NAME.insertOne({KEY:VALUE})                         ===> INSERT ONE DOCUMENT IN COLLECTION
db.COLLECTION-NAME.insertMany([{KEY:VALUE},{KEY:VALUE}])          ===> INSERT MANY DOCUMENTS IN COLLECTION

db.COLLECTION-NAME.find()                                         ===> FETCH ALL DOCUMENTS FROM COLLECTION
db.COLLECTION-NAME.find({KEY:VALUE})                              ===> FETCH DOCUMENTS FROM COLLECTION WHERE KEY:VALUE
db.COLLECTION-NAME.updateOne({KEY:VALUE},{$set:{KEY:VALUE}})      ===> UPDATE ONE DOCUMENT IN COLLECTION
db.COLLECTION-NAME.deleteOne({KEY:VALUE})                         ===> DELETE ONE DOCUMENT FROM COLLECTION
db.COLLECTION-NAME.find().pretty()                                ===> FETCH ALL DOCUMENTS FROM COLLECTION IN PRETTY FORMAT
db.COLLECTION-NAME.find().count()                                 ===> COUNT ALL DOCUMENTS FROM COLLECTION
```

### COMPARISON OPERATORS

```
db.COLLECTION-NAME.find({'age':{$eq:30}})                         ===> GET ALL THE DATA EQUALS-TO AGE:30
db.COLLECTION-NAME.find({'age':{$ne:30}})                         ===> GET ALL THE DATA NOT-EQUALS-TO AGE:30
db.COLLECTION-NAME.find({'age':{$gt:30}})()                       ===> GET ALL THE DATA GREATER THEN AGE:30
db.COLLECTION-NAME.find({'age':{$gte:30}})()                      ===> GET ALL THE DATA GREATER THEN EQUALS-TO AGE:30
db.COLLECTION-NAME.find({'age':{$lt:30}})()                       ===> GET ALL THE DATA LESS THEN AGE:30
db.COLLECTION-NAME.find({'age':{$lte:30}})()                      ===> GET ALL THE DATA LESS THEN EQUALS-TO AGE:30

db.COLLECTION-NAME.find({'age':{$in:[22,52]}})                    ===> GET ALL THE DATA THAT MATCHES THE ARRAY OF VALUES
db.COLLECTION-NAME.find({'age':{$nin:[22,52]}})                   ===> GET ALL THE DATA THAT NOT_MATCHES THE ARRAY OF VALUES

```

### Introduction to Cursors

> Cursor in Mongodb are used to efficiently retrieve large result sets from queries providing control over the data retrieval process.
> Mongodb retrieves query results in batches using cursors.
> Cursor are a pointer to the result set on the server.
> Cursors are used to iterate through query results

```
Automatic Batching:
1. Mongodb retreats QD results in batches not all at once.
2. Default batch size is usually 101 documents.
3. This improves memory efficiency and Network request
```

### Cursor Methods

1. count()
2. limit()
3. skip()
4. sort()

```
db.COLLECTION-NAME.find({'age':{$eq:30}}).count()                           ===> GET COUNT OF ALL THE DATA EQUALS-TO AGE:30
db.COLLECTION-NAME.find({'age':{$eq:30}}).limit(2)                          ===> GET FIRST TWO DATA EQUALS-TO AGE
db.COLLECTION-NAME.find({'age':{$eq:30}}).skip(2)                           ===> SKIP FIRST TWO DATA EQUALS-TO AGE
db.COLLECTION-NAME.find({'age':{$eq:30}}).limit(2).skip(1)                  ===> SKIP FIRST 1 DATA Then After SKIP return  2 DATA
db.COLLECTION-NAME.find({'age':{$eq:30}}).limit(2).sort({age:1})            ===> SORT DATA EQUALS-TO AGE Ascending
db.COLLECTION-NAME.find({'age':{$eq:30}}).limit(2).sort({age:-1})           ===> SORT DATA EQUALS-TO AGE Descending

* skip() can be inefficent for large offsets.
* Using skip() on large result sets may impact performance.
* Consider using indexing to optimise query performance.
```

### Logical Operators

1. $and ===> Perform the logical AND operation on an array of expressions, where all expressions must be true for the document to match.

```
db.COLLECTION-NAME.find({  $and:[  {'age':{$gt:18}},  {'name':'abhijit'}  ]   })
                OR
db.COLLECTION-NAME.find(  {'age':{$gt:18}},  {'name':'abhijit'}   )
```

2. $or ===> Performa logical OR operation on an array of expression where at least one expression must be true for the document to match. if multiple condition true, then multiple data will return, according to conditions.

```
db.COLLECTION-NAME.find({  $or:[  {'age':{$gt:18}},  {'name':'abhijit'}  ]
```

3. $nor  ===> Tt Opposite of ($or), whatever conditions matches will not return.

```
db.COLLECTION-NAME.find({$nor:[{'age':{$eq:52}},{'name':'abhijit'}]})
```

4. $not ===> opposite of condition

```
db.data.find({'age':{$not:{$gt:30}}})
```

### Complex Expressions

1. The $expr operator allows using aggregation expressions within a query.
2. Useful when you need to compare fields from the same document in a more complex manner.

```
Suntax           { $expr: { operator:[field, value] } }
Example     db.data.find( { $expr: {$gt: ['$age',30] } } )
```

```
db.products.insertMany([
  {'quantity':50,'price':10,'targetPrice':200  },
  {'quantity':30,'price':20,'targetPrice':150  },
  {'quantity':70,'price':40,'targetPrice':150  },
  {'quantity':20,'price':60,'targetPrice':100  },
  {'quantity':1,'price':90,'targetPrice':100  }
  ])

  db.products.find({ $expr:{ $gt: [{$multiply: ['$quantity', '$price']}, '$targetPrice'] } })
  db.products.find({ $expr:{ $lt: [{$add: ['$quantity', '$price']}, '$targetPrice'] } })
  db.products.find({ $expr:{ $lt: [{$subtract: ['$quantity', '$price']}, '$targetPrice'] } })
  db.products.find({ $expr:{ $gt: [{$divide: ['$quantity', '$price']}, '$targetPrice'] } })
```

### Elements Operator

1. $exists ===> Matches documents that have a specific field, regardless of its value.

```
db.data.find({'course name': {$exists: true}}).count()
db.data.find({'price': {$exists: false},price:{$eq:10}})
db.data.find({'course name': {$exists: false}}).count()
```

2. $type ===> Operator filters documents based on the BSON data type of a field

```
db.products.find({price:{$type:'number'}})
db.products.find({price:{$type:'string'}}).count()
db.products.find({price:{$type:'bool'}}).count()

1 Double
2 String
3 Object
4 Array
5 Binary data
6 Undefined
7 ObjectID
8 Boolean
9 Date
10 Null
11 Regular Expression

```

3. $size ===> Operator matches documents where the size of an array field matches a specified value.

```
db.comments.find({comments:{$size:2}})    check the nested number of elements inside every object. if matches then return
```

### Projection

> To Include specific fields,use projection with a value of 1 for the fields you want.
> To Exclude fields, use projection with a value of 0 for the fields you want to exclude.
> You cannot include and exclude fields simultaneously in the same query projection.

```
db.COLLECTION-NAME.find( {}, {field1:1,field2:1} )

db.comments.find( {comments:{$size:2}}, { comments:1, _id:0 } )   ===> include `comments`-key & exclued `_id`-key
```

### Embedded Documents

> Query documents inside embedded documents using dot notation.

```
db.COLLECTION_NAME.find( {"parent.child":value} )

db.comments.find({'comments.user':'Lily'})
db.comments.find({'metadata.views': {$gt:1200} })
```

### $all vs $elemMatch

> The $all operator selects the documents where the value of a field is an array that contains all the specified elements.

```
{ <field>: {$all: [<value1>,<value2>,...] } }

db.comments.find( {'comments.user': { $all: ['Alice','Vinod'] } } )    ====> Case Sensitive you have to write Exactly Same inside array
```

> The $elemMatch operator matches documents that contain an array field with, at least one element that matches all the specified query criteria.

```
{ <fields>: {$elemMatch: {<query1>,<query2>,...} } }

db.comments.find( { 'comments': { $elemMatch: { 'user':'Vinod', 'text':'Thanks for sharing.' } } } )      ====> Case Sensitive
                          OR
db.comments.find( { 'comments.user': 'Vinod', 'comments.text':'Thanks for sharing.' } )                   ====> Case Sensitive
```

### Update Operations in MongoDB

```
db.products.updateOne( { _id:ObjectId("515516")}, { $set: { 'price': 45 } } )   ===> if field exist then update, if not exists then created
db.products.updateOne( { name:'Abhijit'}, { $set: { 'isMarried': false } } )   ===> if field exist then update, if not exists then created

db.products.updateMany( { price:120 }, { $set: { 'isDiscount': false } } )   ===> if field exist then update, if not exists then created

```

### Removing and Renaming

```
db.COLLECTION_NAME.updateOne( {filter}, { $unset: {fieldName:1} } )                         ===> deleting key
db.comments.updateOne({_id:6}, {$unset: {metadata:1}})

db.COLLECTION_NAME.updateOne( {filter}, { $rename: { oldFieldName: "newFieldName" } } )     ===> rename key

db.products.updateMany( { price:120 }, { $rename: { 'isDiscount': 'isSale' } } )            ===> multiple rename togather
```

### Updating Arrays and Embedded Documents

```
db.COLLECTION-NAME.updateOne( { filter }, { $push: { arrayField:"new element"} } )               ===> appends a value to an array field
db.comments.updateOne({_id:5},{$push:{comments:{user:'Vinod',text:'hello'}}})       ===> Adding new object inside nested array of elements


db.COLLECTION-NAME.updateOne( { filter }, { $pop: { arrayField:value } } )    ===> Deleting last element of and object inside nested array


db.COLLECTION-NAME.updateOne( { filter }, { $set: { "arrayField.$.text" : "Updated text"} } )    ===> update nested document fields
db.COLLECTION-NAME.updateOne({_id:7,'comments.user':'Alice'},{$set:{"comments.$.text":"Updated text"}}) ==>Positional Operator $ like index


db.COLLECTION-NAME.updateOne({filter},{$pull:{arrayField:"elementToDelete"}}) =>Removes all occurrences of specified value from array field
```

### Delete Operations in MongoDB

```
db.COLLECTION-NAME.deleteOne({_id:5})          ===> Deleting single Documents or object inside Collections

db.COLLECTION-NAME.deleteMany({price:55})      ===> Deleting multiple Documents or object inside Collections
```

### explain('executionStats')

```
Use explain() method to understand query execution in detail.
Use explain('executionStats') method to measure the time taken to execute a query.

db.products.find({'price':{$gt:40}}).explain()
db.products.find({'price':{$gt:40}}).explain('executionStats')
```

## Indexes in MongoDB

> \_id is a by default unique index given by mongodb.
> Searching using index is faster then $regex searching.

```
Index are specialized data structures that optimize data retrieval speed in MongoDB
> Index store a fraction of data in a more searchable format.
> They eneble MongoDB to locate data faster during quiries.
> Indexes are separate from collection and multiple indexes can exist per collection.

> Faster Querying: indexes drastically accelerate data retrival, particularly for large collections.
> Efficient Sorting: Indexes facilitate rapid sorting based on specific fields.
> Improved Aggregation: Aggregation operations become more efficient with optimized indexes.
> Indexing on Multiple Fields: Complex queries can be executed efficiently by utilizing multiple fields in indexes.


db.COLLECTION-NAME.createIndex({field:1});  ===> 1 for storing indexes in Ascending order.
db.COLLECTION-NAME.createIndex({field:-1});  ===> -1 for storing indexes in Decending order.

db.users.createIndex({email:1},{unique:true});  ===> 1 for storing indexes in Ascending order + unique emails only .



db.COLLECTION_NAME.getIndexes()   ====>  indexes also store in collections

db.products.find({'price':{$gt:40}}).explain('executionStats') ===> before creating index more time
db.products.find({'price':{$gt:40}}).explain('executionStats') ===> after creating indexes less time also scane less documents


db.products.dropIndex({price:1})  ===> price index got deleted from collection
```

#### When not to use Index ?

1. Index on Rarely Used Fields : `Indexing fields that are seldom used in queries can consume unnecessary space and resource.`
2. Balancing Act : `Indexing requires disk space and memory. Overindexing can lead to resource strain and impact overall performance`
3. Indexing Small Collections : `In smaller collections, the cost of index maintenance might outweight the benefits gained from querying`

# Aggregation :-

- Defination: `Aggregation is the process of performing transformations on documents and combining them to produce computed results`
- Pipeline Stages: `Aggregations consist of multiple pipeline stages, each performing a specific operation on the input data`

###### Benefits:

```
1. Aggregation Data: Complex calculations and operations are possible.
2. Advanced Transformations: Data can be combined, reshaped, and computed for insights
3. Efficient Processing: Aggregation handles large datasets efficiently

```

$match

```
db.products.aggregate( [
  {$match: {company:"12311216454564564"} }
])
```

### $group

```
db.products.aggregate([{
  $group:{
    _id: {comp:"$company"},
    totalProducts:{$sum:1}
    }
  }])
```

### $addFields

```
db.products.aggregate([
  {
    $addFields: {
      uniqueKey: {
        $concat: ["$brand", "_", { $toString: "$id" }],
      },
    },
  },
]);
```

### $sort

```
db.numbers.aggregate([  {
    $sort: { _id: 1 }
  },
]);
```

### $sum $avg

```
db.numbers.aggregate([
  {
    $group: {
      _id: null,
      totalPrice: { $sum: "$price" },
      totalAvg: { $avg: "$price" },
    },
  },
]);
```

### $project $subtract $multiply

```
db.numbers.aggregate([
  {
    $project: {
      price: 1,
      "quantity": 1,
      totalPrice: { $sum: "$price" },
      totalAvg: { $avg: "$price" },
      discountedPrice1:{$subtract:["$price",5]},
      discountedPrice2:{$multiply:["$price",0.8]},
    },
  },
]);
```

### $push

```

```

### $unwind

> $push ==> include duplicate value

```
db.products.aggregate([
  { $match: { brand: { $eq: "Apple" } } },
  {
    $unwind: "$images",
  },
  {
    $group: {
      _id: null,
      allImages: { $push: "$images" },
    },
  },
]);
```

### $addToSet

> $addToSet ==> include only Unique value

```
db.products.aggregate([
  { $match: { brand: { $eq: "Apple" } } },
  {
    $unwind: "$images",
  },
  {
    $group: {
      _id: null,
      allImages: { $addToSet: "$images" },
    },
  },
]);
```

### $size

```
db.products.aggregate([
  { $match: { brand: { $eq: "Apple" } } },
  {
    $unwind: "$images",
  },
  {
    $group: {
      _id: null,
      allImages: { $addToSet: "$images" },
    },
  },
  {
    $project: {
      _id:1,
      allImages: { $size: "$allImages" },
    }
  }
]);
```

### $skip $limit

```
db.products.aggregate([
  { $match: { brand: { $eq: "Apple" } } },
  {
    $project: {
      _id:1,
      allImages: { $size: "$images" },
    }
  },
  {
    $skip:1
  },
  {
    $limit:2
  },
]);
```

### $filter

```
db.cols.aggregate([
  {
    $project: {
      name:1,
      filterValue:{
        $filter:{
          input:"$value",
          as:"val",
          cond:{
            $gt:["$$val",30]
          }
        }
      }
    }
  }
])
```
