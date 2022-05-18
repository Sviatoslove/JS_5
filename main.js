var flavors = [
  'Краб', 
  'Сметана и зелень', 
  'Малосольные огурчики',
  'Классический', 
  'С сыром', 
  'Паприка'
];

var x = 'Новый вкус';

function flavorsNew(array) {
  var messege;
  for(i=0; i < array.length; i++) {
    if(array.push(x)) {
      messege = x;
    }
    else {
      messege = array[array.length - 1];
    }
  }
  return messege;
}

flavorsNew(flavors);