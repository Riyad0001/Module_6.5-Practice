const boro=(arr)=>{
    let bigg=arr[0];
    arr.forEach(bak => {
        if(bak.length>bigg.length)
            {
                bigg=bak;
            }
    });
    return bigg;
}

alert()

const arr=["sddfd","gfuygu","gyygyu","guyg","IUybjhjhyuu"];
console.log(boro(arr));