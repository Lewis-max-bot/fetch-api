// FETCH API => Performs asynchronous operation returning promise => promise can be fullfilled or rejected

// syntax
// fetch() =>returns a promise 
// .then() =>converts it from json into javascript object using json()method 
// .then() =>we display converted data to our web page 
// .catch() we display error message 

// fetch("http://localhost:3000/articles")
// .then(function(resp){
//     return(resp.json())

// })
// .then(function(data){
//    console.log(data) 
// })
// .catch (function(err){
//     console.log(err)
// })

let base_url = "https://fakestoreapi.com/products/"

function displayProduct(products){
    let product_catalog = document.getElementById('product-catalog')

    products.forEach(product => {
        let html =`
        <div class="single-product">
            <h5>${product.title.substring(1, 10)}...</h5>
            <img src="${product.image}" alt="${product.title}">
            <p>${product.description.substring(1, 30)}...</p>
            <div>${product.category}</div>
            <div>${product.price}</div>
            <div id="buttons">
            <button class="one update">Update</button>
            <button class="one delete">Delete</button>
            </div>
        </div>`

        product_catalog.innerHTML += html
    });

}


// fetch("https://fakestoreapi.com/products/")
// .then(res => res.json())
// .then(data => console.log(data[0]))
// .catch(err => console.log(err))

// GET method 

fetch(base_url)
.then(res => res.json())
.then(data => displayProduct(data))
.catch(err => console.log(err)) 
// POST method  

fetch(base_url, {
    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    body:JSON.stringify({key : value})
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))
// DELETE method

fetch(`${base_url} /${id}`, {
    method: "DELETE"
})
.then(res => res.json())
.then(data => console.log("Product deleted succesfully"))
.catch(err => console.log(err))
// PATCH method 

fetch(`${base_url} /${id}`, {
    method: "PATCH",
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({key : value})
})
.then(res => res.json())
.then(data => console.log("data"))
.catch(err => console.log(err))

// CRUD=>
//     CREATE(post)
//     READ(get)
//     UPDATE(patch)
//     DELETE 
