function main(){
    let arr = [1,4,5,2,7]
    let r = 4
    let c=0
    bubble(r,c)
}

let bubble = (r,c)=>{
    if(r===0){
        return 
    }


    if(c<r){
   
        

       
       bubble(r,c+1)
       console.log("*")

    }
    else{
        
      bubble(r-1,0)
      console.log("\n")
    }
}
main()