import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DictionayService {
    lanType: String = "cn";
    config: Object;
    //接收已经依赖注入的对象
    // constructor(private http: Http){
    //     http.get('http://localhost:88/config1704/students.txt').subscribe((res) => {
    //         console.log(res.json())
    //         this.config = res.json();
    //     })
    // }
}