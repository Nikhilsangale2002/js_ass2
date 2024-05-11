function findTax(sal) {
    let tax;

    switch (true) {
        case (sal <= 500000 && sal > 0):
            tax = 0;
            break;
        case (sal <= 1000000 && sal > 500000):
            tax = sal * 0.1;
            break;
        case (sal <= 1500000 && sal > 1000000):
            tax = sal * 0.2;
            break;
        case (sal > 1500000):
            tax = sal * 0.3;
            break;
        default:
            tax = "Invalid salary";
            break;
    }

    return tax;
}

// Example usage:
console.log(findTax(400000));    
console.log(findTax(600000));    
console.log(findTax(1200000));   
console.log(findTax(2000000));   
console.log(findTax(-100));      
