function main(){
    let n = 3167;
   let ans= add(n)
  console.log( ans) 

}

function add(n){
    if(n===0){
        return 0;
    }

    

    let p = Math.floor(n/10)
    return  ((n%10) + add(p) );


}

main()