
/*
//Single Object

let student = {
    name: " Ovjijit paul",
    age :20,
    city : "Maguta",
}

console.log ( student.age)
*/


/*
//Constructor Function


function Student ( name , age , city){

    this.name = name;
    this.age= age;
    this.city= city;
}

let student1= new Student ( 'ovijit paul', 26, "Magura");
let student2 = new Student ( "sajib", 24, "Dhaka" );
let student3 = new Student ( "Joni", 24, "Dinaspur" );
let student4= new Student ( 'Ripon', 26, "jhenaidah");
let student5 = new Student ( "sojol", 24, "Pabna" );
let student6 = new Student ( "joy", 24, "Norshindi" );
let student7= new Student ( 'Ripon', 26, "jhenaidah");
let student8= new Student ( "Jichan", 24, "Pabna" );
let student9 = new Student ( "joli", 29, "Norshindi" );
let student10 = new Student ( "kobita", 29, "Norshindi" );

console.log ( student4.name);
console.log ( student4.age);
console.log ( student4.city);
console.log ( student5.name)
console.log (student9.name)

*/

//Constructor Function
function Product ( name, price, brand, colar,size, stock){

    this.name=name;
    this.price=price;
    this.brand=brand;
    this.colar=colar;
    this.size=size;
    this.stock=stock;

 this.dispale= function (){
    console.log (this.name);
    console.log (this.price);
    console.log (this.brand);
    console.log (this.colar);
    console.log (this.size);
    console.log (this.stock);

 }
}

let product1 = new Product ('T-shirt', 500, "levis", "White", ["s,m,l,xl"],50);
let product2 = new Product ('T-shirt', 550, "levis", "Blue", ["s,m,l,xl"],30);
let product3 = new Product ('T-shirt', 450, "levis", "Black",["s,m,l,xl"],40);
let product4=new Product ("Pant", 500, "levis", "White",["s,m,l,xl,"] , 20);
let product5=new Product ("Pant", 600, "levis", "Blue",["s,m,l,xl,"] , 20);
let product6=new Product ("Pant", 650, "levis", "Black",["s,m,l,xl,"] , 20);

product1.dispale();
product2.dispale();
product3.dispale();
product4.dispale();
product5.dispale();
product6.dispale();