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
default behaviour is ordered, where Mongodb stocks on the first error 
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