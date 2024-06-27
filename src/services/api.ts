import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable()
export class Api {
    server: string = 'http://localhost/apisionic7/';

    constructor(private http: HttpClient) { }

    dadosApi(dados: any, api: string) {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        let url = this.server + api;
        return this.http.post(url, JSON.stringify(dados), httpOptions).pipe(map((res: any) => res) // Use pipe e map aqui
        );
    }
}
