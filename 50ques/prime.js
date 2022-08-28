/// check weather a num is a prime or not
function main(){
    let num = 14;
    let count =0
    for(let i=2;i<=Math.sqrt(num);i++){

        if(num%i===0){
           return(false)
        }
    }
     return (true)
}

function check(){
 console.log(main())   
}
check()
