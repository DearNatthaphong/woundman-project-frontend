import React from 'react';

// function MedicineOption({ item }) {
//   if (item) {
//     const { title, price } = item;
//     return <option value={title}>{`${title}, ${price}บ./หน่วย`} </option>;
//   } else {
//     return <option value="">No Data</option>;
//   }
// }
function MedicineOption({ itemMedicine }) {
  if (itemMedicine) {
    const { title, price } = itemMedicine;
    return <option value={title}>{`${title}, ${price}บ./หน่วย`}</option>;
  } else {
    return <div>No data</div>;
  }
}

export default MedicineOption;
