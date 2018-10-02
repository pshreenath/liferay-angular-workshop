import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpClientService {

	constructor(private http: HttpClient) {
	}

	getJson(url: string): Observable<any> {
		return this.http.get<any>(url);
	}

}