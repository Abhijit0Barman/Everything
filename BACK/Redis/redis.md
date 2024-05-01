Installing Redis:-

1. Ready Server:
    =>in our local computer 
    =>Redis labs
2. Redis cli
3. npm package rd-cli


https://try.redis.io/

> SET age 21
OK
> GET age
"21"
> INCR age
(integer) 22
> DECR age
(integer) 21
> INCRBY age 3
(integer) 24
> DECRBY age 4
(integer) 20
> DEL age
(integer) 1
> GET age
(nil)
> EXISTS age
(integer) 0
> set name abhijit
OK