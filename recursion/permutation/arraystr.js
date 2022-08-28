function main(){
let unpro ="abc"
let pro =""
console.log(permut(pro,unpro))
}

function permut(pro,unpro){

    if(unpro.length===0){
        let arr = []
        arr.push(pro)
        return arr
    }
    let ch = unpro[0]

    let ans = []

    for(let i=0;i<=pro.length;i++){
        let str1 = pro.substring(0,i)
        let str2 = pro.substring(i,pro.length)
      let arr1 = permut(str1+ch+str2,unpro.substring(1))
      for(let j=0;j<arr1.length;j++){
        ans.push(arr1[j])
      }
    }

    return ans

}
main()