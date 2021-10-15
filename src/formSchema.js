import * as yup from 'yup';

const formSchema= yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name is required!')
        .min(2, 'name must be at least 2 characters'), 
    size: yup
        .string()
        .required('size is required!'),
    specialText: yup
        .string(),
    pepperoni: yup
        .bool(),
    sausage: yup
        .bool(),
    canadianBacon: yup
        .bool(),
    onions: yup
        .bool(),
    
});

export default formSchema;