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

function displayProduct(products){
    let product_catalog = document.getElementById('product-catalog')
    let html =`
    <div class="single-product">
        <h5>Title: Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h5>
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="">
        <p>Description: 'Your perfect pack for everyday use and walks in th…to 15 inches in the padded sleeve, your everyday'</p>
        <div>Category: men's clothing</div>
        <div> $109.95</div>
    </div>`
}


fetch("https://fakestoreapi.com/products/")
.then(res => res.json())
.then(data => console.log(data[0]))
.catch(err => console.log(err))