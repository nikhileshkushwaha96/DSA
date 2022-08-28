/// binery represent of num
function main(){
    let num =10
checkbinery(num)
}
function checkbinery(num){
let arr = new Array(8)
arr.fill(0)
let i=arr.length
    while(num>0){
       let p = num%2
       arr[i] = p
       i--
       num=Math.floor(num/2)

    }
    console.log(arr) 
}
main()