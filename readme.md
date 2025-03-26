<!-- Recap on communicating with server-->
client  => Http request    http response<= server

Http => Hypertext transfer protocol => web language

by default http request send a get method

<!-- Http Verbs -->
PATCH
POST
GET
DELETE
PUT

<!-- URL => uniform resource locator -->
<!-- DNS  - Domain naming system -->

http://www.moringaschool.com/about

<!-- status code -->
100
200
300
400
500-problem is with the server

JSON =>Javascript Object Notation =>Jay-sawn

{
    "articles" : [
        
        {
            "id" : 1,
            "title" : "article 1",
            "content" : "hello"
        },
        {
            "id" : 1,
            "title" : "article 1",
            "content" : "hello"
        }
    ]
}

<!-- API => Application Programming Interface -->
helps two or more applications to communicate 

json-sever => mockup of a real server

Get => get all resources => articles/
    => get single resources => articles/2

Post => adding new resource => articles/

Delete => removing a resource => article/3

Patch => updating existing resource => article/3

<!-- Asynchronous programming -->


<!-- GET METHOD -->

fetch(base_url)
.then(res => res.json())
.then(data => console.log(data))
.catch(err =>console.log(err))

<!-- POST METHOD -->

fetch(base_url, {
    method: "post",
    headers: {
        "Content-Type : "application/json"
    },
    body: JSON.stringify({key : value})
})
.then(res => res.json())
.then( data => console.log(data))
.catch(err => console.log(err))

<!-- DELETE METHOD -->

<!-- PATCH METHOD -->
fetch(`${base_url}/ ${id}, {
    method:"PATCH",
    header: {
        "Content-Type" : "application/json"
    },
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(error))

<!-- CRUD OPERATION -->
       