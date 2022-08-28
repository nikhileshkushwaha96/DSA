function main(){
let unpro ="abc"
let pro =""
permut(pro,unpro)
}


function permut(pro,unpro){
if(unpro.length===0){
    console.log(pro)
    return
}
let ch = unpro[0]
for(let i=0;i<=pro.length;i++){
    let str1 = pro.substring(0,i)
    let str2 = pro.substring(i,pro.length)
    let p = str1+ch+str2
    permut(p,unpro.substring(1))
}
}
main()

