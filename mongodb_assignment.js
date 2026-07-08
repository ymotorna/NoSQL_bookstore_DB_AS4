// cd "C:\mongodb\bin"
// mongosh bookstore

// +db
use bookstore

// +collection
db.createCollection("books")

// Task 1. Data Generation ----------------------------------------------------------------------------------------------

// insert data \\ 30 books
db.books.insertMany([
  // Programming
  { title: "Clean Code", author: "Robert C. Martin", category: "Programming", price: 35, in_stock: true, published_year: 2008, rating: 4.8 },
  { title: "The Pragmatic Programmer", author: "Andrew Hunt", category: "Programming", price: 42, in_stock: true, published_year: 1999, rating: 4.7 },
  { title: "Design Patterns", author: "Erich Gamma", category: "Programming", price: 55, in_stock: true, published_year: 1994, rating: 4.6 },
  { title: "Refactoring", author: "Martin Fowler", category: "Programming", price: 48, in_stock: false, published_year: 2018, rating: 4.5 },
  { title: "Introduction to Algorithms", author: "Thomas H. Cormen", category: "Programming", price: 89, in_stock: true, published_year: 2009, rating: 4.9 },
  { title: "Code Complete", author: "Steve McConnell", category: "Programming", price: 40, in_stock: true, published_year: 2004, rating: 4.6 },
  { title: "Clean Architecture", author: "Robert C. Martin", category: "Programming", price: 38, in_stock: true, published_year: 2017, rating: 4.4 },

  // Fiction
  { title: "1984", author: "George Orwell", category: "Fiction", price: 15, in_stock: true, published_year: 1949, rating: 4.9 },
  { title: "Animal Farm", author: "George Orwell", category: "Fiction", price: 12, in_stock: true, published_year: 1945, rating: 4.7 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction", price: 18, in_stock: true, published_year: 1960, rating: 4.8 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", price: 14, in_stock: false, published_year: 1925, rating: 4.5 },
  { title: "Brave New World", author: "Aldous Huxley", category: "Fiction", price: 16, in_stock: true, published_year: 1932, rating: 4.6 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Fiction", price: 13, in_stock: true, published_year: 1951, rating: 4.3 },
  { title: "Fahrenheit 451", author: "Ray Bradbury", category: "Fiction", price: 17, in_stock: true, published_year: 1953, rating: 4.5 },

  // Science
  { title: "A Brief History of Time", author: "Stephen Hawking", category: "Science", price: 22, in_stock: true, published_year: 1988, rating: 4.7 },
  { title: "The Selfish Gene", author: "Richard Dawkins", category: "Science", price: 25, in_stock: true, published_year: 1976, rating: 4.5 },
  { title: "Cosmos", author: "Carl Sagan", category: "Science", price: 28, in_stock: true, published_year: 1980, rating: 4.8 },
  { title: "Sapiens", author: "Yuval Noah Harari", category: "Science", price: 30, in_stock: true, published_year: 2011, rating: 4.7 },
  { title: "The Gene", author: "Siddhartha Mukherjee", category: "Science", price: 32, in_stock: false, published_year: 2016, rating: 4.6 },
  { title: "Astrophysics for People in a Hurry", author: "Neil deGrasse Tyson", category: "Science", price: 20, in_stock: true, published_year: 2017, rating: 4.4 },

  // Business
  { title: "Zero to One", author: "Peter Thiel", category: "Business", price: 24, in_stock: true, published_year: 2014, rating: 4.5 },
  { title: "The Lean Startup", author: "Eric Ries", category: "Business", price: 27, in_stock: true, published_year: 2011, rating: 4.4 },
  { title: "Good to Great", author: "Jim Collins", category: "Business", price: 26, in_stock: true, published_year: 2001, rating: 2.1 },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", category: "Business", price: 29, in_stock: false, published_year: 2011, rating: 4.6 },
  { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", category: "Business", price: 19, in_stock: true, published_year: 1997, rating: 3.0 },

  // History
  { title: "Guns, Germs, and Steel", author: "Jared Diamond", category: "History", price: 23, in_stock: true, published_year: 1997, rating: 4.6 },
  { title: "The Silk Roads", author: "Peter Frankopan", category: "History", price: 31, in_stock: true, published_year: 2015, rating: 4.5 },
  { title: "A People's History of the United States", author: "Howard Zinn", category: "History", price: 21, in_stock: true, published_year: 1980, rating: 4.4 },

  // Self-Help
  { title: "Atomic Habits", author: "James Clear", category: "Self-Help", price: 20, in_stock: true, published_year: 2018, rating: 4.9 },
  { title: "The Power of Habit", author: "Charles Duhigg", category: "Self-Help", price: 18, in_stock: true, published_year: 2012, rating: 4.5 }
])


// Task 2. CRUD Operations ---------------------------------------------------------------------------------

// insert 5 addiotional books
db.books.insertMany([
  { title: "Dune", author: "Frank Herbert", category: "Sci-Fi", price: 24, in_stock: true, published_year: 1965, rating: 4.8 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy", price: 19, in_stock: true, published_year: 1937, rating: 4.9 },
  { title: "Educated", author: "Tara Westover", category: "Memoir", price: 22, in_stock: false, published_year: 2018, rating: 4.7 },
  { title: "The Innovator's Dilemma", author: "Clayton Christensen", category: "Business", price: 33, in_stock: true, published_year: 1997, rating: 4.4 },
  { title: "Structure and Interpretation of Computer Programs", author: "Harold Abelson", category: "Programming", price: 45, in_stock: true, published_year: 1985, rating: 4.7 }
])

// Find all books in the "Programming" category
db.books.find({category: 'Programming'})

// Find books published after 2015
db.books.find({published_year: {$gt: 2015}})

// Find books priced above $40
db.books.find({price: {$gt: 40}})

// Find books currently in stock
db.books.find({in_stock: true })

// Find books written by a specific author
db.books.find({author: "George Orwell" })

// Find books with a rating greater than 4.5
db.books.find({rating: {$gt: 4.5} })


// Change the price of a book
db.books.updateOne({ title: 'The Hobbit' }, { $set: { price: 28 } } )

// Update stock availability
db.books.updateOne({title: 'Educated'}, {$set: {in_stock: true}} )

// Increase the rating of a selected book
db.books.updateOne({title: 'Educated'}, {$set: {rating: 4.8}} )


// Delete at least 2 books from the collection
db.books.deleteMany({ category: "Business",  rating: {$lt: 3.5}} )



// Task 3. Aggregation Framework  ------------------------------------------------------------------------------
// avg book price/category
db.books.aggregate([
  {$group: { _id: '$category', avg_price: {$avg: '$price' }} },
  {$set: { avg_price: {$round: ['$avg_price', 2] }} },
  {$sort: {avg_price: -1 } }
])

// #books/category
db.books.aggregate([
  {$group: {_id: '$category', tot_books: {$sum: 1}} },
  {$sort: {tot_books: -1 } }
])

// avg rating/category
db.books.aggregate([
  {$group: { _id: '$category', avg_rating: {$avg: '$rating'} } },
  {$set: { avg_rating: {$round: ['$avg_rating', 2] }} },
  {$sort: {avg_rating: -1 } }
])

// top-5 expensive books
db.books.find().sort({ price: -1, _id: 1 }).limit(5)    // +_id for if 2 books have =price



// Task 4. MongoDB Query Optimization -----------------------------------------------------------------------------
db.books.find({
    category: "Programming",
    published_year: { $gte: 2020 }
}).explain("executionStats")

// How many documents were scanned?  -- 33
// Was a collection scan performed?  -- Yes
// What was the execution time?      -- <0msc  <= too small DB


// +compound idx
db.books.createIndex({
    category: 1,
    published_year: 1
})

// re-run
db.books.find({
    category: "Programming",
    published_year: { $gte: 2020 }
}).explain("executionStats")

// How many documents were scanned?  -- 0
// Was a collection scan performed?  -- No (IXSCAN, FETCH)
// What was the execution time?      -- 26msc

//














