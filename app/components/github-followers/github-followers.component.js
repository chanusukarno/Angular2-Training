System.register(["angular2/core", "./github.service", "rxjs/Observable", "angular2/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, github_service_1, Observable_1, http_1;
    var GithubFollowersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            GithubFollowersComponent = (function () {
                function GithubFollowersComponent(_githubService) {
                    this._githubService = _githubService;
                    this.isLoading = true;
                    this.userName = "octocat";
                    this.user = {};
                    this.followers = [];
                    this.showErrorMessage = false;
                }
                GithubFollowersComponent.prototype.ngOnInit = function () {
                    this.getFollowers(this.userName);
                };
                GithubFollowersComponent.prototype.getFollowers = function (userName) {
                    var _this = this;
                    // reset data
                    this.showErrorMessage = false;
                    this.user = {};
                    this.followers = [];
                    // make api call to get user info and followers
                    Observable_1.Observable.forkJoin(this._githubService.getUser(userName), this._githubService.getFollowers(userName))
                        .subscribe(function (response) {
                        _this.user = response[0];
                        _this.followers = response[1];
                        _this.showErrorMessage = false;
                    }, function (error) {
                        console.log(error);
                        _this.showErrorMessage = true;
                    }, function () { return _this.isLoading = false; });
                };
                GithubFollowersComponent = __decorate([
                    core_1.Component({
                        selector: 'github-followers',
                        styleUrls: ['app/components/github-followers/github-followers.style.css'],
                        templateUrl: 'app/components/github-followers/github-followers.template.html',
                        providers: [github_service_1.GithubService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [github_service_1.GithubService])
                ], GithubFollowersComponent);
                return GithubFollowersComponent;
            }());
            exports_1("GithubFollowersComponent", GithubFollowersComponent);
        }
    }
});
//# sourceMappingURL=github-followers.component.js.map