export interface FormConfig {
    rows: Row[];
}

interface Row {
    formFields: FormField[];
}

interface FormField {
    type: string;
    name: string;
}