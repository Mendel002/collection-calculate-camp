'use strict';

function compute_average(collection) {
  //在这里写入代码 待改
  var sum = 0;
  var len = collection.length;
  for(var i=0; i<len; i++){
    sum += collection[i];
  }
  return (sum / len);
}

module.exports = compute_average;

