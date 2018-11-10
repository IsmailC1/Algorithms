// this prog. will count the unique values in the array.
    function countUniqueValue(arr){
        if(arr.length === 0) return 0;
        var i = 0;
        for(var j=0; j<arr.length; j++){
            if( arr[i] !== arr[j] ) {
                i++;
                arr[i] = arr[j];
            }
        }
        return i + 1;
    }
    
    countUniqueValue([1,1,1,2,2,3,4,5,7,8,9,9,2,6,4])