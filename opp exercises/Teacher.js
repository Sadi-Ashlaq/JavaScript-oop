class Teacher extends Student{
    constructor(id,name,email,mobile_number,salary,subjects){
        super(id,name,email,mobile_number);
        this.salary = salary;
        this.subjects = subjects;
    }
   Salary(){
       return Number(this.salary);
   }
   Subjects(){
       return Array.from(this.subjects.split('.'));
   }
}

let sadi = new Teacher ('95432','sadi','sadi@orange.com',962777778888,800,"['English', 'Arabic', 'Math', 'science']");
console.log(sadi.Salary());
console.log(sadi.Subjects());