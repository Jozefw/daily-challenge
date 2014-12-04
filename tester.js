function Biggie(arr, val){
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > val){
      console.log(arr.indexOf(arr[i]));
      console.log (val);
      return (arr.indexOf(arr[i]));
    }
  }
  
}

Biggie([2,2,4,7,9,11], 8);