// Question 1 : Feet To Mile 
function feetToMile(feet) {
    if (feet < 0) {
        console.log("Distance value can not be Negative! ");
    }
    else if (feet >= 0) {
        var mile = feet / 5280;
        return mile;
    }
}
var result = feetToMile(125478);
console.log("Mile is: ", result.toFixed(2));


// Question 2 : Wood Calculator
function woodCalculator(chair, table, bed){
    if(chair<0 || table<0 || bed<0){
        console.log("Negative value is not accepted! ")
        return "Invalid";
    }
    else if(chair >=0 && table>=0 && bed>=0){
        var amountOfWood = (chair*1 + table*3 + bed *5);
        return amountOfWood;
    }
}
var result1 = woodCalculator(1, 5, 8);
console.log("Total amount of Wood: ", result1);

// Question 3: Brick Calculator 
function brickCalculator(numberOfFloor) {
    if(numberOfFloor<=0){
        console.log("Negative value is not accepted! ")
        return "Invalid!"
    }
    else if (1 <= numberOfFloor && numberOfFloor <= 10) {
        var floorBricks1 = 15 * 1000;
        var brickAmount1 = (numberOfFloor * floorBricks1);
        return brickAmount1;
    }
    else if (11 <= numberOfFloor && numberOfFloor <= 20) {
        var floorBricks2 = 12 * 1000;
        var secondPart = ((numberOfFloor - 10) * floorBricks2);
        var brickAmount2 = (150000 + secondPart);
        return brickAmount2;
    }
    else if (numberOfFloor >= 21) {
        var floorBricks3 = 10 * 1000;
        var thirdPart = ((numberOfFloor - 20) * floorBricks3);
        var brickAmount3 = (150000 + 120000 + thirdPart);
        return brickAmount3;
    }
}
var result2 = brickCalculator(35);
console.log("Total Amount of Bricks : ", result2);


// Quesion 4: Tiny Friend
function tinyFriend(string) {
    var shortestIndex = string[0].length;
    var stringIndexValue = '';
    for (i = 0; i < string.length; i++) {
        var currentIndex = string[i].length;
        if (shortestIndex >= currentIndex) {
            shortestIndex = currentIndex;
            stringIndexValue = string[i];
        }
    }
    return stringIndexValue;
}
var result3 = tinyFriend(["hasan", "Ahmed", "Noyon", "Jafarulla", "Tin"]);
console.log("Shortest Name: ", result3);
