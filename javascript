const selectionSort= (arr) =>{
for(var i = 0; i < arr.length; i++){
    //assign minindex at i.
    minIndex = i;
  
  //as we go up the indices, any index that is lower than the next becomes the new minimum index and is moved to the left. 
    for(var j = i+1; j<arr.length; j++){
       if(arr[j]<arr[minIndex]){
          minIndex = j;}}
    
    //swap the new minimum index with the original of i.   
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;}
  return arr;}

console.log(selectionSort([4,3,5,6,2,1]));
