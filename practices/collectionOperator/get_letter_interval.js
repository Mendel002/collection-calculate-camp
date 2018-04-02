'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  //var alphabet= String.fromCharCode(64 + parseInt(填写数字);
  var arr = new Array();
  var i = 0;
  var index = number_b - number_a;
  var length = Math.abs(index)+1;
  for (var i = 0; i < length; i++) {
    if (index >= 0) {
      arr[i] = String.fromCharCode(96 + parseInt(number_a + i));
    }else {
      arr[i] = String.fromCharCode(96 + parseInt(number_a - i));
    }
  }
  return arr;
}

module.exports = get_letter_interval;
