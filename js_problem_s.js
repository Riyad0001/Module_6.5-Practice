const pai=[1,2,3,4,5,6,7,8,9,10];

const oddEven=(arr)=>{
    let odd=[];
    arr.forEach(dp => {
        if (dp%2!=0)
            {
                odd.push(dp);
            }
        
    });
    console.log(odd);
}

oddEven(pai);
alert();