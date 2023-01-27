import { FormControl } from "@angular/forms";

export class EmailValidation{
    static isValid(control:FormControl){
        const regx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);
        if(!control.value){
            return null;
        }

        if(regx){
            return null;
        }

        return{
            invalidEmail:true
        }
    }
}

export class PassValidator {
    
    static isValid(control: FormControl) {
        let value: string = control.value || '';

        if (!value) {
            return null
        }

        let upperCaseCharacters = /[A-Z]+/g
        if (upperCaseCharacters.test(value) === false) {
            return { passwordStrength: `Upper case required` };
        }

        let lowerCaseCharacters = /[a-z]+/g
        if (lowerCaseCharacters.test(value) === false) {
            return { passwordStrength: `lower case required` };
        }


        let numberCharacters = /[0-9]+/g
        if (numberCharacters.test(value) === false) {
            return { passwordStrength: `number required` };
        }

        let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
        if (specialCharacters.test(value) === false) {
            return { passwordStrength: `Special char required` };
        }
        let minCharacters = /^.{8,}$/
        if (minCharacters.test(value) === false) {
            return { passwordStrength: `mimimum 8 char required` };
        }
        // let maxCharacters = /^.{,16}$/
        // if (maxCharacters.test(value) === false) {
        //     return { passwordStrength: `maximum 16 char required` };
        // }
        return null;
    }
}
