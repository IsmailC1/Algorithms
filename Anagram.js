//function which determine if the second string is an anagram of the first.

function validAnagram(first,second){
    if(first.length !== second.length){
        return  false;
    }
    const lookup ={};
    for(let  i = 0; i<first.length; i++){
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup);
    
    for(let i=0; i < second.length; i++) {
        let letter = second[i];
        //can't find letter or letter is zero than it's not an anagram 
        if(!lookup[letter]) {
            return false;
            
        }else {
            lookup[lookup] -= 1;
         }
    }
    return true;
}

validAnagram('sanjam','mansja')