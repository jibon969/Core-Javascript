
/*
    1. Javascripts function definitions do not specify data types for parameters
    2. Javascripts function do not perform type checking on the  passed argument
    3. Javascript function do not check the number of argument.
*/

// Example

function my_name(name){
   return name
}

x = my_name("Jibon Ahmed", "Atiya")
console.log(x)


// Add to number
function add_to_number(a, b){
   return a + b
}

z = add_to_number(4, 5)
console.log(z)
