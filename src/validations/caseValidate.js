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
  if (input.height < 0 || input.height > 250) {
    errors.push('ค่าความสูงผิดปกติ ');
  }

  if (!input.weight) {
    errors.push('ต้องใส่น้ำหนัก');
  }
  if (input.weight < 0 || input.weight > 250) {
    errors.push('ค่าน้ำหนักผิดปกติ ');
  }
  if (!input.temperature) {
    errors.push('ต้องใส่อุณหภูมิ');
  }
  if (input.temperature < 30 || input.temperature > 40) {
    errors.push('ค่าอุณหภูมิผิดปกติ ');
  }
  if (!input.systolicBloodPressure) {
    errors.push('ต้องใส่ความดันบน');
  }
  if (input.systolicBloodPressure < 0 || input.systolicBloodPressure > 250) {
    errors.push('ค่าความดันบนผิดปกติ ');
  }
  if (!input.diastolicBloodPressure) {
    errors.push('ต้องใส่ความดันล่าง');
  }
  if (input.diastolicBloodPressure < 0 || input.diastolicBloodPressure > 150) {
    errors.push('ค่าความดันล่างผิดปกติ ');
  }
  if (!input.bloodOxygen) {
    errors.push('ต้องใส่ระดับออกซิเจนในเลือด');
  }
  if (input.bloodOxygen < 0 || input.bloodOxygen > 100) {
    errors.push('ค่าระดับออกซิเจนในเลือดผิดปกติ ');
  }
  return errors;
};
