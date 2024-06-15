let year = parseInt(prompt("Give Year: "));

if((year%4==0 && year%100!=0) ||(year%400==0))
    {
        console.log("Its a Leap Year");
    }
else{
    console.log("Its Not a Leap Year");
}