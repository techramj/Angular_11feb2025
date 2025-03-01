import { Directive, ElementRef, inject, Input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host : {
        '(click)' : 'OnConfirmLeavePage($event)'
    }
})
export class SafeLinkDirective{

    @Input({alias:'appSafeLink'}) queryPath :string= "";
    hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
    

    constructor(){
        console.log('directive created!')
    }

    OnConfirmLeavePage(event: MouseEvent){
       console.log('query param=>', this.queryPath);
       const wantToLeave = window.confirm('do you want to leav the app');
       if(wantToLeave){
        const address = this.hostElementRef.nativeElement.href;
        //alert(address);
        this.hostElementRef.nativeElement.href = address+"/"+ (this.queryPath?this.queryPath:'');
         return;
       }

       event.preventDefault();
    
    }

}