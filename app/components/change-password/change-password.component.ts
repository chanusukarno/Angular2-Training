import {Component} from "angular2/core";
import {ControlGroup, FormBuilder, Validators} from "angular2/common";
import {PasswordValidators} from "./passwordValidators";

@Component({
    selector: 'change-password',
    templateUrl: 'app/components/change-password/change-password.template.html'
})
export class ChangePasswordComponent {

    formModel:ControlGroup;

    constructor(fb:FormBuilder) {
        this.formModel = fb.group({
            oldPassword: ['', Validators.required],
            newPassword: ['', Validators.compose([Validators.required, PasswordValidators.complexPassword])],
            confirmPassword: ['', Validators.compose([Validators.required])]
        }, {validator: PasswordValidators.passwordsShouldMatch})
    }

    changePassword() {
        var oldPassword = this.formModel.find('oldPassword');
        if (oldPassword.value != '1234')
            oldPassword.setErrors({validOldPassword: true});

        if (this.formModel.valid)
            alert("Password successfully changed.");
    }

}