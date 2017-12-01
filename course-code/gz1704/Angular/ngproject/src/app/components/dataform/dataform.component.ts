import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: '[dataform]',
	templateUrl: './dataform.component.html',
	styleUrls: ['./dataform.component.css']
})
export class DataformComponent implements OnInit {
	@Input() config: Object;

	constructor() { }

	ngOnInit() {
		// console.log(this.config['Fields']);
	}

	getKeys(obj){
		return Object.keys(obj);
	}
}
