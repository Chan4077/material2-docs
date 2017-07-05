import { SharedComponent } from './../shared/routing.shared';
import { NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { Files } from './../shared/example-viewer.component';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'button-docs-examples',
    templateUrl: './examplebutton.component.html'
})

export class DocsExampleBtn implements OnInit {
    constructor(private router: Router, private shared: SharedComponent){}
    ngOnInit() {
        document.title = "Docs > Button > Examples";
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            this.shared.doScroll();
        });
    }
}