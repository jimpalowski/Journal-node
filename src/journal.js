export function vowelCount(input){
  var output = [];
  var vowelCount = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  for(var i = 0; i < input.length; i++){
  var string = i.toString();
    if(string.includes(vowels)){
      vowelCount +=1;
      output.push(vowelCount);

    }
    else{
      output.push(string);
    }

  }
  return output;

}


export function consonantsCount(input2){
  var output2 = [];
  var consonantCount = 0;
  var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z', 'w'];
  for(var j = 0; j < input2.length; j++){
    var string2 = j.toString();
    if (string2.includes(consonants)) {
      consonantCount +=1;
      output2.push(consonantCount);

    }
    else{
      output2.push(consonantCount);
    }

  }
  return output2;

}
