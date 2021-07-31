// /**
//  * Algo references :
//  * https://www.freecodecamp.org/news/understanding-encryption-algorithms/
//  * https://medium.com/swlh/how-to-send-secret-messages-1c106250b884
//  * 
//  * https://www.geeksforgeeks.org/rsa-algorithm-cryptography/
//  * 
//  * Learn more about crypto attacks :
//  * https://cryptopals.com/
//  * 
//  * https://www.codeproject.com/Articles/4959/Encryption-RSA-implemented-through-Java-Script-to
//  * 
//  */

// const Crypto = () => {
    
    
      

      
//     return {encrypt, decrypt};
// }

// export default Crypto;

// const Crypto = () => {

//     function gcd(a , b){
//         let r;
//         while (b>0)
//         {
//             r=a%b;
//             a=b;
//             b=r;
//         }
//         return a;
//     }

//     function rel_prime(phi)
//     {
//         let rel=5; 
//         while (gcd(phi,rel)!=1)
//             rel++;
//         return rel;
//     }

//     function power(a, b){
//         var temp=1, i;
//         for(i=1;i<=b;i++)
//             temp*=a;
//         return temp;
        
//     }

//         //two random prime no
//         var p = 3;
//         var q = 7;

//         //first part of public key
//         var n__main = p*q;

//         //Finding other part of public key.
//         var phi__main = (p-1)*(q-1);
//         var e__main = rel_prime(phi__main);

//         // //Private key
//         var d__main = calculate_d(phi__main, e__main); 


//     // const alpha = {
//     //         a : 2,
//     //         b : 3,
//     //         c : 4,
//     //         d : 5,
//     //         e : 6,
//     //         f : 7,
//     //         g : 8,
//     //         h : 9,
//     //         i : 10,
//     //         j : 11,
//     //         k : 12,
//     //         l : 13,
//     //         m : 14,
//     //         n : 15,
//     //         o : 16,
//     //         p : 17,
//     //         q : 18,
//     //         r : 19,
//     //         s : 20,
//     //         t : 21,
//     //         u : 22,
//     //         v : 23,
//     //         w : 24,
//     //         x : 25,
//     //         y : 26,
//     //         z : 27,         
//     // }

//     function generateAlphabets(data, key){
//         let temp;
//         for(let i=0, len = data.length; i < len; i++){
//             if(temp.hasOwnProperty(data[i])) continue;

//             const alphaVal = data[i];
//             let variable, val;
//             if(alpha.alphaVal){
//                 variable = alpha.alphaVal;
//                 val = power(variable, key.e);   
//                 val = val%key.n;  
//             }
//             else
//                 val = data[i];
            
//             console.log('val', val);            
//             temp = [...temp, { "id" : data[i], "value" : val}]
//         }

//         return temp;
//     }

//     function convertBackToAlphabets(data){
//         let result;
//         // for(let i=0, len = data.length; i<len; i++){
//         //     result.push(alphaBets[data % 26 + 2]);
//         // }
//     }

//     function enc(N, e, M){
//         var r,i=0,prod=1,rem_mod=0;
//         while (e>0)
//         {
//             r=e % 2;
//             if (i++==0)
//                 rem_mod=M % N;
//             else
//                 rem_mod=power(rem_mod,2) % N;
//             if (r==1)
//             {
//                 prod*=rem_mod;
//                 prod=prod % N;
//             }
//             e=parseInt(e/2);
//         }
//         return prod;
//     }

//     function calculate_d(phi,e)
//     {
//         var x,y,x1,x2,y1,y2,temp,r,orig_phi;
//         orig_phi=phi;
//         x2=1;x1=0;y2=0;y1=1;
//         while (e>0)
//         {
//             temp=parseInt(phi/e);
//             r=phi-temp*e;
//             x=x2-temp*x1;
//             y=y2-temp*y1;
//             phi=e;e=r;
//             x2=x1;x1=x;
//             y2=y1;y1=y;
//             if (phi==1)
//             {
//                 y2+=orig_phi;
//                 break;
//             }
//         }
//         return y2;
//     }

//     function encrypt(data){
//         let result; 
//         for(var i  =0, len = data.length; i < len; i++){
//             result.push(enc(n__main, e__main, data[i])); 
//         }
//         // const mapOfAlphabets = generateAlphabets(data, key);
        
//         // let encText = [];
//         // for(let i =0, len = data.length; i<len; i++){
//         //     encText.push(mapOfAlphabets.data[i])
//         // }

//         //const result = convertBackToAlphabets(encText);
//         return result;
//         // return encText;
//     }

//     function dec(c, d, N)
//     {
//         var r,i=0,prod=1,rem_mod=0;
//         while (d>0)
//         {
//             r=d % 2;
//             if (i++==0)
//                 rem_mod=c % N;
//             else
//                 rem_mod=power(rem_mod,2) % N;
//             if (r==1)
//             {
//                 prod*=rem_mod;
//                 prod=prod % N;
//             }
//             d=parseInt(d/2);
//         }
//         return prod;
//     }

//     function decrypt(data){
//         let result ;
//         for(var i  =0, len = data.length; i < len; i++){
//             result.push(dec(data[i], d__main, n__main));
//         }

//         return result;        
//     }

//     return {encrypt, decrypt};
// }

// export default Crypto;


