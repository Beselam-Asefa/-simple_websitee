'use strict';
const hello = "my name is  is beselam"
console.log(hello);

const test = (text, num) =>{
    console.log('the tezt is', text,num );
}

const  add = (x,y) => x+y; 
const oneparam = x => x*2 ;

const rest =(x, ...y)=>{
    console.log('rest param',x,y);
}
const arr = [1,3,4,5]
const spread =['one','two',...arr];
const testt ='lema';
const spreadd= [...testt]



class Rectangle {
    constructor(height , width){
        this.height=height;
        this.width=width;
    }
   getArea(){
       return this.calculateArea();
   }

    calculateArea(){
        return this.height*this.width;
    }
   
}
const myreact = new Rectangle(2,3);
console.log('class instanat',myreact);
console.log('the area is ', myreact.getArea());
test(2,'LEMA ia the father of nebi');
console.log(add(2,4));
console.log(rest(2,'one','two','thee',4,5));
console.log('speard is ' ,spread)
console.log(spreadd)