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


                            shared/TestComponent

ng g c user
ng g c tasks
ng g c tasks/task
ng g c tasks/new-task
ng g c shared/test
ng g c header
```