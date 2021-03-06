import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  public API = '//localhost:8080';

  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
    return this.http.get(this.API + '/Product');
  }

  getCountry(): Observable<any> {
    return this.http.get(this.API + '/Country');
  }

  getClassification(): Observable<any> {
    return this.http.get(this.API + '/Classification');
  }
  getTypes(): Observable<any> {
    return this.http.get(this.API + '/Type');
  }
  public putProduct(productSelect:string,classSelect:string,typeSelect:string,countrySelect:string):Observable<any>{
    return this.http.put(this.API + '/Product/'+productSelect+'/'+classSelect+'/'+typeSelect+'/'+countrySelect,{
      "productName":productSelect,
      "className":classSelect,
      "typeName":typeSelect,
      "countryName":countrySelect
    });
  }

  addClassification(inputClass:string){
    return this.http.post(this.API + '/Classification/addClassification/'+inputClass,{
      "className":inputClass,
    });
  }
  addType(inputType:string){
    return this.http.post(this.API + '/Type/addType/'+inputType,{
      "className":inputType,
    });
  }
  addCountry(inputCountry:string){
    return this.http.post(this.API + '/Country/addCountry/'+inputCountry,{
      "className":inputCountry,
    });
  }
}
