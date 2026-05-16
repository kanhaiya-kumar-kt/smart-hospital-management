// src/utils/validators.js
export const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email);

export const isPasswordStrong = (password) => password.length >= 4;
