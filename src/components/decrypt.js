let coded__str = {
    n: 'a', w: 'j', f: 's',
    o: 'b', x: 'k', g: 't',
    p: 'c', y: 'l', h: 'u',
    q: 'd', z: 'm', i: 'v',
    r: 'e', a: 'n', j: 'w',
    s: 'f', b: 'o', k: 'x',
    t: 'g', c: 'p', l: 'y',
    u: 'h', d: 'q', m: 'z',
    v: 'i', e: 'r',
    3 : 1, 4: 2, 5: 3, 6: 4, 
    7: 5, 8: 6, 9: 7, 0: 8, 
    1: 9, 2: 0,
    "+": "-", "*" : "+",
    "/": "*", "-" : "/", 

    "@": "!", "#" : "@", "$" : "#", "%" : "$", 
    "^" : "%", "&" : "^", "(" : "&", ")" :"(", 
    "_" : ")", "=" : "_", "{" : "=", "}" : "{",
    "|" : "}", ":" : "|", "\"" : ":", "<" : "\"",
    ">" : "<", 
    "?" : ">", 
    "[" : "?", //change
    "]" : "[",
     "." : "\\",
     "\\" : ".",
      "," : ";",
    "~" : ",", "`" : "~", "!" : "`",
}

const decrypt = (str) => {
    str = str.toLowerCase();
    let result = '';
    for(let i = 0 ; i < str.length; i++){
        if(coded__str[str[i]] || coded__str[str[i]] === 0)
       result += coded__str[str[i]];
       else
       result += str[i];
  }

  return result;
}
export default decrypt;