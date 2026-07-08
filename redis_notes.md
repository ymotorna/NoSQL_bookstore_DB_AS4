# Redis Notes

## 1. String Operations
* create simple key-value pair

![String Operations](redis_string_ops.png)

## 2. Hash Operations
* key - many values
* use when many attributes are related to 1 object

![Hash Operations](redis_hash_ops.png)

## 3. List Operations
* key - ordered seq of vals
* use when order matters (queues, timestamps)

![List Operations](redis_list_ops.png)

## 4. Set Operations
* key - many unique vals (unordered)
* use to avoid duplicates + when order doesnt matter (tags, categories)

![Set Operations](redis_set_ops.png)

## 5. Expiration (TTL)
* create temporary variables with set expiration time to be auto-deleted
* use to avoid cluttering of irrelevant data

![Expiration](redis_expiration.png)

## 6. Cache Simulation
* use expiration mechanism to simulate data caching (temporary data storage in Redis memory)
    * => retrieve data from memory instead of calling primary db => faster
    * => auto-delete after set amount of time => no cluttering

![Cache Simulation](redis_cash_simulation.png)


