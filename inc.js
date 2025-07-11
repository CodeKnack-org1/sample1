function inc(x) {
    return x + 1;
}

function dec(x) {
    return x - 1;
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function isEven(x){
    return x % 2 !== 0;
}

function isOdd(x){
    return x % 2 === 0;
}

function isValidParentheses(str){
    let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for(let i = 0; i < str.length; i++){
        if(map[str[i]]) stack.push(str[i]);
        else {
            if(stack.length === 0) return false;
            if(map[stack[stack.length-1]] !== str[i]) return false;
        }
    }
    return stack.length === 0;
}


console.log(inc(1));
console.log(dec(1));
console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));
console.log(div(1, 2));
