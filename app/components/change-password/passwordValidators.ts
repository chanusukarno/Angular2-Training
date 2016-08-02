import {Control, ControlGroup} from "angular2/common";

export class PasswordValidators {
    static complexPassword(control:Control) {
        const minLength = 5;

        if (control.value == '') {
            return null; // bypass validation if input is empty
        }

        if (control.value.length < minLength) {
            return {
                complexPassword: {
                    minLength: minLength
                }
            }
        }

        return null;
    }

    static passwordsShouldMatch(group:ControlGroup) {
        var newPassword = group.find('newPassword').value;
        var confirmPassword = group.find('confirmPassword').value;

        // bypass if any empty
        if(newPassword.value == '' || confirmPassword.value == '') {
            return null;
        }

        if(newPassword !== confirmPassword) {
            return {
                passwordsShouldMatch: true
            }
        }

        return null;

    }
}