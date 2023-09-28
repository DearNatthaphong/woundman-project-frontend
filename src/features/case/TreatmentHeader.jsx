import React from 'react';

function TreatmentHeader() {
  return (
    <div className="card-header">
      <div className="row align-items-center">
        <div className="col-auto">
          วันที่
          {/* {dateFormat.formattedDate(caseData.createdAt)} */}
        </div>
        <div className="col-auto ms-auto">
          <div className="row">
            <div className="col">
              {/* <CaseEdit
          caseData={caseData}
          caseId={caseId}
          patientId={patientId}
          fetchCases={fetchCases}
          onCloseDropdown={() => setIsOpenDropdown(false)}
        /> */}
              <button
                className="btn btn-info"
                type="button"
                // onClick={() => {
                //   setIsOpenModalEdit(true);
                // }}
              >
                แก้ไข
              </button>

              {/* <Modal
            title="แก้ไขประวัติการรักษา"
            open={isOpenModalEdit}
            onClose={() => setIsOpenModalEdit(false)}
          > */}
              {/* <TreatmentEditForm
                caseData={caseData}
                caseId={caseId}
                patientId={patientId}
                onSuccess={() => setIsOpenModalEdit(false)}
                fetchCases={fetchCases}
              /> */}
              {/* </Modal> */}
            </div>
            <div className="col">
              <button
                className="btn btn-danger"
                type="button"
                // onClick={() => {
                //   setIsOpenModalDelete(true);
                // }}
              >
                ลบ
              </button>
              {/* <Modal
            title="ยืนยันการลบข้อมูลการตรวจรักษา"
            open={isOpenModalDelete}
            onClose={() => setIsOpenModalDelete(false)}
          > */}
              {/* <TreatmentDeleteForm
                caseId={caseId}
                patientId={patientId}
                onSuccess={() => setIsOpenModalDelete(false)}
                onClose={() => setIsOpenModalDelete(false)}
                fetchCases={fetchCases}
              /> */}
              {/* </Modal> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TreatmentHeader;
