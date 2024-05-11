function sumDigit(n, m) {
    let sum = 0;
    const n1 = n.toString().split('').map(Number);
    const m1 = m.toString().split('').map(Number);
    
    const maxLen = Math.max(n1.length, m1.length);
    
    for (let i = 0; i < maxLen; i++) {
        const d1 = n1[n1.length - i - 1] || 0;
        const d2 = m1[m1.length - i - 1] || 0;
        sum += d1 * d2;
    }
    
    return sum;
}


console.log(sumDigit(6, 34));   
console.log(sumDigit(123, 456));
console.log(sumDigit(987, 123));
