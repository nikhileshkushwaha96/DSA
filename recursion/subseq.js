/// subsequence of str 


function main(){
    let unpro ="abc"
    let pro =""
    sebseq(pro,unpro)
}

function sebseq(pro,unpro){
if(unpro.length ===0){
    console.log(pro)
    return
}
let ch = unpro[0]
sebseq(pro,unpro.substring(1))
sebseq(pro+ch,unpro.substring(1))


}
main()