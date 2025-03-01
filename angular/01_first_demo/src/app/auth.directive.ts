import { Directive, effect, inject, Input, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './structual-directive-exp/permission.model';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {

  //@Input({required:true, alias:'abc'}) userType1!:Permission;
  userType = input.required<Permission>({alias:'appAuth'});
  templateRef = inject(TemplateRef);
  viewContainerRef = inject(ViewContainerRef);

  constructor() { 
    effect(()=>{
        if(this.userType() === 'admin'){
            console.log(this.userType());
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }else{
          console.log(this.userType());
          this.viewContainerRef.clear();
        }
    });
  }

}
