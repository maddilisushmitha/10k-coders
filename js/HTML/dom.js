// console.log(document.getElementById("heading1"));
// document.getElementByTagName("h1") ;

// four methods:get,put,delete,post=>curd=>create=post,update=get,read=put,dlete=delete

fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=>
response.json())

.then((json)=>
console.log(json));

let data=[];

fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=>
response.json())

.then((json)=>DataTransfer.push(json));
console.log(data);