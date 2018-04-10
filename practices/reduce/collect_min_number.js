'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  let len = collection.length;
  let min = collection[0];
  for (var i=0; i<len; i++){
    if(min > collection[i]){
      min = collection[i];
    }
  }
  return min;
}

module.exports = collect_min_number;