// /***
//  * / C program for RSA asymmetric cryptographic
// // algorithm. For demonstration values are
// // relatively small compared to practical
// // application
// #include<stdio.h>
// #include<math.h>
  
// // Returns gcd of a and b
// int gcd(int a, int h)
// {
//     int temp;
//     while (1)
//     {
//         temp = a%h;
//         if (temp == 0)
//           return h;
//         a = h;
//         h = temp;
//     }
// }
  
// // Code to demonstrate RSA algorithm
// int main()
// {
//     // Two random prime numbers
//     double p = 3;
//     double q = 7;
  
//     // First part of public key:
//     double n = p*q;
  
//     // Finding other part of public key.
//     // e stands for encrypt
//     double e = 2;
//     double phi = (p-1)*(q-1);
//     while (e < phi)
//     {
//         // e must be co-prime to phi and
//         // smaller than phi.
//         if (gcd(e, phi)==1)
//             break;
//         else
//             e++;
//     }
  
//     // Private key (d stands for decrypt)
//     // choosing d such that it satisfies
//     // d*e = 1 + k * totient
//     int k = 2;  // A constant value
//     double d = (1 + (k*phi))/e;
  
//     // Message to be encrypted
//     double msg = 20;
  
//     printf("Message data = %lf", msg);
  
//     // Encryption c = (msg ^ e) % n
//     double c = pow(msg, e);
//     c = fmod(c, n);
//     printf("\nEncrypted data = %lf", c);
  
//     // Decryption m = (c ^ d) % n
//     double m = pow(c, d);
//     m = fmod(m, n);
//     printf("\nOriginal Message Sent = %lf", m);
  
//     return 0;
// }

// function encrypt(N, e, M)
// {
//    var r,i=0,prod=1,rem_mod=0;
//    while (e>0)
//    {
//       r=e % 2;
//       if (i++==0)
//          rem_mod=M % N;
//       else
//          rem_mod=power(rem_mod,2) % N;
//       if (r==1)
//       {
//          prod*=rem_mod;
//          prod=prod % N;
//       }
//       e=parseInt(e/2);
//    }
//    return prod;
// }

// function calculate_d(phi,e)
// {
//    var x,y,x1,x2,y1,y2,temp,r,orig_phi;
//    orig_phi=phi;
//    x2=1;x1=0;y2=0;y1=1;
//    while (e>0)
//    {
//       temp=parseInt(phi/e);
//       r=phi-temp*e;
//       x=x2-temp*x1;
//       y=y2-temp*y1;
//       phi=e;e=r;
//       x2=x1;x1=x;
//       y2=y1;y1=y;
//       if (phi==1)
//       {
//          y2+=orig_phi;
//          break;
//       }
//    }
//    return y2;
// }

// function decrypt(c, d, N)
// {
//    var r,i=0,prod=1,rem_mod=0;
//    while (d>0)
//    {
//       r=d % 2;
//       if (i++==0)
//          rem_mod=c % N;
//       else
//          rem_mod=power(rem_mod,2) % N;
//       if (r==1)
//       {
//          prod*=rem_mod;
//          prod=prod % N;
//       }
//       d=parseInt(d/2);
//    }
//    return prod;
// }


// var p=parseInt(document.Input.p.value);
//    var q=parseInt(document.Input.q.value);
//    var M=parseInt(document.Input.M.value);
//    var N=p * q;
//    var phi=(p-1)*(q-1);
//    var e=rel_prime(phi);
//    var c=encrypt(N,e,M);
//    var d=calculate_d(phi,e);
//    subWindow.document.Output.N.value=N;
//    subWindow.document.Output.phi.value=phi;
//    subWindow.document.Output.e.value=e;
//    subWindow.document.Output.c.value=c;
//    subWindow.document.Output.d.value=d;
//    subWindow.document.Output.M.value=decrypt(c,d,N);



//    Suppose that B wants to send a message to A. A and B have exchanged their public keys. Let us try to understand how this works:

// Person A selects two prime numbers. Say p = 53 and q = 61.
// Person A calculates p * q = 3233. This is the public key which he sends to B.
// Person A calculates the value of e such that GCD (( p – 1 ) * ( q – 1 ), e) = 1. This is also send to B.
// Suppose person B wants to send message M = 999 to A.
// Person B encrypts the message, c = Me (mod N) = 9997 (mod 3233) = 3026.
// Person B sends c to person A.
// Person A decodes c = 3026. Firstly, he finds d such that e * d = 1 (mod ( ( p – 1 ) * ( q - 1) ).
// This equation is solved using Extended Euclidean Algorithm. Hence d = 1783.
// Secondly, person A decodes the encrypted message c using: cd (mod N) = 30261783 (mod 3233) = 999.


// Points of Interest
// The factors of the public key N, that is, p and q should be large enough so that its not easy to factorize N.
// In general, the order of the primes should be 160 (512 bits) digits to 640 (2048 bits) digits.
// No algorithm is available that could factorize a number of the mentioned order in reasonable amount of time.
// So the RSA algorithm is defended by the non-availability of such algorithms.


// One has to use brute-force to factorize N.
// The algorithms to factorize N have a running time exponential with respect to the length of N.
// Still the existence of a faster algorithm, to factorize N, is very remote.


// S.S.L. (Secure Sockets Layer)
// Firewalls
// ATM machines
// Digital Signatures
// Certificates
//  */