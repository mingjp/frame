import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Dictionary } from '../../models/dictionary';
import { DictionayService} from '../../service/dictionary.service';

@Component({
	selector: 'datagrid',
	templateUrl: './datagrid.component.html',
	styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {
	
	dataset: Array<any>;
	dictionary = new Dictionary();
	columns: Array<any>;
	baseUrl = "http://localhost:88/";
	studentConfig: Object;
	dataFormat: Object;

	@Input() api;
	@Input() config;

  	constructor(private http: Http, private dic: DictionayService) { }

	ngOnInit() {
		this.http.get(this.baseUrl + this.config).subscribe((res) => {
			this.studentConfig = res.json();
			this.columns = this.studentConfig['Fields'].split(',');
			this.dataFormat = this.studentConfig['DataFormat'];
			this.http.get(this.api).subscribe((res) => {
				this.dataset = res.json().data;
			});        
		})

	}

	getKeys(obj) {
		return Object.keys(obj);
	}
}