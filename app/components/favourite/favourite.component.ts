import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    selector: 'favourite',
    templateUrl: 'app/components/favourite/favourite.template.html',
    styles: [`
                .glyphicon-heart {
                    color: #ccc;
                    font-size: 22px;
                    cursor: pointer;
                }
                
                .active {
                    color: deeppink;
                }
            `]
})
export class FavouriteComponent {
    @Input() isFavourite:boolean;
    @Input() favouritesTotal:number;
    @Output() change = new EventEmitter();

    onFavouriteChange() {
        this.isFavourite = !this.isFavourite;
        (this.isFavourite) ? ++this.favouritesTotal : --this.favouritesTotal;
        this.change.emit({newCount: this.favouritesTotal});
    }

}