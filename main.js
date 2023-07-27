import { User } from "./gateway-pattern/user.js";

// 1. Gateway Pattern 
const user = new User('John', 30, 'chlghdud17@gmail.com');
user.insert();
user.update();
user.delete();
user.select();
console.log(user.toString());

