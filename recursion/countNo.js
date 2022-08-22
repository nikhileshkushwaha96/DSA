function main(){
    let n = 30100202
    let c=0
   let ans = count(n,c)
    console.log(ans)

}

function count(n,c){
    if(n==0){
        return c;
    }
    if(n%10==0){
        let p= Math.floor(n/10)
      return  count(p,c+1)
    }
  
    
    let p = Math.floor(n/10)
    return   count(p,c)
  

   


}

main()