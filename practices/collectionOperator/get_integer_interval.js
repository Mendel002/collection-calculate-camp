'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var arr = new Array();
  var i = 0;
  var index = number_b - number_a;
  var num_ab = Math.abs(index)+1;
  //把区间里的书放入数组arr
//  arr[0] = number_a;
  for (i = 0; i < num_ab; i++) {
    if (index >= 0) {
      arr[i] = number_a + i;
    }else {
      arr[i] = number_a - i;
    }
  }
  return arr;
}

module.exports = get_integer_interval;
