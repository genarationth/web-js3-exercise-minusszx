
/////////////// Exercise #1 /////////////


function calculatePayment(amount) {
    const transactionFee = 3; //// 3% transaction fee
    const interestRate = 0.001; //// 0.1% interest rate
    const interestFee = amount * interestRate; 

    const totalCost = amount + transactionFee + interestFee

    return totalCost 
}
//// call example 
console.log(calculatePayment(200));




///////////// Exercise #2 /////////////


///// Part 1 
function hello (name1, name2 , name3) {
    console.log("Welcome " + name1 +" "+ name2 + " "+ name3 + " to my room.");
}
hello ("John","Malin","Noa")


///// Part 2 
function calculateAge (birthYears) {
    const currentYears = 2023;
    const age = currentYears - birthYears;
    return age;
}

//// call example 
console.log(calculateAge(1999));



///// Part 3 

function meetFriendAge (name,birthYears) {
    const age = calculateAge(birthYears);
    console.log(`Welcome ${name}, you are ${age}`);
}

///// call example
meetFriendAge ("ACE", 1995);

function meetFriendsAges (name1, birthYears1 , name2 , birthYears2 , name3 , birthYears3){
    meetFriendAge(name1, birthYears1);
    meetFriendAge(name2, birthYears2);
    meetFriendAge(name3, birthYears3);
}

///// call example 
meetFriendsAges ("ACE",1995,"SABO",1995,"LUFFY",1997);




























