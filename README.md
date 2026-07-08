# NoSQL Databases Assignment — MongoDB & Redis

## Overview
This submission covers two NoSQL technologies applied to an e-commerce/bookstore scenario:
- **MongoDB** — document database for a bookstore catalog (CRUD, aggregation, indexing).
- **Redis** — in-memory key-value store for caching (Strings, Hashes, Lists, Sets, TTL).

## Contents

```
assignment/
│
├── mongodb_assignment.js            # All MongoDB commands (data generation, CRUD, aggregation, indexing)
├── mongodb_optimization_report.pdf  # Query optimization report (before/after indexing)
├── redis_assignment.txt             # All Redis commands (Tasks 1–6)
├── redis_notes.md                   # Short explanation of Redis data types & use cases
├── screenshots/
│   ├── mongodb/                     # CRUD, aggregation, and execution plan screenshots
│   └── redis/                       # Screenshots for each Redis task
└── README.md                        # This file
```

## Part 1 — MongoDB
- Created `bookstore` database with `books` collection.
- Inserted 30+ books across 8 categories (Programming, Fiction, Science, Business, History, Self-Help, Sci-Fi, Fantasy, Memoir) and 25+ authors.
- Performed CRUD operations: inserts, category/price/stock/author/rating queries, updates (price, stock, rating), and deletes.
- Built 4 aggregation pipelines: average price per category, book count per category, average rating per category, and top 5 most expensive books.
- Compared query performance before and after creating a compound index (`category`, `published_year`) — see `mongodb_optimization_report.pdf` for full analysis.

## Part 2 — Redis
- Ran Redis in Docker (`redis-nosql-hw` container).
- Demonstrated Strings, Hashes, Lists, Sets, and TTL/expiration.
- Simulated a product page cache (`cache:product:1001`) with a 120-second expiration to illustrate how caching reduces load on the primary database and speeds up repeated reads.
- See `redis_notes.md` for a short summary of each data type and its typical use case.

## Notes
- The **bonus task** (Redis Sorted Set leaderboard, `sales_leaderboard`) was **not completed** in this submission.
