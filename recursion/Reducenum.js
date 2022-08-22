var numberOfSteps = function(num) {
    num = 123;

    
    console.log(steps(num,0)) 
    
     
      
      
  };
  
  var steps = function(num,count){
      if(num<=0){
          return count
      }
      if(num%2 === 0){
          return  steps(num/2,count+1)
      }
      else{
          return steps(num-1,count+1)
      }
  }

  numberOfSteps()