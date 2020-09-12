import { Directive, ElementRef, Renderer2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appApp]'
})
export class AppDirective {

  public disabled = true;

  constructor(
    render: Renderer2,
    element: ElementRef
  ) { 
    var checkbox = render.createElement('input');
    render.setAttribute(checkbox, 'type', 'checkbox')
    render.listen(checkbox, 'click', this.switchToggle)
    render.appendChild(element.nativeElement, checkbox)
    render.listen(element.nativeElement, 'click', this.clicked)
  }

  @HostBinding('disabled')
  get isDisabled() {
    return this.disabled ? 'disabled' : null;
  }

  switchToggle = () => {
    this.disabled = !this.disabled;
    console.log('You switch toggle');
  }

  clicked = () => {
    console.log('clicked')
  }

}
