import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    selector: 'vote',
    templateUrl: 'app/components/vote/vote.template.html',
    styles: [`
                div.voter {
                    width: 20px;
                    padding: 20px;
                    text-align: center;
                }
                
                .glyphicon-chevron-up, .glyphicon-chevron-down {
                    font-size: 22px;
                    cursor: pointer;
                }
                 
                .count {
                    font-size: 16px;
                    font-weight: bold;
                }
                
                .highlight {
                    color: dodgerblue;
                }
            `]
})
export class VoteComponent {
    @Input() votesCount: number = 0;
    @Input() myVote: number = 0;
    @Output() change = new EventEmitter();

    onChange(status) {
        if(status == '+1' && (this.myVote != 1)) {
            ++this.votesCount;
            ++this.myVote;
            this.change.emit({newValue: this.myVote});
        } else if(status == '-1' && (this.myVote != -1)) {
            --this.votesCount;
            --this.myVote;
            this.change.emit({newValue: this.myVote});
        }
    }
    
}

// Acc: 1907359496