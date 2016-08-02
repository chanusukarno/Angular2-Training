import {Component, Input} from "angular2/core";

@Component({
    selector: 'zippy',
    template: `
                <div class="zippy">
                    <div class="zippy-title" (click)="isExpanded = !isExpanded">{{title}}<i class="pull-right glyphicon" [ngClass]="{'glyphicon-chevron-up': isExpanded, 'glyphicon-chevron-down': !isExpanded}"></i></div>
                    <div class="zippy-body" *ngIf="isExpanded"><ng-content></ng-content></div>
                </div>
                `,
    styles: [`
                .zippy {
                    max-width: 300px;
                    border: 2px solid #ccc;
                }
                
                .zippy .zippy-title {
                    padding: 1rem;
                    background-color: #ccc;
                }
                
                .zippy .zippy-body {
                    padding: 1rem;
                }
            `]
})
export class ZippyComponent {

    @Input() title:string;

} 