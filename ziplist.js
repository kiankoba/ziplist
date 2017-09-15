function zipList(list1, list2){
  if(list1.length !== list2.length){
    return false;
  }
  let retList = [];
  for (let i = 0; i < list1.length; i++){
    retList.push(list1[i]);
    retList.push(list2[i]);
  }
  return retList;
}

test1 = [1, 2, 3];
test2 = ["a", "b", "c"];
console.log(zipList(test1, test2));

function zipListTheSimpleWay(list1, list2){
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(test1, test2));