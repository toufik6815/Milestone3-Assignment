// feetToMile
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(15840);
console.log(result);





// woodCalculator
function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}
var woodResult = woodCalculator(6, 1, 3);
console.log(woodResult); 





// brickCalculator  
function brickCalculator(building) {
    var Bricksfeet = 1000;
    if (building >= 0 && building <= 10) {
        var totalFeet = (building * 15);
        var totalBricks = (totalFeet * Bricksfeet);
        return totalBricks;
    }
    else if (building >= 0 && building <= 20) {
        var firstTenBuildingBricks = 30000;
        totalFeet = (building * 12);
        totalBricks = ((totalFeet * Bricksfeet) + firstTenBuildingBricks);
        return totalBricks;
    }
    else if (building >= 0 && building >= 21) {
        firstTenBuildingBricks = 30000;
        var firstTenToTwenty = 20000;
        totalFeet = (building * 10);
        var extraTotalBricks = (firstTenBuildingBricks + firstTenToTwenty);
        totalBricks = ((totalFeet * Bricksfeet) + extraTotalBricks);
        return totalBricks;
    }
    else {
        return "Please enter the positive value."
    }
}





// tinyFriend
function tinyFriend(names) {
    var lowest = names[0];
    for (var i = 0; i < names.length; i++) {
        var currentName = names[i];
        if (currentName.length < lowest.length) {
            lowest = currentName;
        }
    }
    return lowest;
}
var lowestName = tinyFriend(['Toufik', 'Hasan', 'Tanbir', 'Mia', 'Enil']);
console.log('lowestName is :-', lowestName);