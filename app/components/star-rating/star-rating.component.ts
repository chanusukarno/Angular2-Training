import {Component} from "angular2/core";

@Component({
    selector: 'star-rating',
    template: `
                <button type="button" class="btn btn-default btn-lg" (click)="toggleSelection()">
                    <span class="glyphicon" [class.glyphicon-star]="isActive" [class.glyphicon-star-empty]="!isActive" aria-hidden="true"></span>
                </button>
                <span>{{isActive}}</span>
                `
})
export class StarRatingComponent {
    isActive:boolean = true;

    toggleSelection() {
        this.isActive = !this.isActive;
    }

}