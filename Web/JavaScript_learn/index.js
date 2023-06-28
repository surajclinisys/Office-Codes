function fizzBuzz(input){
    if(typeof(input)!=='number')
    return 'Not a Number';
    if(input%15==0)
        return 'FizzBuzz';
    if(input%5==0)
        return 'Buzz'
    if(input%3==0)
        return 'Fizz'
    return input;
}
// console.log(fizzBuzz(7));

function checkSpeed(speed){
    let aptSpeed=Math.floor(speed);
    let points=0;
    if(aptSpeed<75) return 'Ok';
    for(let i=75;i<=aptSpeed;i+=5){
        points++;
        if(points==12)return 'License Cancelled';
    }
    return 'Points '+points;
}
// console.log(checkSpeed(94.9));
let arr=[5,0,undefined,'s',false,'',true];
let count=0;
function countTruthy(arr){
    for(let elmnt of arr){
        if(false||elmnt)count++;
    }
    return count;
}
// console.log(countTruthy(arr));
const obj={
    title:'S',
    rating:5.8,
    fo:'dot',
    gt:90
};
function showProperties(ob){
    for(let key in ob)
        if(typeof(ob[key])==='string')
            console.log(ob[key]);
    
}
// showProperties(obj);
function printStar(n){
    for(let i=0;i<n;i++){
        let star='';
        let space='';
        for(let k=i;k>0;k--)
            space+=' ';
        for(let j=n-i;j>0;j--)
            star+='* ';
        console.log(space+star);
    }
    for(let i=1;i<n;i++){
        let star='';
        let space='';
        for(let k=n-i-1;k>0;k--)
            space+=' ';
        for(let j=0;j<i+1;j++)
            star+='* ';
        console.log(space+star);
    }
}
// printStar(4);
function printPrime(limit){
    if(limit===1)
    console.log(1);
    if(limit==2){
        console.log(1);
        console.log(2);
    }
    
    for(let number=3;number<=limit;number+=2){
        let fl=true;
        if(fl){
            console.log(1);
            console.log(2);
            fl=false;
        }
        isPrime=true;

        for(let factor=2;factor<number&&number!==2;factor++){
            if(number%factor==0){
                isPrime=false;
                break;
            }
        }
        if(isPrime)console.log(number);
    }
}
// printPrime(3);
const house={
area:78,
location:{
    city:'kolkata',
    pin:110
},
getPin:function(){
    return 150;
}
};
// console.log(house.getPin())

//Factory function
function factoryFunc(name){
    return{
        name,
        getName() {
            console.log(this.name);
        }
    };
}
// const temp=factoryFunc('Suraj');
// temp.getName();
// const temp1=factoryFunc('SurajD');
// temp1.getName();

//Constructer Functions
function MakeCircle(r){ //Used Pascal Notation
    this.radius=r;
    this.draw=function(){
        console.log(this.radius);
    }
}
// console.log(factoryFunc.constructor);
let obj1 = new MakeCircle('Suraj');
let obj2 = factoryFunc('Rahul');
let obj3=Object.assign(obj1);
// console.log(obj2) ;

// const circleObj = new MakeCircle(79);
// circleObj.draw();
// ob1=factoryFunc('s');
// ob2=new MakeCircle(7);
// console.log(ob1.constructor);
// console.log(ob2.constructor);
// console.log(obj1.constructor);
// console.log(obj2.constructor);
// console.log(obj3.constructor);

const ob1=factoryFunc('su');
let ob2 = {}; 

// for(let key in ob1){
    // console.log(ob1[key]+' '+ob2[key]);
    // ob2[key]=ob1[key];
    // console.log(ob1[key]+' '+ob2[key]);
// }

// ob2 = Object.assign({color:'red'},ob1);
// ob3 = { ...MakeCircle('d')};
// ob2.getName();
// console.log(ob3);

const now =new Date();
// console.log(now.toISOString())



function SetAddress(s,c,z){
    this.street=s,
    this.city=c,
    this.zip=z
}
// let address = new SetAddress('sl','kol','11');
// console.log(address)

function BlogPost(t,b,a,v,au,bo,i){
    this.title=t;
    this.body=b;
    this.author=a;
    this.views=v;
    this.comment={
        author:au,
        body:bo
    };
    this.isLive=i;
}

// const blog=new BlogPost('f','ff','fff',2,'s','bt',true)
// console.log(blog)

// let brr=[9,5,4,5];
// brr.forEach(elm => {console.log(elm)});

function funTo(strt,end){
    let arr=[];
    while(end>=strt)
        arr.push(strt++);
    return arr;
}
// console.log(funTo(1,900));

//Function Declaration
function run(){
    console.log('run');
}

// Function Expression
let move=function run(){
    console.log('run');
}

// Anonymus Function Expression
let move2=function(){
    console.log('run');
}

function errTest(a){
    throw new Error('s');
}
try{
    console.log(errTest(7));
}catch(e){
// console.log(e);
}
