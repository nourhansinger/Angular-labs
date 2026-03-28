import { Directive, ElementRef,HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAppDisableAfterClick]',
})
export class AppDisableAfterClick {

  constructor(private ele: ElementRef , private render2 : Renderer2) {}

  @HostListener('click')
  
   onClick() {
    this.render2.setProperty(this.ele.nativeElement, 'disabled', true);
    this.render2.setProperty(this.ele.nativeElement, 'innerText', 'Registered');
     setTimeout(() => {
        this.render2.setProperty(this.ele.nativeElement, 'disabled', false);
        this.render2.setProperty(this.ele.nativeElement, 'innerText', 'Register Now');
      }, 3000);
    
  }  


  }
