'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var arr = new Array();
  var result = new Array();
  var i = 0,  j = 0;
  var index = number_b - number_a;
  //把区间里的书放入数组arr
  arr[0] = number_a;
  for (i = 1; i <= Math.abs(index); i++) {
    if (index >= 0) {
      arr[i] = number_a + i;
    }else {
      arr[i] = number_a - i;
    }
  }
  //得偶数数组result
  for (i = 0; i < arr.length; i++) {
      if (!(arr[i]%2)) {
        result[j] = arr[i];
        j++;
      }
    }
  return result;
}

module.exports = get_integer_interval_2;
