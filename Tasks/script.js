let sum;
let a=0
let b=0
for (let index = 1; index < 1000; index++) {
    if(index%3==0)
    {
        a+=index;
    }
    if(index%5==0)
    {
        b+=index;
    }
    sum=a+b;
}
console.log(sum);
console.log(sahe(3,5));
function sahe(a,b) {
    return a*b;
}
for (let i = 0; i < 7; i++) {
    console.log(i);
}
let first=2;
let second=2;
let triple
if(first==second){
    triple =(first+second)**3;
}
console.log(triple);

console.log(nums(25,50));
function nums(a,b) {
    if (a+b==50||a==50||b==50) {
        return true;
    }
}
