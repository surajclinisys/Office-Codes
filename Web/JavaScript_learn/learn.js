// function square(n){
//     let line="";
//     for(let i=0;i<n; i++){

//         line+='* ';
//     }
//     for(let i=0;i<n; i++)
//     console.log(line);
// }
// square(5);

// console.log();
// function hollowSquare(n){
//     let line="";
//     let line2="";
//     for(let k=0;k<n; k++){
//         line+="* ";
//         if(k==0 || k==n-1){
//             line2+="* ";
//         }else   
//         line2+="  ";
//     }
    
//     for(let j=0;j<n;j++){
//         if(j==0 || j==n-1){
//             console.log(line);}else
//             console.log(line2);
//         }}
//         hollowSquare(5);
        
// console.log()
// function numTri(n){
//     for(let i=1;i<=n;i++){
//         let line="";
//         for(let j=0;j<n;j++){
//             line="";
//             for(let k=n-i;k>0;k--){
//                 line+=" ";
//             }
//             for(let l=0;l<i;l++){
//                 line+=" "+i;
//             }
//         }
//         console.log(line);
//     }
// }
// numTri(5);

// console.log()
// function numTri(n){
//     for(let i=1;i<=n;i++){
//         let line="";
//         for(let j=1;j<=i;j++){
//             line+=" "+j;
//         }
//         console.log(line);
//     }
// }
// numTri(5);

// console.log()
// function numTri(n){
//     for(let i=n;i>0;i--){
//         let line="";
//         for(let j=1;j<=i;j++){
//             line+=" "+j;
//         }
//         console.log(line);
//     }
// }
// numTri(5);

// console.log()
// function numTri(n){
//     let m=1;
//     for(let i=1;i<=n;i++){
//         let line="";
//         for(let j=1;j<=i;j++){
//             line+=" "+m;
//             m++;
//         }
//         console.log(line);
//     }
// }
// numTri(5);

// console.log()
// function numTri(n){
//     let m=1;let fl=false;
//     for(let i=1;i<=n;i++){
//         let line="";
//         if(fl){
//             m=0;
//             fl=false;
//         }
//         else {
//             m=1;
//             fl=true;
//         }
//         for(let j=1;j<=i;j++){
//             line+=" "+m;
//             if(m==1)
//             m--;
//             else
//             m++;
//         }
//         console.log(line);
//     }
// }
// numTri(5);

// console.log()
// function numTri(n){
//     for(let i=1;i<=n;i++){
//         let line="";
//         for(let j=i;j<n;j++){
//             line+="  ";
//         }
//         for(let l=i;l>=1;l--){
//             line+=" "+l;
//         }
//         for(let k=2;k<=i;k++){
//             line+=" "+k;
//         }
//         console.log(line);
//     }
// }
// numTri(10);

console.log();
function rhombus(n){
    
    let line2="";
    for(let k=0;k<n;k++)
        line2+="* ";
    for(let i=0;i<n;i++){
        let line="";
        for(j=0;j<i;j++)
        line+=" ";
        console.log(line+=line2)
    }
}
rhombus(50);

 