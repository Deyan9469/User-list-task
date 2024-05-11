import { ValidatorFn } from '@angular/forms';

export function inputValidator(): ValidatorFn {
    const regExp = new RegExp(`^[a-zA-Z]+$`);

    return (control) => {
        const formControl = control.value === '' || regExp.test(control.value)

        return formControl ? null : { inputValidator: true };
    };
}