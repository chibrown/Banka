import Validator from 'validator';
import isEmpty from './isEmpty';

const validateInput = {
  validateInput(data) {
    const errors = {};
    const alphaRegex = /^([a-zA-Z]{2,12})$/;

    // check if empty with our function
    data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
    data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    // Validate first name field
    if (!Validator.isLength(data.firstName, { min: 2, max: 12 })) {
      errors.firstname = 'First name must be between 2 and 12 characters';
    }
    if (Validator.isEmpty(data.firstName) || !alphaRegex.test(data.firstName)) {
      errors.firstname = 'First name is required';
    }

    // Validate last name field
    if (!Validator.isLength(data.lastName, { min: 2, max: 12 })) {
      errors.lastname = 'Last name must be between 2 and 12 characters';
    }
    if (Validator.isEmpty(data.lastName) || !alphaRegex.test(data.lastName)) {
      errors.lastname = 'Last name is required';
    }

    // Validate email field
    if (!Validator.isEmail(data.email)) {
      errors.email = 'Invalid email address';
    }
    if (Validator.isEmpty(data.email)) {
      errors.email = 'Email is required';
    }

    // Validate password field
    if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
      errors.password = 'Password must be between 8 and 30 characters';
    }
    if (Validator.isEmpty(data.password)) {
      errors.password = 'Password is required';
    }

    return {
      errors,
      isValid: isEmpty(errors),
    };
  }
};

export default validateInput;
