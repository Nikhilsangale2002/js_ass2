function cal(operation, m,n ){
    let ans;

    switch(operation){
        case 'add':
            ans=m+n;
            break;
        case 'sub':
            ans=m-n;
            break;
        case 'mul':
            ans=m*n;
            break;
        case 'div':
            ans=m/n;
            break;
        
        default:
            ans="invalid operations";
            break;
    }
    return ans;
}

console.log(cal('add', 5, 3));       
console.log(cal('sub', 10, 4)); 
console.log(cal('mul', 6, 2));  
console.log(cal('div', 10, 2));      
console.log(cal('power', 2, 3));    