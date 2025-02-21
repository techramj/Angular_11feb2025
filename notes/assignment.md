# 1
```
create the new project assignment_01
create the new component user
declare the object user in ts file
    user = { name:'Jack', age:19, gender:'Male'}
populate the value in <p> tag
display paragrap in green color with font size 10px
```


# Assignment 2:
Reference_code: 03_property_binding
```
app.component
users :{name:string, age:number, gender:'Male' |'Female' | ''}[] = [
    {name:'Sam', age:23, gender:'Male'},
    {name:'Jessica', age:21, gender:'Female'},
    {name:'Ajay', age:20, gender:'Male'},
    {name:'Dipak', age:21, gender:'Male'},
    {name:'Vijay', age:22, gender:'Male'},
    {name:'Shreya', age:21, gender:'Female'},
  ];



users.component 
users :{name:string, age:number, gender:'Male' |'Female' | ''}[] = [
    {name:'Sam', age:23, gender:'Male'},
    {name:'Jessica', age:21, gender:'Female'},
    {name:'Ajay', age:20, gender:'Male'},
    {name:'Dipak', age:21, gender:'Male'},
    {name:'Vijay', age:22, gender:'Male'},
    {name:'Shreya', age:21, gender:'Female'},
  ];



user.component
name
age
gender

```

solution:
```
app.component
a = 10;
<users  [a]= a>


users.component 

@Input({alias:'a'}) a1 = 0;
<user [x]=a1>


user.component
@Input() x = ?


```

# Assignment 3
modify the above project using for and if.

# Assignment 4
modify the above project using structual directive
@ngFor
@ngIf



class Account{

  @Input({alias:'account-id'}) id:number =10;
}


<app-account [account-id]=10>


# Assignement 5
create three component and call it in three differnt way
1. element selector
2. property selector
3. class selector


