/**
 * Utility functions for form validation
 */

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Validates email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates required fields
 */
export function validateRequired(
  value: string | number | undefined | null,
  fieldName: string
): string | null {
  if (!value || (typeof value === "string" && value.trim() === "")) {
    return `${fieldName} is required`;
  }
  return null;
}

/**
 * Validates minimum length
 */
export function validateMinLength(
  value: string,
  minLength: number,
  fieldName: string
): string | null {
  if (value.length < minLength) {
    return `${fieldName} must be at least ${minLength} characters`;
  }
  return null;
}

/**
 * Validates maximum length
 */
export function validateMaxLength(
  value: string,
  maxLength: number,
  fieldName: string
): string | null {
  if (value.length > maxLength) {
    return `${fieldName} must be less than ${maxLength} characters`;
  }
  return null;
}

/**
 * Sanitizes HTML input to prevent XSS
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

/**
 * Validates contact form
 */
export function validateContactForm(data: {
  name: string;
  email: string;
  message: string;
}): ValidationResult {
  const errors: Record<string, string> = {};

  // Name validation
  const nameError = validateRequired(data.name, "Name");
  if (nameError) errors.name = nameError;
  else {
    const minLengthError = validateMinLength(data.name, 2, "Name");
    if (minLengthError) errors.name = minLengthError;
  }

  // Email validation
  const emailError = validateRequired(data.email, "Email");
  if (emailError) {
    errors.email = emailError;
  } else if (!isValidEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  // Message validation
  const messageError = validateRequired(data.message, "Message");
  if (messageError) {
    errors.message = messageError;
  } else {
    const minLengthError = validateMinLength(data.message, 10, "Message");
    if (minLengthError) errors.message = minLengthError;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
