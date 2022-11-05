let menu = {
    title: "My menu",
    width: 200,
    height: 300,
  };
  function multiplyNumeric(obj) {
    for(let key in obj){
if(typeof obj[key] == 'number'){
obj[key] *= 2;
}
}
}