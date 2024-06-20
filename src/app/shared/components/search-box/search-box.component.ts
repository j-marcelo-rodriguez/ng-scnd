import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  
  @ViewChild('txtInput')
  txtInput!: ElementRef;

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  sendInputValue(): void {
    this.onValue.emit( this.txtInput.nativeElement.value );
  }

}
