import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  // HostBinding can bind to properties and sub-properties of the element this directive is attached to
  // This can be used on CSS properties also, to give a toggle effect
  @HostBinding('class.open') isOpen = false;

  // HostListener are just like regular JS events
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
