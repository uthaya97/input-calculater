// const result=new Promise((resolve,reject)=>{
//     let ispassed=false;
//     if(ispassed){
//         resolve()
//     }
//     else{
//         reject()
//     }
// })
// result.then(success).catch(failure)

// function success(){
//     console.log("your pass");
// }

// function failure(){
//     console.log("your fail");
// }


// let url=new Promise((resolve,reject)=>{
//     let ans=true
//     if(ans){
//         resolve()
//     }
//     else{
//         reject()
//     }
// })
// url.then(success).catch(failure)

// function success(){
//     console.log("hello welcome");
// }
// function failure(){
//     console.log("sort balaji");
// }

// let col=document.getElementById("col")
// console.log(col);



// API PRACTICE



// fetch("https://api.tvmaze.com/shows/1/episodes?specials=1")
// .then((res)=>res.json())
// .then(msg =>{
//     console.log(msg);
//   for (message of msg){
//     console.log(message);
//     create(message)
//   }
// })
// let col= document.getElementById("col")
// function create(message){
    

//     col.innerHTML+= ` <div class="card">
//      <div class="card-head">
//         <h1>${message.name}<h1>
//         <img src="${message.image.medium}">
//      </div>
//  </div>`


// }



// DESTRUCTURING

// let ans={
//     name:"ram",
//     age:20
// }
// let {name,age}=ans
// console.log(name);
// let {name:na,age:ag,sex="male"}=ans
// console.log(ag);
// console.log(sex);

// let name=["john","ramesh"]
// let [first_name,second_name]=name
// console.log(first_name);
// first_name="anna"
// console.log(first_name);



// let url=new Promise((resolve,reject)=>{
//     let getUrl=false
//     const url1="www.google.com"

//     if(getUrl){
//         setTimeout(resolve,2000,`dowload ${url1}`)
//     }
//     else{
//         console.log("error");
//     }
// })
// async function solve(){
//    try{
//      let c=await url
//     console.log(c);
//    }
//    catch(ans){
//     console.log(ans);
//    }

// }
// console.log(solve());


// task

// let a=Math.round(Math.random())
// console.log(a);
// let pro=new Promise((resolve,reject)=>{
//     if(a==1){
//         console.log("tail");
//     }
//     else{
//         console.log("head");
//     }
// })
// async function toss(){
//  try{
//      let c=await pro
//   console.log(c);
//  }
//  catch(m){
//     console.log(m);
//  }
// }
// console.log(toss());


// function rating(){
//     return new Promise((resolve,reject)=>{
//         let isPassed=true
//         if(isPassed){
//             resolve(450)
//         }
//         else{
//             reject(150)
//         }
//     })
// }
// rating().then((total)=>console.log("you pass"))
// .catch((total)=>console.log("you fali"))

// async function resolve(){

// }
// console.log(resolve());


// for(let i=1;i<=5;i++){
//     for(k=1;k<i;k++){
//         document.write("&nbsp;")
//     }
//     for(j=5;j>=i;j--){
//         document.write("*")
//     }

//     document.write("<br>")
// }


// for(i=1;i<=5;i++){
//     for(j=1;j<i;j++){
//         document.write("&nbsp;&nbsp")
//     }
//     for(k=5;k>=i;k--){
//         document.write(k)
//     }
//     document.write("<br>")
   
// }

let input1=document.querySelector("#input1")
console.log(input1);
let input2=document.querySelector("#input2")
console.log(input2);
let input3=document.querySelector("#input3")
console.log(input3);

function sum(){
    let in1=input1.value;
    let in2=input2.value;
    console.log(in1,in2);

    let output=Number(in1)+Number(in2)
    console.log(output);
    input3.value=output
}
