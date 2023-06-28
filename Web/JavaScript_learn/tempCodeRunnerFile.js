console.log();
function rhombus(n){
    
    let line2="";
    for(let k=0;k<n;k++)
        line2+=" *";
    for(let i=0;i<n;i++){
        let line="";
        for(j=0;j<i;j++)
        line+="  ";
        console.log(line+=line2)
    }
}
rhombus(5);