# Angular

## Component
```
Component is a building blocks that controls a web page.
Component is class with decorator @Component
1. HTML
2. TS
3. CSS
```
To create component 
```
ng generate component <component_name>
ng g c <component_name>
ng g c <component_name> --skip-tests

eg: ng g c user --skip-tests
```


##
selector 
<app-users>

@output

@Signal

use above features in project


# output decorator example
              AppComponent

ButtonComponent             ButtonBannerComponent
btn                         button clickd count = 1



# service
1. how to create service
```
ng g s service-name
```

## Directive
1. component
2. structural (ngIf, ngFor, ngSwitchCase)
3. attribute (ngStyle, ngCLass)

- ngStyle

  [ngStyle] = "{key:value}"
  key = style-name

  [ngStyle] = "{'backgroundColor': 'red'}"

- ngClass
  [ngClass] = "[className]"
  [ngClass] = "{key:value, key:value}"
  key = className
  value = conditioin (whether you want to apply)
```
<fieldset>
    <button [ngClass]="['btn', server.status === 'up'?'btn-danger':'btn-success']">
        {{server.status === 'up'?'shutdown':'start server'}}
    </button>
```

  ### step to add bootstrap

1. add the link in the header and script on the body as mentioned
https://getbootstrap.com/docs/5.3/getting-started/introduction/

2. install the bootstrap
npm intall --save bootstrap

3. add the path in angular.json
```
 ],
            "styles": [
              "./node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
            "scripts": [
              "./node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
```

## Directive

Directives are enhancement for elements.
enhancement means extra behaviour.

Componenent -> selector, template
Directive -> selector

Componenet is a directive with a template.
```
<input name="age" ngModel>
<p *ngIf> </p>
```

### Type of Directive
1. component
2. structural
    - *ngIf
    - *ngFor
    - *ngSwitchCase
3. attribute
    - ngModel
    - ngClass
    - ngSytle

4. custom directive

### how to create custom direcive.
```
ng g d <directive-name> 
eg: n g d

https://github.com/techramj/   Angular_reference_code

https://github.com/techramj/   Angular_11feb2025

https://github.com/techramj/   Angular_11feb2025/blob/main/notes/setup.md

```

## module 
- when Angular 2 was released 2016, there were no standalone components.
- we are using the module based components till Angular 13.

- After angular 15, by default angular project is standalone.

```
                        AppComponent


              UserComponent           TasksComponent
                                           NewTaskComponent
                                           TaskComponent


                            shared/TestComponent used by User and Tasks component

ng g c user
ng g c tasks
ng g c tasks/task
ng g c tasks/new-task
ng g c shared/test
ng g c header
```

### convert standalone project to module based project
#### step 1: create root module file (app.module.ts)
```
@NgModule({
    declarations : [] //register or declared all the components which is not standalone
})
export class AppModule{

}
```

#### step 2: modify main.s

#### step 3: modify the  app.module.ts
```
@NgModule({
    declarations : [AppComponent, UserComponent, TasksComponent,
        TaskComponent, NewTaskComponent
    ],
    bootstrap : [AppComponent],
    imports : [BrowserModule, TestComponent]
})
export class AppModule{

}

```



# Router
```
emp/1
emp/2
emp/3

emp/{id} //java, asp
emp/:id

if you want to read pathParam: inject ActivatedRoute
```


# Lifcycle 
https://v17.angular.io/guide/lifecycle-hooks


# setup to create the dummy server using node json-server
1. create the folder emp_db_server
2. make it node project.
```
cd emp_db_server
npm init -y
```
3. create json file, name as emp.json
4. add the dummy data in the json file
```
{
    "employees" :[
        {"id":1, "name":"John", "salary":4000, "email":"john@test.com"},
        {"id":2, "name":"Jessica", "salary":8000, "email":"jessica@test.com"},
        {"id":3, "name":"Ajay", "salary":14000, "email":"ajay@test.com"},
        {"id":4, "name":"Vijay", "salary":24000, "email":"vijay@test.com"},
        {"id":5, "name":"Sanjay", "salary":3000, "email":"sanjay@test.com"}
    ]
}
```

5. execute below to install json server
```
npm install -g json-server
```

6. add the below command in package.json file
```
"start" : "npx json-server --watch emp.json",
```
it will look like
```

"scripts": {
    "start" : "npx json-server --watch emp.json",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

7. start the server
```
npm start
```

##  perform the crud operation
1. Get all employees details (method=GET)
```
GET: http://localhost:3000/employees
```

2. get employee by id (method = GET)
```
GET: http://localhost:3000/employees/{id}
```

3. add employee

POST: http://localhost:3000/employees

```
{
  "name": "Deepak",
  "salary": 80000,
  "email": "deepak@test.com"
}

```
4. update employee
PUT: http://localhost:3000/employees/{id}
```
{
  "id": "2",
  "name": "Jessica N",
  "salary": 12000,
  "email": "jessican@test.com"
}
```

5. delete employee
DELETE http://localhost:3000/employees/{id}
