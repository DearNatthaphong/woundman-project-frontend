// import Joi from 'joi';

// const registerSchema = Joi.object({
//   titleName: Joi.string().required(),
//   firstName: Joi.string().required(),
//   lastName: Joi.string().required(),
//   emailOrMobile: Joi.alternatives().try(
//     Joi.string()
//       .email({ tlds: { allow: ['com', 'net'] } })
//       .required(),
//     Joi.string()
//       .length(10)
//       .pattern(/^[0-9]+$/) // new RegEx('^[0-9]+$')
//       .required()
//   ),
//   idCard: Joi.string()
//     .length(13)
//     .pattern(/^[0-9]+$/)
//     .required(),
//   dateOfBirth: Joi.date(),
//   mobile: Joi.string()
//     .length(10)
//     .pattern(/^[0-9]+$/)
//     .required(),
//   idLine: Joi.string().required(),
//   //   password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,16}$')).required(),
//   password: Joi.string()
//     .pattern(new RegExp('^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{6,}$'))
//     .required(),
//   confirmPassword: Joi.ref('password'),
//   consent: Joi.boolean().required()
// }).with('password', 'confirmPassword');

// export const validateRegister = (input) =>
//   registerSchema.validate(input, { abortEarly: false });
// // registerSchema.validate(input);

import validator from 'validator';

// isEmpty, isIdCard, isMobile, isPassword
export const validatePatientFields = (input) => {
  const errors = [];

  // if (!input.titleName) {
  //   errors.push('ต้องใส่คำนำหน้าชื่อ');
  // }
  if (!input.firstName) {
    errors.push('ต้องใส่ชื่อจริง');
  }
  if (!input.lastName) {
    errors.push('ต้องใส่นามสกุลจริง');
  }

  if (!input.idCard) {
    errors.push('ต้องใส่เลขบัตรประชาชน 13 หลัก');
  }

  const isIdCard = validator.isIdentityCard(input.idCard + '', 'TH');

  if (input.idCard && !isIdCard) {
    errors.push('เลขบัตรประชาชนไม่ถูกต้อง');
  }

  if (!input.dateOfBirth) {
    errors.push('ต้องใส่วันเดือนปีเกิด');
  }
  if (!input.mobile) {
    errors.push('ต้องใส่เบอร์มือถือ 10 หลัก');
  }
  const isMobile = validator.isMobilePhone(input.mobile + '', 'th-TH');

  if (input.mobile && !isMobile) {
    errors.push('เบอร์มือถือไม่ถูกต้อง');
  }

  if (!input.password) {
    errors.push('ต้องใส่รหัสผ่าน');
  }

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{6,}$/;

  const validatePassword = (password) => passwordRegex.test(password);

  const isPassword = validatePassword(input.password);

  if (input.password && !isPassword) {
    errors.push('รหัสผ่านไม่ถูกต้อง');
  }

  if (isPassword && input.password !== input.confirmPassword) {
    errors.push('รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน');
  }

  if (!input.consent) {
    errors.push('ต้องยินยอมให้ใช้ข้อมูลส่วนบุคคล');
  }

  return errors;
};

export const validateStaffFields = (input) => {
  const errors = [];

  // if (!input.titleName) {
  //   errors.push('ต้องใส่คำนำหน้าชื่อ');
  // }
  if (!input.firstName) {
    errors.push('ต้องใส่ชื่อจริง');
  }
  if (!input.lastName) {
    errors.push('ต้องใส่นามสกุลจริง');
  }

  if (!input.emailOrMobile) {
    errors.push('ต้องใส่อีเมลหรือเบอร์มือถือ');
  }
  const isEmail = validator.isEmail(input.emailOrMobile + '');
  const isMobile = validator.isMobilePhone(input.emailOrMobile + '', 'th-TH');

  if (input.emailOrMobile && !isEmail && !isMobile) {
    errors.push('อีเมลหรือเบอร์มือถือไม่ถูกต้อง');
  }

  if (!input.password) {
    errors.push('ต้องใส่รหัสผ่าน');
  }

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{6,}$/;

  const validatePassword = (password) => passwordRegex.test(password);

  const isPassword = validatePassword(input.password);

  if (input.password && !isPassword) {
    errors.push('รหัสผ่านไม่ถูกต้อง');
  }

  if (isPassword && input.password !== input.confirmPassword) {
    errors.push('รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน');
  }

  if (!input.awareness) {
    errors.push('ต้องรับรู้ พรบ ข้อมูลส่วนบุคคล');
  }

  return errors;
};

export const validateFields = (input, userType) => {
  const errors = [];

  if (userType === 'patient') {
    const patientErrors = validatePatientFields(input);
    errors.push(...patientErrors);
  }
  if (userType === 'staff') {
    const staffErrors = validateStaffFields(input);
    errors.push(...staffErrors);
  }

  return errors;
};
