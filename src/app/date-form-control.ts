import { FormControl } from "@angular/forms";

export class DateFormControl extends FormControl{
    override setValue(value: string, options?: { onlySelf?: boolean; emitEvent?: boolean; emitModelToViewChange?: boolean; emitViewToModelChange?: boolean; }): void {
        if(value.match(/[^0-9|\/]/gi)){
            super.setValue(this.value, { ...options, emitModelToViewChange: true});
            console.log('1:',value.length);
            return;
        }

        if(value.length > 5){
            super.setValue(this.value, { ...options, emitModelToViewChange: true});
            console.log('2:' , value.length);
            return;
        }

        // if(value.length === 2 && this.value.length === 3){
        //     super.setValue(value, { ...options, emitModelToViewChange: true});
        //     return;
        // }

        if(value.length === 3 && this.value.length === 4){
            super.setValue(value.slice(0,-1), { ...options, emitModelToViewChange: true});
            console.log('3: ',value.length);
            return;
        }

        if(value.length === 3 && this.value.length === 2){
            super.setValue(this.value + '/' + value.charAt(2), { ...options, emitModelToViewChange: true});
            console.log('4:', value.length);
            return;
        }
        console.log('5:', value.length);
        super.setValue(value, { ...options, emitModelToViewChange: true});
    }
}
