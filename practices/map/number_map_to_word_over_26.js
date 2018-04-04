'use strict';
var number_map_to_word_over_26 = function(collection){
  let result = new Array();
  let arr = new Array();
  arr[0] = "";
  for(var i = 1; i < 27; i++){
    arr[i] = String.fromCharCode(96 + parseInt(i));
  }

  for(var i = 0; i < collection.length; i++){
    if (collection[i]%26===0) {
      result.push(arr[parseInt(collection[i] / 26 - 1)] + arr[collection[26]]);
    }else {
      result.push(arr[parseInt(collection[i] / 26)] + arr[collection[i] % 26]);
    }
  }
  return result;
};

module.exports = number_map_to_word_over_26;
