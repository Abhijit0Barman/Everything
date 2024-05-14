https://www.youtube.com/watch?v=rU9ZODw5yvU&t=17245s

#### When to use Quotes and when not to ?
##### Special characters
`If a field name contains special characters or spaces, or starts with a number digit using post is necessary.`
##### Reserved words 
`If a field name. Is a reserved keyword in Mongodb. Use quotes, distinguish it from the reserved keyword.`
> Example: {'course name':'fullstack'} space is a special characters

#### Ordered an unordered inserts
When executing bulk write operations ordered and unordered, determine the batch behaviour. 
> Ordered insert 
default behaviour is ordered, where Mongodb stops on the first error 
>Unordered inserts
 when executing bulk write operations with unordered flag. Mongodb continue processing after encountering an error

##### Documents before the one with an error will be inserted, and the documents after the one with an error will also be inserted. Only the document with the error will not be inserted 
`db.COLLECTION-NAME.insertMany([{KEY:VALUE},{KEY:VALUE}],{ordered:false})`


### ***Queries Below***
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
1. $and  ===> Perform the logical AND operation on an array of expressions, where all expressions must be true for the document to match.
```
db.COLLECTION-NAME.find({  $and:[  {'age':{$gt:18}},  {'name':'abhijit'}  ]   })
                OR
db.COLLECTION-NAME.find(  {'age':{$gt:18}},  {'name':'abhijit'}   )
```

2. $or   ===> Performa logical OR operation on an array of expression where at least one expression must be true for the document to match. if multiple condition true, then multiple data will return, according to conditions.
```
db.COLLECTION-NAME.find({  $or:[  {'age':{$gt:18}},  {'name':'abhijit'}  ]
```

3. $nor  ===> Tt Opposite of ($or), whatever conditions matches will not return.
```
db.COLLECTION-NAME.find({$nor:[{'age':{$eq:52}},{'name':'abhijit'}]})
```

4. $not  ===> opposite of condition

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
1. $exists  ===> Matches documents that have a specific field, regardless of its value.
```
db.data.find({'course name': {$exists: true}}).count()
db.data.find({'price': {$exists: false},price:{$eq:10}})
db.data.find({'course name': {$exists: false}}).count()
```

2. $type    ===> Operator filters documents based on the BSON data type of a field
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

3. $size  ===> Operator matches documents where the size of an array field matches a specified value. 
```
db.comments.find({comments:{$size:2}})    check the nested number of elements inside every object. if matches then return
```



### Projection 
```
2.04.18
```






import locally from cli :- 
mongoimport PATH\FILE-NAME.json -d DATABASE-NAME -c COLLECTION-NAME