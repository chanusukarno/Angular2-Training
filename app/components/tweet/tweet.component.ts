import {Component, Input} from "angular2/core";
import {FavouriteComponent} from "../../components/favourite/favourite.component";

@Component({
    selector: 'tweet',
    templateUrl: 'app/components/tweet/tweet.template.html',
    directives: [FavouriteComponent],
    styleUrls: ['app/components/tweet/tweet.style.css']
})
export class TweetComponent {
    @Input() tweet:Object;
}