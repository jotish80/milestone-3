function feetToMile(feet) {
    var mile = feet/5280;
    return mile;
}

var result = feetToMile(26400);
console.log(result);


function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}

var result = woodCalculator(14, 5, 12);
console.log(result);

 

function tinyFriend(arr) {
    var shortLength = Infinity;
    var shortest = "";
    if (arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string' && arr[i].length < shortLength) {
                shortest = arr[i];
                shortLength = arr[i].length;
            }
        }
    }
    return shortest;
  }
  var output = tinyFriend([ 'two',  'three']);
  console.log(output);