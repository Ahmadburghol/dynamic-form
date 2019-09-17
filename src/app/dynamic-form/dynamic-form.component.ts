import {Component, Input, OnInit} from '@angular/core'

import {FormConfig} from './FormConfig'
import { FormGroup, FormControl } from '@angular/forms';


@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

    @Input()
    formConfig: FormConfig;

    form: FormGroup;

    ngOnInit(): void {
        this.form = new FormGroup({});
        for(let i=0;i<this.formConfig.rows.length;++i) {
            for(let j=0;j<this.formConfig.rows[i].formFields.length;++j) {
                this.form.addControl(this.formConfig.rows[i].formFields[j].name, new FormControl(''));
            }
        }
    }

}