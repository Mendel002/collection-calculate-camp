function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result = [];

  collection_a.map(item => {
    if (object_b.value.includes(item)) {
      result.push(item);
    }
  })

  return result;
}

module.exports = collect_same_elements;
