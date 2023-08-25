"use strict";
/*
class ClassName {
  // code
}

class Person {
  // code
  constructor(firstName, lastName, age, country, city, score, skill) {
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getBirthYear() {
    const birthday = 2023 - this.age;
    return birthday;
  }

  get getSkills() {
    return this.skills;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    let dateMonthYear = date + "." + month + "." + year + "." + "godina";
    let time = hours + ":" + minutes;
    let fullTime = dateMonthYear + " " + time + " sati";
    return fullTime;
  }
}
const person = new Person("Andrej", "Jurić", 32, "Croatia", "Beli Manastir");
const person1 = new Person("Mihaela", "Vojtek", 26, "Croatia", "Beli Manastir");
const person2 = new Person("Stipo", "Čular", 32, "Croatia", "Šećerana");

console.log(Person.showDateTime());
console.log(person.getBirthYear());

person.setSkill = "HTML";
person.setSkill = "JavaScript";
person.setSkill = "CSS";

console.log(person.skills);
console.log(person);

//

class Pet extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city);
    this.gender = gender;
  }
  saySomething() {
    console.log("I am pet of the person class");
  }
}

const pet1 = new Pet("Rudi", "Hrabar", "3", "Croatia", "Beli Manastir", "Male");
console.log(pet1);

console.log(pet1.saySomething());

pet1.setSkill = "Lajanje";
pet1.setSkill = "Trčanje";

*/

class Animal {
  constructor(name, age, color, legs, food) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
    this.foods = [];
  }
  get getFood() {
    return this.foods;
  }
  set setFood(food) {
    this.foods.push(food);
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs, food) {
    super(name, age, color, legs, food);
  }
}

const dog = new Dog("Rudi", 3, "black", 4);
console.table(dog);
dog.setFood = "DogFood";

class Cat extends Animal {
  constructor(name, age, color, legs, food) {
    super(name, age, color, legs, food);
  }
}

const cat = new Cat("Mini", 2, "grey", 4);
console.table(cat);

//
