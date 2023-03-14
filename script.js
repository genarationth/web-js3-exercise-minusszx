
/////////////// Exercise #1 /////////////


function calculatePayment(amount) {
    const transactionFee = 3; //// 3% transaction fee
    const interestRate = 0.01; //// 0.1% interest rate
    const interestFee = amount * interestRate; 

    const totalCost = amount + transactionFee + interestFee

    return totalCost 
}
//// call example 
console.log(calculatePayment(200));




///////////// Exercise #2 /////////////



function hello (name1, name2 , name3) {
    console.log("Welcome " + name1 +" "+ name2 + " "+ name3 + " to my room.");
}
hello ("John","Malin","Noa")



















