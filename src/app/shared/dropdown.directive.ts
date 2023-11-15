import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  //   @HostBinding('className') strClassEl: string;

  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  //   isOpen: boolean = false;

  ngOnInit(): void {
    // // this.unListener = this.renderer.listen('document', 'click', (e) => {
    // //   console.log('heyyyyyyyyyyyyyy');
    // //   if (!this.isOpen) {
    // //     this.renderer.addClass(this.elRef.nativeElement, 'toggel');
    // //     console.log('1');
    // //   } else {
    // //     this.renderer.removeClass(this.elRef.nativeElement, 'toggel');
    // //     console.log('2');
    // //   }
    // //   this.isOpen = !this.isOpen;
    // // });
    // this.strClassEl = this.elRef.nativeElement.className;
  }
  //   @HostListener('click') clicked(e: Event) {
  //     console.log('hhhhhhhhhhhhhhhhhhhh');
  //     if (!this.isOpen) {
  //       this.renderer.addClass(this.elRef.nativeElement, 'toggel');
  //       console.log('1');
  //     } else {
  //       this.renderer.removeClass(this.elRef.nativeElement, 'toggel');
  //       console.log('2');
  //     }
  //     this.isOpen = !this.isOpen;
  //   }
  //   @HostListener('click') clicked(e: Event) {
  //     if (!this.isOpen) {
  //       console.log('not set');
  //       this.strClassEl += ' open';
  //     } else {
  //       console.log();
  //       this.strClassEl = this.strClassEl.replaceAll(' open', '');
  //     }
  //     this.isOpen = !this.isOpen;
  //   }
}
