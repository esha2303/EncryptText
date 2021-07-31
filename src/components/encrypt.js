let decoded = {
    a: 'n', b: 'o', c: 'p',
    d: 'q', e: 'r', f: 's',
    g: 't', h: 'u', i: 'v',
    j: 'w', k: 'x', l: 'y',
    m: 'z', n: 'a', o: 'b',
    p: 'c', q: 'd', r: 'e',
    s: 'f', t: 'g', u: 'h',
    v: 'i', w: 'j', x: 'k',
    y: 'l', z: 'm', 
    1 : 3, 2: 4, 3: 5, 4: 6, 
    5: 7, 6: 8, 7: 9, 8: 0, 
    9: 1, 0: 2,
    "-": "+", "+" : "*",
    "*": "/", "/" : "-",

    "!": "@", "@" : "#", "#" : "$", "$" : "%",
     "%" : "^", "^" : "&", "&" : "(", "(" :")", 
    ")" : "_", "_" : "=", "=" : "{", "{" : "}",
    "}" : "|", "|" : ":", ":" : "\"", "\"" : "<",
    "<" : ">", 
    ">" : "?", 
     "?" : "[",
     "[" : "]", 
     "]" : "A",
     "\\" : ".",
     "." : "\\",
     ";" : ",",
    "," : "~", "~" : "`", "`" : "!",
    
  }

const encrypt = (str) => {
    str = str.toLowerCase();
    let decipher = '';
    for(let i = 0 ; i < str.length; i++){
        if(decoded[str[i]] || decoded[str[i]] === 0)
        decipher += decoded[str[i]];
        else
        decipher += str[i];
    }

    return decipher;
    //  return str.toUpperCase().replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0)-65 + key ) % 26 + 65));
  }

  export default encrypt;