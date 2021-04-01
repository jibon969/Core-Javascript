
// Break

var i = 0;
for (i; i <= 5; i++) {
    if (i == 4) {
        break;
    }
    console.log(i);
}
console.log('\n')

// continue
var i = 0;
for (i; i <= 5; i++) {
    if (i == 4) {
        continue;
    }
    console.log(i);
}
console.log('\n')

// Example
var i = 0;
for (i; i <= 100; i++) {
    if (i % 5 == 0) {
        console.log(i);
    }
}

