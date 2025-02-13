# JavaScript


## DataType
1. Number

2. string

3. boolean
```
true and false are boolean

falsely value
----------
a. false
b. 0
c. NaN
d. 0n
e. null
f. undefined
g. '' or ""  or ``
```

4. undefined
```
let a ;
console.log(a, typeof a); //undefined  undefined
```

5. object
```
let person = {name:"dipak",
              age:20, 
              gender:"male", 
              isMarried:false};

 person is an object.
 null is the value of object.             
```

```


let person = {
  name: 'John',
  age: 30,
  city: 'New York',
  display: function(){
    console.log(this.name + ' is ' + this.age + ' years old and lives in ' + this.city);
  }

};

person.display();

class Person{
  constructor(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
  }

  display(){
    console.log(this.name , this.age, this.city);
  }
  
}

let person2 = new Person('John', 30, 'New York');
person2.display();

```


6. function
```
function add(a,b){
  return a+b;
}

let c = add(2,3);
console.log("sum = "+c);

let add1 = function(a,b){
  return a +b;
}

c= add1(20,30);
console.log("sum = "+c);

let add2 = (a,b) => {
  return a+b;
}

c= add2(200,300);
console.log("sum = "+c);

console.log(typeof add, typeof add2, typeof add1);

```

### arrow function
1. 1. declare with let, var, const
```
function add(a,b){
  let c = a+b;
  console.log('result: '+c);
}

add(10,20)

let add1 = (x,y) => {
  let z = x+y;
  console.log('result: '+z);
};
add1(10,20);

```

Another example
```
function add(a,b){
  let c = a+b;
  return c;
}

console.log(add(10,20));

let add1 = (x,y) => {
  return x+y;
}
console.log(add1(10,20));

//2. if body contain single liner, no need to use {}
let add2 = (x,y) =>  x+y;
console.log(add2(10,20));
```

2. if body contain single liner, no need to use {}
```
let add2 = (x,y) =>  console.log('result: '+(x+y));
add2(10,20);
```

3. if function has one parameter then parenthesis is not mandatory
```

```

#### default value 
```
function add(a,b=0,c=0){
  let result = a+b+c;
  console.log('result: '+(result));
}

add(10,20,30 );
add(10,20);
add(10)


function multiply(a,b=1,c=1 ){
  let result = a*b*c;
  console.log('result: '+(result));  
}
multiply(10,20,30 );
multiply(10,20);
multiply(10);
```


7. Bigint
```
let a = 1234567891234567892233445566n;
console.log(a, typeof a);
let b = a / BigInt(10);
console.log(b, typeof b);

```

8. symbol
```
let a = Symbol(10);
let b = Symbol(10);
console.log(a == b);
console.log(a, typeof a);

```


## equality in js
```
let a = 10;
let b = "10";
console.log(a == b);
console.log(a === b);

//== compare the value
//=== compare the value and type

```

## difference between  var and let
```
var is function scoped
let is block scope

```

## OBJECT

### array

## for loop
```
let arr =[10,20,11,40,50];
console.log(arr);
console.log(typeof arr);

for(let i=0;i<arr.length;i++){
  console.log(arr[i]);
}
console.log('');

// for in loop
for(let item of arr){
   console.log(item);
}
console.log('');


// foreach
arr.forEach(function(a){
  console.log(a)
});
console.log('');


// foreach
arr.forEach((a)=> console.log(a));
console.log('');

```

iterate object
```
let person = {name: 'John', age: 30 };

for(let key in person){
  console.log(key, person[key])
}

```

## example of map, find
```
let arr =[10,20,11,40,51];


let barr =[];

for(let a of arr){
  barr.push(a*a*a);
}

console.log(barr);

let carr = arr.map(a => a*a*a);
console.log(carr);

/*let oddArr = [];

for(let a of arr){
  if(a%2 != 0){
    oddArr.push(a);
  }
}
*/
let oddArr = arr.filter(a => a%2 != 0);
let oddArr2 = arr.filter(function(a){
  return a%2 != 0;
});

let oddFilter =function(a){
  return a%2 != 0;
};
let oddArr3 = arr.filter(oddFilter);
console.log(oddArr2);

```


### import features
#### spread operator ...
1. combining objects and arrays
```
let person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

let emp =  {id:1, salary:1000 }

let newPerson= {};

for(let key in person){
  newPerson[key] = person[key];
}

for(let key in emp){
  newPerson[key] = emp[key];
}
console.log(person);
console.log(emp);
console.log(newPerson);

let newPerson2 = {...person, ...emp};
let newPerson3 = Object.assign({},person, emp );
console.log(newPerson2);
console.log(newPerson3);
```

combining array
```
let arr1 = [1,2,3,];
let arr2 = [6,7,8,];
let arr3 = [...arr1,4,5,...arr2];
console.log(arr3);
```

#### destructing 
example 1:
```
let person = {
  name: 'John',
  age: 30,
  city: 'New York'
};


/*
let name = person.name;
let age = person.age;
let city = person.city;
*/

let { name, age, city } = person;

console.log(name, age);
```

example 2: provide default value
```
let person = {
  name: 'John',
  age: 30,
  city: 'New York',
  //gender: 'male'
};


/*
let name = person.name;
let age = person.age;
let city = person.city;
let gender = person.gender ? person.gender : 'male';
*/

let { name, age, city, gender="male"} = person;

console.log(name, age, city, gender);
```

Example 3: Array
```
let arr = [1,2,3,4,5];

/*
let a = arr[0];
let b = arr[1];
let c = arr[2];
let d = arr[3];
*/
let[a,b,c,d] = arr;

console.log(a,b,c,d);
```


