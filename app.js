// var test='Hello World';
// var gi=true

// console.log(typeof test)
// console.log(typeof gi)

// var t1='12'
// var t3=parseFloat(t1)
// var t2=12.5
// var ra=t3+t2
// console.log(ra)

// var bt='lol'

// if(bt=='loll'){
//  console.log("Hi")
// }
// else
// {
//     console.log("Hello")
// }

// var res=30;
// if(res<40)
//     {
//         console.log("failed")
//     }
// else if(res>=40 && res<60)
//     {
//         console.log("Pass")
//     }

//object:
// var ob1={
//     pai:3,
//     hat:4,
//     nai:5,
//     fat: {
//          loi:9,
//          laii:77,
//          gui:10

//     }
// }
// console.log(ob1.fat.loi)

// Array:

var ar=['nine',6,88,"alom",{nine:55,to:44},[66,88,9]]

// console.log(ar[4])
// ar.push(88)
// ar.unshift("Sabbir")
// console.log(ar)
// ar.shift()
// console.log(ar)
// for loop:

// for(var i=0;i<ar.length;i++)
//     {
//         if(ar[i]=='alom')
//             {
//                 console.log("Yes Sier")
//             }
//             else{
//                 console.log("No sir")
//             }
//     }

// function sum(n,m){
//     res=n+m;
//     return res;
// }

// console.log(sum(10,20));

// const nam="My Name";
// let nai=`Riyad ${nam}`;
// const ache="My Name is "+nam;
// console.log(ache);

// let nai=[2,3,4,5,6];
// const ache=[8,9,10];
// console.log(...nai,...ache
// );

// const op={man:3,
//     oman:5,
//     hijla:[3,5,7]
// };

// const {oman,hijla}=op;
// console.log(hijla);

// const hi=[2,3,4,6,88];
// const[i,love,u,o,k]=hi;
// console.log(love);

// const sum=(num1,num2)=>num1+num2;

// console.log(sum(10,5));

const products=[
    {id:1,model:"uiu",hai:"yfuygu"},
    {id:2,model:"uiu",hai:"yfuygu"},
    {id:3,model:"iut",hai:"yfuygu"}
]

// for(let i=0;i<products.length;i++){
//     const element=products[i];
//     if(element.id==1)
//         {
//             console.log(element)
//         }
// }
// console.log(products);

// let ele=products.find(d=>d.id==3);
// console.log(ele);

// let rse=products.filter(dp=>dp.model=="uiu");
// console.log(rse);
// map:

// let res=products.map(dp=>dp.hai+"uiu");
// console.log(res);

const res=products.forEach(dp=>{
    if(dp.id==3){
        console.log(dp.model);
    }
    
})