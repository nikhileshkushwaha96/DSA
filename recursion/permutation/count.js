function main(){
    let unpro ="abc"
    let pro =""
   let ans = permut(pro,unpro)
   console.log(ans)

    }
    
    
    function permut(pro,unpro){
    if(unpro.length===0){
        
        return 1
    }

    let count =0
    let ch = unpro[0]
    for(let i=0;i<=pro.length;i++){
        let str1 = pro.substring(0,i)
        let str2 = pro.substring(i,pro.length)
        let p = str1+ch+str2
     count = count + permut(p,unpro.substring(1))
    }
    return count
    }
    main()
    
    