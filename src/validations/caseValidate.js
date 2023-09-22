export const caseVlidationErrors = (input) => {
  const errors = [];

  if (!input.chiefComplain.trim()) {
    errors.push('ต้องใส่ข้อมูลอาการเจ็บป่วยที่มาพบแพทย์');
  }
  if (!input.presentIllness.trim()) {
    errors.push('ต้องใส่ข้อมูลประวัติการเจ็บป่วยในปัจจุบัน');
  }
  if (!input.pastHistory.trim()) {
    errors.push('ต้องใส่ข้อมูลประวัติย้อนหลัง');
  }
  if (!input.height) {
    errors.push('ต้องใส่ความสูง');
  }
  if (!input.weight) {
    errors.push('ต้องใส่น้ำหนัก');
  }
  if (!input.temperature) {
    errors.push('ต้องใส่อุณหภูมิ');
  }
  if (!input.systolicBloodPressure) {
    errors.push('ต้องใส่ความดันบน');
  }
  if (!input.diastolicBloodPressure) {
    errors.push('ต้องใส่ความดันล่าง');
  }
  if (!input.bloodOxygen) {
    errors.push('ต้องใส่ระดับออกซิเจนในเลือด');
  }
  return errors;
};
