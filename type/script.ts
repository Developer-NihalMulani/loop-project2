let ans1 = document.getElementById('ans1');

let num1:number = 139;
let clone_num1:number = num1;
let rev_num1:number = 0;

while(num1>0){
    let digit1:number = num1%10;
    rev_num1 = (rev_num1*10)+digit1;
    num1=Math.floor(num1/10)
}
ans1.innerHTML=rev_num1;


//question-2

let ans2 = document.getElementById('ans2');

let num2:number = 139;
let clone_num2:number = num2;
let rev_num2:number = 0;

while(num2>0){
    let digit2:number = num2%10;
    rev_num2 = (rev_num2*10)+digit2;
    num2=Math.floor(num2/10)
}
if(rev_num2==clone_num2){
    ans2.innerHTML=clone_num2 + " is a palindrone number";
}else{
    ans2.innerHTML=clone_num2 + " is not a palindrone number";

}




//question-3
let ans3 = document.getElementById('ans3');

let n:number = 19;
let a:number = 0;
let b:number = 1;
let e:string = ' ';


while(n>0){
    let c:number = a + b;
    e += " " + c;
    a=b;
    b=c;
    n--
}
ans3.innerHTML=e;




//question-4
let ans4 = document.getElementById('ans4');

let num4:number = 5;
let factorial:number =1;
let count:number =0;

while(num4>0){
    count = count+1;
    factorial=factorial*count;
    num4--
}
ans4!.innerHTML=factorial;


//question-5
let ans5 = document.getElementById('ans5');

let num5:number = 6;
let clone_num5:number = num5;
let count5:number = 0;
let factor:number = 0;
while(num5>0){
    count5++
    if(clone_num5%count5==0){
        factor= factor+1
    }
    num5--
}
if(factor==2){
    ans5.innerHTML=clone_num5 + ' is a prime number';
}else{
    ans5.innerHTML=clone_num5 + ' is not a prime number';

}


//question-6
let ans6 = document.getElementById('ans6');

let num6:number = 167;
let count6:number = 0;

while(num6>0){
    num6=Math.floor(num6/10);
    count6++
}
ans6.innerHTML='there are ' + count6 + ' number of digit in given number';



//question-7
let ans7 = document.getElementById('ans7');


let num7:number = 29;
let copynum7:number=num7;
let digit7:number=0;
let digitsum7:number=0;

while(num7>0){
    digit7=num7%10;
    digitsum7=digitsum7+digit7;
    num7=Math.floor(num7/10)
}
ans7.innerHTML="sum od digits is " + digitsum7;


//question-8
let ans8 = document.getElementById('ans8');



let arm:number = 113;
let copyarm:number = arm;
let count8:number=0;
let armsum:number=0;
let mainarmsum:number;
while(copyarm>0){
  copyarm=Math.floor(copyarm/10);
  count8++;
}
// console.log(count);
copyarm=arm;
while(copyarm>0){
  let armdigit:number=copyarm%10;
  copyarm=Math.floor(copyarm/10)
  armsum=Math.pow(armdigit, count8)
  mainarmsum=armsum+mainarmsum;
}
if(mainarmsum==arm){
  ans8.innerHTML='number is armstrong number';
  
}else{
    ans8.innerHTML='number is not armstrong number';

}


//question-9
let ans9 = document.getElementById('ans9');


let num9:number = 2;
let power9:number =3;
let result:number = 1;
while(power9>0){
    result*= num9;
    power9--
}
ans9.innerHTML=result;


//question 10
let ans10= document.getElementById('ans10');


let r:number;
let c:number;
let str:string="";

for(r= 1 ;r<=5; r++){
    for(c=1; c<=r; c++){
        str+= c;
    }
    str+='<br/>';
}
ans10.innerHTML=str + " ";


//question 11
// 12345
// 1234
// 123
// 12   
// 1 

let ans11= document.getElementById('ans11');

let r2:number;
let s2:number;
let c2:number;
let str2:string="";

for(r2= 5 ;r2>=1; r2--){
    
    for(c2=1; c2<=r2; c2++){
        str2+= c2;
    }
    str2+='<br/>';
}
ans11.innerHTML=str2 + " ";


//question 11
// 12345
//   1234
//     123
//       12   
//         1 



let ans12= document.getElementById('ans12');

let r3:number;
let s3:number;
let c3:number;
let q3:number;

let str3:string=" ";

for(r3= 1 ;r3<=5; r3++){
    for(q3=r3; q3>1; q3--){
        str3+= "_";
    }
    for(c3=r3; c3<=5; c3++){
        str3+=c3;
    }
    str3+='<br/>';
}
ans12.innerHTML=str3 + " ";



//question 13
//         1 
//       12 
//     123 
//   1234 
// 12345
 



let ans13= document.getElementById('ans13');

let r4:number;
let s4:number;
let c4:number;
let q4:number;

let str4:string=" ";

for(r4= 1 ;r4<=5; r4++){
    for(c4=r4; c4<5; c4++){
        str4+="_";
    }
    for(q4=r4; q4>=1; q4--){
        str4+=q4;
    }
    
    str4+='<br/>';
}
ans13.innerHTML=str4 + " ";