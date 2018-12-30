import { FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

export function validatePasswordComplexity(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        let password: string = control.value;
        let complex = false;
        
        if(password && password.length >= 6)
            complex = true;

        return complex ? null : {'passwordComplexity': { value: control.value }}; 
    }
}
