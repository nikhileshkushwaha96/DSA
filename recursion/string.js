
// skip "a"s from string and return string
// eg= "baccad"==>"bccd"

// function main(){
//     let str = "baccadagedaa"
//     let st1 = ""
//     let p =0

//    skip(str,st1,p)
//    //console.log(st1)
// }

// function skip(str,st1,p){
//     if(p == str.length){
//        console.log(st1)
//         return st1
//     }
//     if(str[p]=="a"){
//        skip(str,st1,p+1)
//     }
//     else{
//         st1 = st1+ str[p]
//        skip(str,st1,p+1)
//     }
    
// }

// main()

/////////////////////////////////////////
//Another Approach

// function main(){
//     let str = "baccadgfa"
   
//     console.log(skip(str)) 
  
// }

// function skip(str){
//     if(str.length === 0){
       
//         return ""
//     }
//     let ch = str[0]
//     if(ch == "a"){
//      return  skip(str.substring(1))
//     }
//     else{
       
//      return ch +  skip(str.substring(1))
//     }
    
// }

// main()


////////////////////////////
///skip "apple" from string

function main(){
    let str = "baccaapledgfa"
   
    console.log(skip(str)) 
  
}

function skip(str){
    if(str.length === 0){
       
        return ""
    }
   
    if((str.startsWith("app"))&& !(str.startsWith("apple"))){
     return  skip(str.substring(3))
    }
    else{
       
     return str[0] +  skip(str.substring(1))
    }
    
}

main()