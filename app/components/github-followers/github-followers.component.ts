import {Component, OnInit} from "angular2/core";
import {GithubService} from "./github.service";
import {Observable} from "rxjs/Observable";
import {HTTP_PROVIDERS} from "angular2/http";

@Component({
    selector: 'github-followers',
    styleUrls: ['app/components/github-followers/github-followers.style.css'],
    templateUrl: 'app/components/github-followers/github-followers.template.html',
    providers: [GithubService, HTTP_PROVIDERS]
})
export class GithubFollowersComponent implements OnInit {

    isLoading = true;
    userName = "octocat";
    user = {};
    followers = [];
    showErrorMessage = false;

    constructor(private _githubService:GithubService) {
    }

    ngOnInit() {
        this.getFollowers(this.userName);
    }

    getFollowers(userName) {
        // reset data
        this.showErrorMessage = false;
        this.user = {};
        this.followers = [];
        // make api call to get user info and followers
        Observable.forkJoin(
            this._githubService.getUser(userName),
            this._githubService.getFollowers(userName))
            .subscribe(response => {
                    this.user = response[0];
                    this.followers = response[1];
                    this.showErrorMessage = false;
                },
                error => {
                    console.log(error);
                    this.showErrorMessage = true;
                },
                () => this.isLoading = false);
    }

}