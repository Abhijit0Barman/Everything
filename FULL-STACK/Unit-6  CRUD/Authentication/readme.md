    Authenti-cation === Identifi-cation

    Authori-zation  === Per-mission

1. npm i express
2. npm i mongoose
3. npm i nodemon
4. npm i dotenv
5. npm i bcrypt
6. npm i jsonwebtoken

`Authorization  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF2aUBnbWFpbC5jb20iLCJpYXQiOjE3MTAzNjExNjh9.lucT556oev3LfZXFwBsNlObbrznztnbB28m42XhidJY`

```const token = req.headers.authorization?.split(" ")[1];
    jwt.verify(token, process.env.secretKey, (err, decoded) => {
        <!-- console.log(decoded); -->
        if (decoded) {
            res.send("Movies Data...");
        } else {
            res.send("You  are not authorized to view this data.");
        }
    });
```
