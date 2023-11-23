import validator from 'validator';

export const validateStaffEdit = (input) => {
  const errors = [];
  if (!input.titleName) {
    errors.push('ต้องใส่คำนำหน้าชื่อ');
  }
  if (!input.firstName || !input.firstName.trim()) {
    errors.push('ต้องใส่ชื่อจริง');
  }
  if (!input.lastName || !input.lastName.trim()) {
    errors.push('ต้องใส่นามสกุลจริง');
  }
  if (!input.role) {
    errors.push('ต้องใส่หน้าที่');
  }
  if (!input.email && !input.mobile) {
    errors.push('ต้องใส่อีเมลหรือเบอร์มือถือ');
  }

  const isEmail = validator.isEmail(input.email + '');
  if (input.email && !isEmail) {
    errors.push('อีเมลไม่ถูกต้อง');
  }

  const isMobile = validator.isMobilePhone(input.mobile + '', 'th-TH');
  if (input.mobile && !isMobile) {
    errors.push('เบอร์มือถือไม่ถูกต้อง');
  }
  return errors;
};

export const validatePatientEdit = (input) => {
  const errors = [];
  if (!input.titleName) {
    errors.push('ต้องใส่คำนำหน้าชื่อ');
  }
  if (!input.firstName || !input.firstName.trim()) {
    errors.push('ต้องใส่ชื่อจริง');
  }
  if (!input.lastName || !input.lastName.trim()) {
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
  return errors;
};
