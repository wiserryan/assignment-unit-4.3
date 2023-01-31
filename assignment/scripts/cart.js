console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []
function addItem (item) {
    basket.push (item);
    console.log (basket);
    return true;
}
let result = addItem('pepper');
console.log(addItem('salt'));
addItem('bacon');

function listItems(){
for(let item of basket) {
    console.log(item);
}
}

console.log(`Basket is ${basket}`);
listItems ();

//Create a function called `listItems`. It should:
//loop over the items in the `basket` array
//console.log each individual item on a new line

function empty () {
    basket = '';
}
console.log(`Basket is now ${basket}`);

//console.log (Basket is now '');

//checking the example
//console.log('Adding apples (expect true)', addItem('apples'));
//console.log(`Basket is now ${basket}`);


//- Create a function called `empty`. 
//It should:- reset the `basket` to an empty array

