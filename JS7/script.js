/*

1 Use this API:
https://fakestoreapi.com/products
Requirements:
Fetch all products.
Convert response using .json().
Display:
Product title
Price
Category
Use map() to create a new array containing only:
title
price
Use filter() to find products with price greater than $100.
Use find() to find the first product in the "electronics" category.
Use reduce() to calculate the total price.
Use sort() to arrange products from highest price to lowest.
Handle API errors using .catch().
Display a completion message using .finally().

let apiUrl = "https://fakestoreapi.com/products";

fetch(apiUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {

        // Display products

        console.log("===== PRODUCTS =====");

        products.forEach(function(product) {

            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);

        });


        // MAP
        // Create new array with title and price

        let productDetails = products.map(function(product) {

            return {
                title: product.title,
                price: product.price
            };

        });

        console.log("===== TITLE AND PRICE =====");
        console.log(productDetails);


        // FILTER
        // Products above $100

        let expensiveProducts = products.filter(function(product) {

            return product.price > 100;

        });

        console.log("===== ABOVE $100 =====");
        console.log(expensiveProducts);


        // FIND
        // First electronics product

        let electronicsProduct = products.find(function(product) {

            return product.category === "electronics";

        });

        console.log("===== ELECTRONICS =====");
        console.log(electronicsProduct);


        // REDUCE
        // Calculate total price

        let totalPrice = products.reduce(function(total, product) {

            return total + product.price;

        }, 0);

        console.log("Total Price:", totalPrice);


        // SORT
        // Highest price to lowest price

        let sortedProducts = products.sort(function(a, b) {

            return b.price - a.price;

        });

        console.log("===== SORTED PRODUCTS =====");

        sortedProducts.forEach(function(product) {

            console.log(product.title, product.price);

        });

    })

    .catch(function(error) {

        console.log("Something went wrong");
        console.log(error);

    })

    .finally(function() {

        console.log("API process completed");

    });



Task 2 — Product Category Dashboard
Use:
https://fakestoreapi.com/products
Create a console-based dashboard.
Expected output:
===== PRODUCT DASHBOARD =====

Total Products: 20

Electronics: 6
Jewelery: 4
Men's Clothing: 6
Women's Clothing: 4

Highest Price: $999.99
Lowest Price: $5.99
Average Price: $XXX
Students must use:
fetch()
map()
filter()
reduce()
sort()
Functions
Template literals

let apiUrl = "https://fakestoreapi.com/products";


function showDashboard(products) {

    console.log("===== PRODUCT DASHBOARD =====");

    console.log("");


    // Total products

    console.log(
        `Total Products: ${products.length}`
    );


    // Electronics

    let electronics = products.filter(function(product) {

        return product.category === "electronics";

    });

    console.log(
        `Electronics: ${electronics.length}`
    );


    // Jewelery

    let jewelery = products.filter(function(product) {

        return product.category === "jewelery";

    });

    console.log(
        `Jewelery: ${jewelery.length}`
    );


    // Men's Clothing

    let mensClothing = products.filter(function(product) {

        return product.category === "men's clothing";

    });

    console.log(
        `Men's Clothing: ${mensClothing.length}`
    );


    // Women's Clothing

    let womensClothing = products.filter(function(product) {

        return product.category === "women's clothing";

    });

    console.log(
        `Women's Clothing: ${womensClothing.length}`
    );


    // Sort products

    let sortedProducts = products.sort(function(a, b) {

        return b.price - a.price;

    });


    // Highest price

    let highestPrice = sortedProducts[0].price;

    console.log(
        `Highest Price: $${highestPrice}`
    );


    // Lowest price

    let lowestPrice =
        sortedProducts[sortedProducts.length - 1].price;

    console.log(
        `Lowest Price: $${lowestPrice}`
    );


    // Total price

    let totalPrice = products.reduce(function(total, product) {

        return total + product.price;

    }, 0);


    // Average price

    let averagePrice = totalPrice / products.length;

    console.log(
        `Average Price: $${averagePrice.toFixed(2)}`
    );

}


fetch(apiUrl)

    .then(function(response) {

        return response.json();

    })

    .then(function(products) {

        showDashboard(products);

    })

    .catch(function(error) {

        console.log("Error:", error);

    })

    .finally(function() {

        console.log("Dashboard completed");

    });


    

3  Use these APIs:
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/posts
Requirements:
Fetch users.
Display all user names.
Display user name + email.
Find the user with ID 5.
Filter users from a particular city.
Fetch posts.
Display posts written by user ID 1.
Count how many posts user ID 1 has created.
Find the first post with more than 50 characters in the title.

let usersApi =
    "https://jsonplaceholder.typicode.com/users";

let postsApi =
    "https://jsonplaceholder.typicode.com/posts";


// USERS API

fetch(usersApi)

    .then(function(response) {

        return response.json();

    })

    .then(function(users) {

        console.log("===== USER NAMES =====");


        // Display names

        users.forEach(function(user) {

            console.log(user.name);

        });


        console.log("");
        console.log("===== NAME AND EMAIL =====");


        // Display name and email

        users.forEach(function(user) {

            console.log(
                user.name + " - " + user.email
            );

        });


        // Find user ID 5

        let user5 = users.find(function(user) {

            return user.id === 5;

        });

        console.log("");
        console.log("===== USER ID 5 =====");
        console.log(user5);


        // Filter by city

        let cityUsers = users.filter(function(user) {

            return user.address.city === "South Christy";

        });

        console.log("");
        console.log("===== CITY USERS =====");
        console.log(cityUsers);

    })

    .catch(function(error) {

        console.log("User API Error:", error);

    });


// POSTS API

fetch(postsApi)

    .then(function(response) {

        return response.json();

    })

    .then(function(posts) {


        // Posts created by user 1

        let user1Posts = posts.filter(function(post) {

            return post.userId === 1;

        });


        console.log("");
        console.log("===== USER 1 POSTS =====");


        user1Posts.forEach(function(post) {

            console.log(post.title);

        });


        // Count posts

        console.log(
            `User 1 created ${user1Posts.length} posts`
        );


        // Find long title

        let longTitlePost = posts.find(function(post) {

            return post.title.length > 50;

        });


        console.log("");
        console.log("===== LONG TITLE POST =====");
        console.log(longTitlePost);

    })

    .catch(function(error) {

        console.log("Post API Error:", error);

    });




Task 4 — API + Search
Use:
https://fakestoreapi.com/products
Ask the user:
Enter product category:
Example:
electronics
Then display only products belonging to that category.
Also ask:
Enter maximum price:
Example:
500
Display products matching both conditions:
Category = electronics
Price <= 500
Concepts: prompt(), fetch(), filter(), conditions, functions.


let apiUrl = "https://fakestoreapi.com/products";


let category = prompt(
    "Enter product category:"
);


let maxPrice = Number(
    prompt("Enter maximum price:")
);


fetch(apiUrl)

    .then(function(response) {

        return response.json();

    })

    .then(function(products) {


        // Filter products

        let result = products.filter(function(product) {

            return (
                product.category === category &&
                product.price <= maxPrice
            );

        });


        console.log("===== SEARCH RESULT =====");


        // Display result

        result.forEach(function(product) {

            console.log("Product:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);

        });

    })

    .catch(function(error) {

        console.log("Error:", error);

    })

    .finally(function() {

        console.log("Search completed");

    });




Task 5 — API Shopping Cart
Use:
https://fakestoreapi.com/products
Fetch the products and create a shopping cart.
The student should:
Display available products.
Select products using their IDs.
Add selected products to an array.
Calculate cart total using reduce().
Apply discount:
Above $100 → 10%
Above $200 → 20%
Display final amount.
Example:
===== CART =====

Product 1: Laptop
Price: $999

Product 2: Mouse
Price: $50

Total: $1049
Discount: 20%
Final Amount: $839.20


let apiUrl = "https://fakestoreapi.com/products";

let cart = [];


fetch(apiUrl)

    .then(function(response) {

        return response.json();

    })

    .then(function(products) {


        // Display products

        console.log("===== AVAILABLE PRODUCTS =====");


        products.forEach(function(product) {

            console.log(
                `ID: ${product.id} - ${product.title} - $${product.price}`
            );

        });


        // Select product IDs

        let firstId = Number(
            prompt("Enter first product ID:")
        );


        let secondId = Number(
            prompt("Enter second product ID:")
        );


        // Find first product

        let product1 = products.find(function(product) {

            return product.id === firstId;

        });


        // Find second product

        let product2 = products.find(function(product) {

            return product.id === secondId;

        });


        // Add products to cart

        if (product1) {

            cart.push(product1);

        }


        if (product2) {

            cart.push(product2);

        }


        // Display cart

        console.log("");
        console.log("===== CART =====");


        cart.forEach(function(product, index) {

            console.log(
                `Product ${index + 1}: ${product.title}`
            );

            console.log(
                `Price: $${product.price}`
            );

        });


        // Calculate total

        let total = cart.reduce(function(sum, product) {

            return sum + product.price;

        }, 0);


        console.log("");
        console.log(`Total: $${total.toFixed(2)}`);


        // Discount

        let discount = 0;


        if (total > 200) {

            discount = 20;

        }
        else if (total > 100) {

            discount = 10;

        }


        console.log(`Discount: ${discount}%`);


        // Discount amount

        let discountAmount =
            total * discount / 100;


        // Final amount

        let finalAmount =
            total - discountAmount;


        console.log(
            `Final Amount: $${finalAmount.toFixed(2)}`
        );

    })

    .catch(function(error) {

        console.log("Error:", error);

    })

    .finally(function() {

        console.log("Cart process completed");

    });





Task 6 — FakeStore Product Report
This is the best intermediate assignment for your current syllabus.
API:
https://fakestoreapi.com/products
Create a complete product report.
Students must implement:
1. Fetch API
fetch(apiLink)
2. Convert response
response.json()
3. Display all products
Use:
forEach()
4. Create product names array
Use:
map()
5. Filter expensive products
price > 100
Use:
filter()
6. Find electronics product
Use:
find()
7. Calculate total price
Use:
reduce()
8. Check products
Use:
some()
every()
9. Sort
Highest price → lowest price.
10. Error handling
Use:
.catch()
.finally()

let apiUrl = "https://fakestoreapi.com/products";


fetch(apiUrl)

    .then(function(response) {

        return response.json();

    })

    .then(function(products) {


        console.log("========== PRODUCT REPORT ==========");
        console.log("");


        // ==================================
        // 1. TOTAL PRODUCTS
        // ==================================

        console.log(
            `Total Products: ${products.length}`
        );


        // ==================================
        // 2. DISPLAY ALL PRODUCTS
        // forEach()
        // ==================================

        console.log("");
        console.log("===== ALL PRODUCTS =====");


        products.forEach(function(product) {

            console.log(
                `${product.id}. ${product.title}`
            );

            console.log(
                `Price: $${product.price}`
            );

            console.log(
                `Category: ${product.category}`
            );

            console.log("-----------------------");

        });


        // ==================================
        // 3. PRODUCT NAMES
        // map()
        // ==================================

        let productNames = products.map(function(product) {

            return product.title;

        });


        console.log("");
        console.log("===== PRODUCT NAMES =====");


        productNames.forEach(function(name) {

            console.log("- " + name);

        });


        // ==================================
        // 4. PRODUCTS ABOVE $100
        // filter()
        // ==================================

        let expensiveProducts =
            products.filter(function(product) {

                return product.price > 100;

            });


        console.log("");
        console.log("===== PRODUCTS ABOVE $100 =====");


        expensiveProducts.forEach(function(product) {

            console.log(
                product.title + " - $" + product.price
            );

        });


        // ==================================
        // 5. ELECTRONICS PRODUCT
        // find()
        // ==================================

        let electronicsProduct =
            products.find(function(product) {

                return product.category === "electronics";

            });


        console.log("");
        console.log("===== ELECTRONICS PRODUCT =====");


        console.log(electronicsProduct);


        // ==================================
        // 6. TOTAL PRICE
        // reduce()
        // ==================================

        let totalPrice =
            products.reduce(function(total, product) {

                return total + product.price;

            }, 0);


        console.log("");
        console.log("===== TOTAL PRODUCT VALUE =====");


        console.log(
            `$${totalPrice.toFixed(2)}`
        );


        // ==================================
        // 7. SOME()
        // ==================================

        let anyAbove500 =
            products.some(function(product) {

                return product.price > 500;

            });


        console.log("");
        console.log(
            `Any Product Above $500: ${anyAbove500}`
        );


        // ==================================
        // 8. EVERY()
        // ==================================

        let allAbove1 =
            products.every(function(product) {

                return product.price > 1;

            });


        console.log(
            `All Products Above $1: ${allAbove1}`
        );


        // ==================================
        // 9. SORT
        // ==================================

        products.sort(function(a, b) {

            return b.price - a.price;

        });


        console.log("");
        console.log("===== HIGHEST → LOWEST =====");


        products.forEach(function(product) {

            console.log(
                `${product.title} - $${product.price}`
            );

        });

    })


    // ==================================
    // 10. CATCH
    // ==================================

    .catch(function(error) {

        console.log("");
        console.log("===== ERROR =====");

        console.log(error);

    })


    // ==================================
    // 11. FINALLY
    // ==================================

    .finally(function() {

        console.log("");
        console.log(
            "========== PROCESS COMPLETED =========="
        );

    });

    */