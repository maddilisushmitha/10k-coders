// console.log(document.getElementById("heading1"));
// document.getElementByTagName("h1") ;

// four methods:get,put,delete,post=>curd=>create=post,update=get,read=put,dlete=delete


async function getData(){
    let response=await fetch("https://jsonplaceholder.typicode.com/posts")
    let output=await response.json();
    console.table(output);
}
getData()