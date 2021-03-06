import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { Node, ForceDirectedGraph } from '../models';
import { D3Service } from '../d3.service';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[draggableNode]'
})
export class DraggableDirective implements OnInit {
    // tslint:disable-next-line:no-input-rename
    @Input('draggableNode') draggableNode: Node;
    // tslint:disable-next-line:no-input-rename
    @Input('draggableInGraph') draggableInGraph: ForceDirectedGraph;

    // tslint:disable-next-line:variable-name
    constructor(private d3Service: D3Service, private _element: ElementRef) { }

    ngOnInit() {
        this.d3Service.applyDraggableBehaviour(this._element.nativeElement, this.draggableNode, this.draggableInGraph);
    }
}
