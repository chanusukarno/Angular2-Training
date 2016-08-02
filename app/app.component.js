System.register(['angular2/core', "./components/courses/courses.component", "./components/star-rating/star-rating.component", "./components/favourite/favourite.component", "./components/vote/vote.component", "./components/tweet/tweet.component", "./components/tweet/tweet.service", "./components/zippy/zippy.component", "./components/subscription-form/subscription-form.component", "./components/change-password/change-password.component", "./ReactiveX/observables.component", "./components/github-followers/github-followers.component"], function(exports_1, context_1) {
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
    var core_1, courses_component_1, star_rating_component_1, favourite_component_1, vote_component_1, tweet_component_1, tweet_service_1, zippy_component_1, subscription_form_component_1, change_password_component_1, observables_component_1, github_followers_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (star_rating_component_1_1) {
                star_rating_component_1 = star_rating_component_1_1;
            },
            function (favourite_component_1_1) {
                favourite_component_1 = favourite_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (subscription_form_component_1_1) {
                subscription_form_component_1 = subscription_form_component_1_1;
            },
            function (change_password_component_1_1) {
                change_password_component_1 = change_password_component_1_1;
            },
            function (observables_component_1_1) {
                observables_component_1 = observables_component_1_1;
            },
            function (github_followers_component_1_1) {
                github_followers_component_1 = github_followers_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(tweetService) {
                    this.favouritesTotal = 10;
                    // tweets
                    this.tweets = tweetService.getTweets();
                }
                AppComponent.prototype.onCountChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onVoteChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.template.html',
                        directives: [courses_component_1.CoursesComponent, star_rating_component_1.StarRatingComponent, favourite_component_1.FavouriteComponent, vote_component_1.VoteComponent, tweet_component_1.TweetComponent, zippy_component_1.ZippyComponent,
                            subscription_form_component_1.SubscriptionFormComponent, change_password_component_1.ChangePasswordComponent, observables_component_1.ObservablesComponent, github_followers_component_1.GithubFollowersComponent],
                        providers: [tweet_service_1.TweetService],
                        styleUrls: ['app/app.style.css']
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map