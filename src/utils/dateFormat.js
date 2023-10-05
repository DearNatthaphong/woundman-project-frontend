import TimeAgo from 'javascript-time-ago';

// English.
import en from 'javascript-time-ago/locale/en';
import fr from 'javascript-time-ago/locale/fr';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(fr);
export const timeSince = (date) => {
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
  if (!date) {
    return 'Invalid Date'; // Handle the case when date is null or undefined
  }

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
    // hour: 'numeric',
    // minute: 'numeric',
    // timeZoneName: 'short',
    // hour12: false,
    // timeZone: 'Asia/Bangkok'
  };

  // const formatted = new Intl.DateTimeFormat('th-TH', options).format(
  //   new Date(date)
  // );
  // return `วันที่ ${formatted}`;
  try {
    const formatted = new Intl.DateTimeFormat('th-TH', options).format(
      new Date(date)
    );
    return formatted;
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid Date'; // Handle any errors that occur during date formatting
  }
};
