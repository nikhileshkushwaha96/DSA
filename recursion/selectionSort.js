function main(){
    let arr =[1,5,3,0,2,7]
    let r = arr.length-1
    let c=0;
    let max =0

    Selection(arr,r,c,max)
    console.log(arr)
}

function Selection(arr,r,c,max){
    if(r===0){
        return
    }
    if(c<r){
        if(arr[c]>arr[max]){
            Selection(arr,r,c+1,c)
        }
        else{
            Selection(arr,r,c+1,max)
        }
    }
    else{
        swap(arr,r-1,max)
        Selection(arr,r-1,0,0)
    }
}

function swap(arr,i,j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}

main()