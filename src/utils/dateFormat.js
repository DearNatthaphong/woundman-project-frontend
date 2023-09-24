import TimeAgo from 'javascript-time-ago';

// English.
import en from 'javascript-time-ago/locale/en';

export const timeSince = (date) => {
  TimeAgo.addDefaultLocale(en);

  const timeAgo = new TimeAgo('en-US');
  const newTiemSince = timeAgo.format(new Date(date), 'round');
  return newTiemSince;
};

export const calculateAge = (dateOfBirth) => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);

  const years = today.getFullYear() - birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const currentMonth = today.getMonth();
  const birthDay = birthDate.getDate();
  const currentDay = today.getDate();

  let months = currentMonth - birthMonth;
  let days = currentDay - birthDay;

  if (months < 0 || (months === 0 && days < 0)) {
    months += 12;
  }

  return `${years} ปี ${months} เดือน`;
};

export const convertToBC = (dateOfBirth) => {
  if (!dateOfBirth) {
    return '';
  }
  const [year, month, day] = dateOfBirth.split('-').map(Number);
  const bcYear = year + 543;
  const monthNames = [
    'ม.ค.',
    'ก.พ.',
    'มี.ค.',
    'เม.ย.',
    'พ.ค.',
    'มิ.ย.',
    'ก.ค.',
    'ส.ค.',
    'ก.ย.',
    'ต.ค',
    'พ.ย',
    'ธ.ค.'
  ];
  const formattedMonth = monthNames[month - 1];
  return `เกิดวันที่ ${day} ${formattedMonth} ${bcYear}`;
};

export const formattedDate = (date) => {
  // if (!date) {
  //   return '';

  // console.log('Date:', date);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    hour12: false,
    // timeZone: 'UTC'
    timeZone: 'Asia/Bangkok'
  };

  // const newDate = new Intl.DateTimeFormat('en-US', options).format(date);

  // return `วันที่ ${newDate}`;

  // try {
  // const formatted = new Intl.DateTimeFormat('en-US', options).format(
  const formatted = new Intl.DateTimeFormat('th-TH', options).format(
    new Date(date)
  );
  return `วันที่ ${formatted}`;
  // } catch (error) {
  //   console.error('Date formatting error:', error);
  //   return 'Date formatting error';
  // }
};
