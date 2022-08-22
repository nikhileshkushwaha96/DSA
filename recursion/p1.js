
 function  main(){
        let n=5
        fun(n)

    }

  function fun(n){
        if(n==0){
            return
        }
       
        fun(--n)
        //fun(n-1)
        //fun(n--)
        console.log(n)

    }

    main()



