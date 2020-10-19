class Student{
    constructor(id,name,email,mobile_number){
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobile_number = mobile_number;
    }
    mobile(){
        return Number (this.mobile_number);
    }
}
let sara = new Student ('123443','sara','sara@orange.com','962777777777');
console.log(sara.mobile());