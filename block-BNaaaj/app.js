var area=require('./area');

var circle_area=area.circle(10);
console.log(circle_area);

buff1=Buffer.alloc(12);
buff2=Buffer.allocUnsafe(12);

buff1.write("hello everyone");
 
console.log(buff1.toString());

