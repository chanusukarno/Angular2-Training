import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

    private _baseUrl = "https://api.github.com/users/";

    constructor(private _http: Http) {}

    getUser(userName) {
        return this._http.get(this._baseUrl + userName).map(response => response.json());
    }

    getFollowers(userName) {
        return this._http.get(this._baseUrl + userName + '/followers').map(response => response.json());
    }

}