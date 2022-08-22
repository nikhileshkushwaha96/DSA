function main(){
    let arr = [1, 2 , 5,8]
   console.log(checkSorted(arr,0)) 

}

function checkSorted(arr,ind){
    if(ind == arr.length-1){
        return true;

    }
    return arr[ind]<arr[ind+1] && checkSorted(arr,ind+1)
}

main()