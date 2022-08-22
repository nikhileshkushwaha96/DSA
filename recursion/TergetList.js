function main(){
    let arr = [1,3,5,5,5,7]
    let target =5
    let ind=0;
    let list =[]
   console.log(targetlist(arr,target,ind,list)) 
   console.log(list)
}

function targetlist(arr,target,ind,list){
if(ind == arr.length){
    return list;
}
if(target==arr[ind]){
    list.push(ind)
}
return targetlist(arr,target,ind+1,list)
}
main()