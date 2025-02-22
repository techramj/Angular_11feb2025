# component
```
   users
     user

```

```
 ng g c users --skip-tests
 ng g c users/user  --skip-test

```

                          app-component

        user-component                        tasks-component
                                                tasks= [];
                                                isAddingTask=fasle;

                                task-component                  new-task
                                     complete button


## binding

TS                                      HTML

   string interpolation {{data}}
   property binding [property]="data"
   ----------one way binding------------>

   <----------one-way binding------------
   Event Binding (event)="experession"


   <------------Two way binding----------->
         [(ngModel)]="data"
