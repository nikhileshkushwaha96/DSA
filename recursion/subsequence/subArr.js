function main(){
    let unpro ="abc"
    let pro =""

    subarr(pro,unpro)
    console.log(subarr(pro,unpro))
}

function subarr(pro,unpro){
    if(unpro.length===0){
        let arr =[]
        arr.push(pro)
        return arr
    }
    let ch = unpro[0]
  
  let  arr1 =  subarr(pro+ch,unpro.substring(1))
  let  arr2 =  subarr(pro,unpro.substring(1))

  for(let i=0;i<arr2.length;i++){
    arr1.push(arr2[i])
  }
  
  return arr1
}
main() 