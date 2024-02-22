class Student {
    name: string;
    age: number;
    city: string;
    height: number;

    constructor(name: string, age: number, city: string, height: number) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.height = height;
    }

}

let marina = new Student("Marina", 19, "Tallinn", 156)
let john = new Student("John", 17, "Tallinn", 178);
let mary = new Student("Mary", 18, "Tartu", 165);
let alex = new Student("Alex", 18, "London", 188);

console.log(john.name);
console.log(mary.age);
console.log(alex.city);
console.log(marina.height);