// 6_big_length.js

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let mx=friends[0];
for(let i=0;i<friends.length;i++)
    {
if(friends[i].length>mx.length)
    {
        mx=friends[i];
    }
    }
console.log(mx);