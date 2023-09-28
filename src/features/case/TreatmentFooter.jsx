import React from 'react';

function TreatmentFooter() {
  return (
    <div className="card-footer">
      <div className="row align-items-center">
        <div className="col-auto">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </div>
        <div className="col-auto ms-auto">
          <button
            className="btn btn-sm btn-info me-3"
            type="button"
            // onClick={() => {
            //   setIsOpenModalEdit(true);
            // }}
          >
            แก้ไข
          </button>
          <button
            className="btn btn-sm  btn-danger"
            type="button"
            // onClick={() => {
            //   setIsOpenModalDelete(true);
            // }}
          >
            ลบ
          </button>
        </div>
      </div>
    </div>
  );
}

export default TreatmentFooter;
