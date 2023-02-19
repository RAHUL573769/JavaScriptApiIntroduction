const user={
    id:1,
    name:"Gorid mia",
    job:"Actor"
}

console.log(user);

const stringified=JSON.stringify(user);
console.log(stringified);

const details={
    id:1,
    owner:"Alia",
    address:{
        street:"Kochuket er goli",
        city:"ranbir"
    },
    products:["car",,"bus"]
}
console.log(JSON.stringify(details));








const  loadUser=()=>{
fetch("https://jsonplaceholder.typicode.com/users").then(data=>data.json()).then(data=>displayData(data))
}

const displayData=(data)=>{
    const ul=document.getElementById("userlist");
for( let datas of data){
console.log(datas.name);

const li=document.createElement("li");
li.innerText=`${datas.name}`;
ul.appendChild(li);
}
}

const loadUsers1=()=>{
    const url='https://jsonplaceholder.typicode.com/users';
    fetch(url).then(res=>res.json()).then(data=>displayUser1(data));
}
const container=document.getElementById("postContainer");

const displayUser1=(data)=>{


    for(let posts of data){
        const div=document.createElement("div");
        div.classList.add("post");
    
       div.innerHTML=`<h2>${posts.name}</h2>`
 
console.log(posts);
container.appendChild(div);

}

}