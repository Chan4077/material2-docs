import { SharedComponent } from './../../../shared/shared';
import { Router } from '@angular/router';
import { DialogResultComponent } from './../../../../assets/examples/dialog/dialog-result';
import { CodeFiles } from './../../../shared/example-viewer.component';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dialog-docs-overview',
    templateUrl: './overviewdialog.component.html'
})
export class DocsOverviewDialog implements OnInit {
    dialogResult: CodeFiles;
    constructor(private router: Router, private shared: SharedComponent){shared.setTitle('Docs > Dialog > Overview');}
    ngOnInit(){
        this.dialogResult = {
            highlightPath: [
                'assets/highlighted/dialog-result-html.html',
                'assets/highlighted/dialog-result-ts.html',
                'assets/highlighted/dialog-result-content-html.html',
                'assets/highlighted/dialog-result-content-css.html'
            ],
            fileLabel: [
                'dialog-result.html',
                'dialog-result.ts',
                'dialog-result-content.html',
                'dialog-result-content.css'
            ],
            filePath: [
                'assets/examples/dialog/dialog-result.html',
                'assets/examples/dialog/dialog-result.ts',
                'assets/examples/dialog/dialog-result-content.html',
                'assets/examples/dialog/dialog-result-content.css'
            ],
            componentName: DialogResultComponent
        }
    }
}