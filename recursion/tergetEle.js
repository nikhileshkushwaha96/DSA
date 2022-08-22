function main(){
//     let arr = [1,2,5,8,0,4]
//     let target =0
//    console.log(checkSorted(arr,target,0)) 
let arr = [1,2,3,4,5]
console.log(checkSorted(arr,0))

}

function checkSorted(arr,ind){
    // if(ind == arr.length){
    //     return -1;

    // }
    // if(arr[ind]==target){
    //     return ind
    // }
    // else{
    //     return checkSorted(arr,target,ind+1)
    // }

    if(ind==arr.length-1){
        return true;
    }
    return arr[ind]<arr[ind+1] && checkSorted(arr,ind+1)
    


}

main()