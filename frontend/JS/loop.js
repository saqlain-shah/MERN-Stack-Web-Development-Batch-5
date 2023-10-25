for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    continue;
  } else {
    //console.log(i);
  }
}
for (let i = 10; i >= 1; i--) {
  //console.log(i);
}
var array1 = [
  [11, 12, 13],
  [14, 15, 16],
  [17, 18, 19],
];
for (var i = 0; i < array1.length; i++) {
  for (var j = 0; j < array1[i].length; j++) {
    console.log(array1[i][j]);
  }
}
console.table(array1);
