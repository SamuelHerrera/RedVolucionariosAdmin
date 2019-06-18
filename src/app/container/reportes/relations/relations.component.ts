import { Component, OnInit } from '@angular/core';
import APP_CONFIG from 'src/app/container/reportes/shared/graph.config';
import { Node, Link } from 'src/app/container/reportes/shared/d3';

@Component({
  selector: 'app-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.scss']
})
export class RelationsComponent implements OnInit {

  nodes: Node[] = [];
  links: Link[] = [];

  constructor() {
    const N = APP_CONFIG.N;
    // tslint:disable-next-line:variable-name
    const getIndex = (number: number) => number - 1;

    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      this.nodes.push(new Node(i));
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        this.links.push(new Link(i, i * m));
      }
    }
  }


  ngOnInit() {
  }

}
