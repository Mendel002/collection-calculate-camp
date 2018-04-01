'use strict';

function collect_all_even(collection) {
  //在这里写入代码 选出给定区间中所有的偶数
  var result = new Array();
  var j=0;
  for (var i = 0; i < collection.length; i++) {
    if(!(collection[i]%2)){
      result[j] = collection[i];
      j++;
    }
  }
  return result;
}

module.exports = collect_all_even;
