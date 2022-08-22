function main(){
    let n=4
   let ans= fac(n)
    console.log(ans)

}
 function fac(n){
    if(n<=1){
        return 1
    }
    return n*fac(n-1)

 }

 main()