import { SimpleMenuExample } from './../../../../assets/examples/menu/simple-menu';
import { CodeFiles } from './../../../shared/example-viewer.docs';
import { SharedComponent } from './../../../shared/shared.docs';
import { Component, OnInit } from "@angular/core";

@Component({
	selector: 'docs-menu-overview',
	templateUrl: './overviewmenu.component.html'
})
export class DocsOverviewMenu implements OnInit {
	simpleMenu: CodeFiles;
	constructor(private shared: SharedComponent) { shared.setTitle('Docs > Menu > Overview') }
	ngOnInit() {
		this.simpleMenu = {
			filePath: [
				'assets/examples/menu/simple-menu.html',
				'assets/examples/menu/simple-menu.ts'
			],
			highlightPath: [
				'assets/highlighted/simple-menu-html.html',
				'assets/highlighted/simple-menu-ts.html'
			],
			componentName: SimpleMenuExample,
			url: "menu/menu-overview",
			title: "Simple menu"
		}
	}
}