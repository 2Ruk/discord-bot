// gateway pattern user
export class User{
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get age(){
        return this._age;
    }

    set age(age){
        this._age = age;
    }

    get email(){
        return this._email;
    }

    set email(email){
        this._email = email;
    }

    insert(){   
        console.log(`Inserting user ${this.name} into database`);
    }

    update(){
        console.log(`Updating user ${this.name} in database`);
    }

    delete(){
        console.log(`Deleting user ${this.name} from database`);
    }

    select(){
        console.log(`Selecting user ${this.name} from database`);
    }

    toString(){
        return `User: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }
}