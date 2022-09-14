let one=1;
let two=2;
let three=3;
let four=4;
let five=5;
console.log(one*two*three*four*five);

console.log("this manav's code");

console.log("These are the changes from Tarun");

for (m = 1; m <= 24; m++) {
  let count = 0;
  for(n=1;n<=m;n++) {
    if(m%n==0){
      count++;
    }
  }
if (count == 2) {
  console.log(m,"Prime");
} else {
  console.log(m,"Not a Prime");
}
}
