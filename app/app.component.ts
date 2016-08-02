import {Component} from 'angular2/core';
import {CoursesComponent} from "./components/courses/courses.component";
import {StarRatingComponent} from "./components/star-rating/star-rating.component";
import {FavouriteComponent} from "./components/favourite/favourite.component";
import {VoteComponent} from "./components/vote/vote.component";
import {TweetComponent} from "./components/tweet/tweet.component";
import {TweetService} from "./components/tweet/tweet.service";
import {ZippyComponent} from "./components/zippy/zippy.component";
import {SubscriptionFormComponent} from "./components/subscription-form/subscription-form.component";
import {ChangePasswordComponent} from "./components/change-password/change-password.component";
import {ObservablesComponent} from "./ReactiveX/observables.component";
import {GithubFollowersComponent} from "./components/github-followers/github-followers.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    directives: [CoursesComponent, StarRatingComponent, FavouriteComponent, VoteComponent, TweetComponent, ZippyComponent,
                SubscriptionFormComponent, ChangePasswordComponent, ObservablesComponent, GithubFollowersComponent],
    providers: [TweetService],
    styleUrls: ['app/app.style.css']
})
export class AppComponent {
    favouritesTotal:number = 10;

    onCountChange($event) {
        console.log($event);
    }

    onVoteChange($event) {
        console.log($event);
    }

    tweets:Object[];

    constructor(tweetService:TweetService) {
        // tweets
        this.tweets = tweetService.getTweets();
    }


}