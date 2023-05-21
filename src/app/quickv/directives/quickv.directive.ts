import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { QvForm } from 'quickv';

@Directive({
  selector: 'form',
})
export class QuickvDirective implements AfterViewInit {
  constructor(private refElement: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const qvForm = new QvForm(this.refElement.nativeElement);
    qvForm.init();
  }
}
