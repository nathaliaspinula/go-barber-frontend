import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationError(err: ValidationError): Errors {
  const { inner } = err;
  const validationErrors: Errors = {};

  inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });
  return validationErrors;
}
