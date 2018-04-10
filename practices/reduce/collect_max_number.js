'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  let len = collection.length;
  let max = collection[0];
  for (var i=0; i<len; i++){
    if (max < collection[i]){
      max = collection[i];
    }
  }
  return max;
}

module.exports = collect_max_number;
