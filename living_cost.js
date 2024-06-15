function m_saving(payments, living_cst) {
    let tot_incm = 0;
    
    for (let i = 0; i < payments.length; i++) {
        let payment = payments[i];
        if (payment >= 3000) {
            payment -= payment * 0.20;
        }
        tot_incm += payment;
    }
    
    const savings = tot_incm - living_cst;
    
    if (savings > 0) {
        return savings;
    } else {
        return "earn more!";
    }
}
let intp=prompt("Enter Payment");

let payments =intp.split(",").map(Number);

let liv_cost = Number(prompt("Enter your living cost:"));

let savings = m_saving(payments, liv_cost);
console.log(savings); 