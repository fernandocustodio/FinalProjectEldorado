import { Injectable } from "@angular/core";
import { BaseModel } from "../models/base-model";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export abstract class CrudService<TModel extends BaseModel>{

    public urlBase = environment.baseUrl;

    constructor(public http: HttpClient){

    }

    public getAll(data?: any ){
        if (data){
            this.urlBase = `${this.urlBase}?${this.setParams(data)}`;

            return this.http.get(this.urlBase);
        }
    }

    public getOne(id: any){
        return this.http.get(`${this.urlBase}/${id}`);
    }

    public create(data: TModel){
        return this.http.post(this.urlBase, data);
    }

    public update(id: any, data: TModel){
        return this.http.put(`${this.urlBase}/${id}`, data);
    }

    public remove(id: any){
        return this.http.delete(`${this.urlBase}/${id}`);
    }

    private setParams(data: any){
        let params = new HttpParams();
        Object.keys(data).forEach((key) => {params = params.append(key, data[key])});
        
        return params;
    }
}