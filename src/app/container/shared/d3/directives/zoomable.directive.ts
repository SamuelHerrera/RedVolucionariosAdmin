import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { D3Service } from '../d3.service';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[zoomableOf]'
})
export class ZoomableDirective implements OnInit {
    // tslint:disable-next-line:no-input-rename
    @Input('zoomableOf') zoomableOf: ElementRef;

    // tslint:disable-next-line:variable-name
    constructor(private d3Service: D3Service, private _element: ElementRef) { }

    ngOnInit() {
        this.d3Service.applyZoomableBehaviour(this.zoomableOf, this._element.nativeElement);
    }
}
