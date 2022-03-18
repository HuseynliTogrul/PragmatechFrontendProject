function sortArray(array) {
    var temp = 0;
    for (var i = 0; i < array.length; i++) {
      for (var j = i; j < array.length; j++) {
        if (array[j] > array[i]) {
          temp = array[j];
          array[j] = array[i];
          array[i] = temp;
        }
      }
    }
    return array;
  }
  
  console.log(sortArray([3,2,1]));