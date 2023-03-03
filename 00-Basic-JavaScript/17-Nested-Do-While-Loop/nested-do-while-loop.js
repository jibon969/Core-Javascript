
// Nested Do While Loop

var i = 1;
do {
    console.log("Inner loop ")
    console.log(i);
    i++;
    var j = 1;
    do {
        console.log("Outer loop")
        console.log(j);
        j++;
    } while (j <= 5);
} while (i < 3)