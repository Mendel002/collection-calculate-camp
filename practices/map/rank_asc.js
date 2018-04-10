'use strict';
var rank_asc = function(collection){
  let len = collection.length;
  for (var i=0; i<len; i++){
    for (var j=0; j<len -1 -i; j++){
      if (collection[j]<collection[j+1]){
        var temp = collection[j+1];
        collection[j+1] = collection[j];
        collection[j] = temp;
      }
    }
  }
  return collection;
};

module.exports = rank_asc;
