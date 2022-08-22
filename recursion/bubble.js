function main(){
let arr =[1,4,5,0,2]
let r=arr.length-1;
let c=0
bubble(arr,r,c)
console.log(arr)
}

function bubble(arr,r,c){
    if(r===0){
        return
    }
    if(c<r){

        if(arr[c]>arr[c+1]){
            swap(arr,c,c+1)
    
        }

        bubble(arr,r,c+1)

    }
    
    else{
        bubble(arr,r-1,0)

    }
}


function swap(arr,i,j){
let temp = arr[i]
arr[i]=arr[j]
arr[j]=temp
}

main()