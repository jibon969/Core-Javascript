
// Nested while loop

var i = 0;
while (i < 3) {
    console.log("Innter loop");
    console.log(i);
    i++;
    var j = 0;
    while (j <= 5) {
        console.log("Outer loop");
        console.log(j);
        j++;
    }
}