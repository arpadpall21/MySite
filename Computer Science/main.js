    function printLongest(str1, str2){
        if (str1.length > str2.length){
            for(let i = 0; i < str1.length; i++){
                console.log( str1[i] );
            }
        } else {
            for(let i = 0; i < str2.length; i++){
                console.log( str2[i] );
            }
        }
    }
    
