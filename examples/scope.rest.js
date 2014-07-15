for(let i = 0; i < 10; i++){
  
  console.log(i);
  
}

console.log(i);     // i is not defined

if(true){
  
  (function(){
    
    var scoped = 'test';
    
  })();

  console.log(scoped);    // scoped is not defined
  
}else{
  
  let nativeScoped = 4;
  
}

console.log(nativeScoped);  // nativeScoped is not defined