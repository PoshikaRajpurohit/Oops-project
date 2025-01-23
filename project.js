// OOPS PROJECT


//  1  SCHOOL (STUDENT AND FACULTY DETAILS)

//  class School{
//     Student(name, email, contact){
//         this.name = name;
//         this.email = email;
//         this.contact = contact;
        
//         console.log("Student Details : ");
//         console.log(`Name= ${this.name}`);
//         console.log(`Email= ${this.email}`);
//         console.log(`Contact= ${this.contact}`);
//     }
//     Faculty(name, email, contact){
//         this.name = name;
//         this.email = email;
//         this.contact = contact;
    
//         console.log("Faculty Details : ");
//         console.log(`Name= ${this.name}`);
//         console.log(`Email= ${this.email}`);
//         console.log(`Contact= ${this.contact}`);
//     }
// }
// let school = new School();
// school.Student("Poshika Rajpurohit","poshiraj1308@gmail.com","8469685553");
// school.Faculty("Girish Gondaliya Sir", "girish@gmail.com", "9510821039");


// Expected-output


// Students-details=
// Namw=Poshika Rajpurohit
// Email=poshiraj1308@gmail.com
// Contact=8469685553


// Faculty-details=
// Namw=Girish Gondaliya Sir
// Email=girish@gmail.com
// Contact=9510821039



// 2  EMPLOYEE AND PERSON

//   class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     persondetails(){
//         console.log("Employee-details=");
//         console.log(`Name=${this.name}`);
//         console.log(`Age=${this.age}`);
//     }
//   }
//   class employee extends person{
//     constructor(name,age,position,salary,contact){
//         super(name,age)
//         this.position=position;
//         this.salary=salary;
//         this.contact=contact;
//     }
//     employeedetails(){
//         this.persondetails()
//         console.log(`Position=${this.position}`);
//         console.log(`Salary=${this.salary}`);
//         console.log(`Contact=${this.contact}`);
//     }
//   }
//   let employeedata=new employee("Poshika","22","Web-developer","30,000","8469685553");
//   employeedata.employeedetails()




//   EXPECTED-OUTPUT
 // Employee-details=
// Name=Poshika
// Age=22
// Position=Web-developer
// Salary=30,000
// Contact=8469685553




// 3  Simple Message

// class employee{
//     constructor(){
//         console.log("You're a key part of our team");
//      }
// }
//      let message = new employee();



// EXPECTED-OUTPUT
// You're a key part of our team




// 4  Area of circle and rectangle



// class shape{
//     Circle(radius) {
//     let area = 3.14 * radius * radius;
//     console.log(`Area of Circle =${area}`);
//     return area;
// }
//     rectangle(width,height){
//     let formula=width*height;
//     console.log(`Area of Rectangle=${formula}`);
//     return formula;
// }
// }
//      let areas=new shape();
//      areas.Circle("5");
//      areas.rectangle(20,10);



// EXPECTED-OUTPUT=
    // AREA OF Circle= 78.5
    // AREA OF rectangle=200
