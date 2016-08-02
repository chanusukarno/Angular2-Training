import {Component} from "angular2/core";

@Component({
    selector: 'subscription-form',
    templateUrl: 'app/components/subscription-form/subscription-form.template.html'
})
export class SubscriptionFormComponent {

    frequencies:Object[] = [{"id": 1, "value": "Daily"}, {"id": 2, "value": "Weekly"}, {"id": 3, "value": "Monthly"}];

    submit(form) {
        console.log(form);
    }

}