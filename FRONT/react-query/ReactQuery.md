WHAT IS REACT QUERY ? ==> A library for fetching data from an API in React.
WHY ? ==> 
1. Since react is a UI library. There is no specific pattern for Data Fetching
2. useEffect() hook for data fetching and useState() hook to maintain component state like loading, error or resulting data
3. if the data is needed throughout the app, we tend to use state management libraries
4. most of the state management libraries are good for working with client state.
5. state management libraries are not great for working with asynchronous or server state 


### Client vs Server state

##### Client state 
```
Persisted in your app memory and accessing or updating it is synchronous
```
 
##### Server state 
```
> Persisted remotely and requires asynchronous APIs for fetching or updating 
> Has shared ownership
> Data can be updated by someone else without your knowledge
> UI data may not be in sync with the remote data
> Challenging when you have to deal with caching, deduping multiple requests for the same data, updating stale data in the background, performance optimization (pagination, lazy loading) etc. 
```
### Course Content
1. Basic queries
2. Poll data
3. RQ dev tools
4. Create re-usable query hooks
5. Query by ID
6. Parallel queries
7. Dynamic queries
8. Infinite & paginated queries
9. Update data using mutations
10. Invalidate updates
11. Optimistic updates
12. Axios Interceptor


###### Pre-Requisites
- React Fundamentals
- React Hooks