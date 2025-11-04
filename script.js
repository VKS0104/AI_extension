// let num=43;
// let c=0;
// for(let i=1;i*i<=num;i++)
// {
//     if(num%i==0)
//     {
//         if(num/i==i)
//         {
//             c++;
//         }
//         else
//         {
//             c+=2;
//         }
//     }
// }

// if(c==2)
//     console.log("Prime");
// else
//     console.log("Not Prime");

// function isPrime(param) {

//     let c = 0;
//     for (let i = 1; i * i <= param; i++) {
//         if (param % i == 0) {
//             if (param / i == i) {
//                 c++;
//             }
//             else {
//                 c += 2;
//             }
//         }
//     }

//     if (c == 2) {
//         console.log("Prime");
//         return "prime"
//     }

//     else {
//         console.log("Not Prime");
//         return "not prime"
//     }
// }

// let y = isPrime(23);
// console.log(y);

// let arr=[3784, 34876, 356, 7385, 326, 714, 15, 85, 9357];
// let max1=0,max2=0;
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]>max1)
//     {
//         max2=max1;
//         max1=arr[i];
//     }
//     else if(arr[i]>max2)
//     {
//         max2=arr[i];
//     }
// }

// console.log("Second maximum number is:",max2);