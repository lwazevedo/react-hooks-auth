import * as Yup from 'yup';

const SignInFormSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string()
    .min(6, 'Password is Too Short!')
    .max(30, 'Password is Too Long!')
    .required('Password is Required'),
});

export default SignInFormSchema;