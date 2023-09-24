import React, { useRef, useState } from 'react';
import { useLoading } from '../../contexts/LoadingContext';
import { toast } from 'react-toastify';
import Avatar from '../../components/ui/Avatar';
import * as patientService from '../../api/newPatientApi';

function PatientDetailImageForm({ patientId, onSuccess, patient, setPatient }) {
  const { startLoading, stopLoading } = useLoading();

  const [file, setFile] = useState(null);
  const inputEl = useRef();

  const updatePatient = async (patientId, formdata) => {
    const res = await patientService.updatePatient(patientId, formdata);
    setPatient(res.data.patient);
  };

  const handleClickSave = async () => {
    try {
      startLoading();

      const formdata = new FormData();
      formdata.append('profileImage', file); // ชื่อต้องตรงกับ middle ware multer

      await updatePatient(patientId, formdata);
      toast.success('success upload');
      setFile(null);
      onSuccess();
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message); //response อาจเป็น undefined จาก typo ไม่ได้จาก axios
    } finally {
      stopLoading();
    }
  };

  return (
    // <ImageForm
    //   title="รูปโปรไฟล์"
    //   file={file ? URL.createObjectURL(file) : staff.profileImage}
    //   onFileChange={(newFile) => setFile(newFile)}
    // ></ImageForm>
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">รูปโปรไฟล์</h5>
        <input
          type="file"
          className="d-none"
          ref={inputEl}
          onChange={(e) => {
            if (e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />
        <div>
          {file && (
            <>
              <button
                className="btn btn-link text-decoration-none hover-bg-gray-100"
                onClick={handleClickSave}
              >
                บันทึก
              </button>
              <button
                className="btn btn-link text-decoration-none hover-bg-gray-100"
                onClick={() => {
                  setFile(null);
                  inputEl.current.value = null;
                }}
              >
                ยกเลิก
              </button>
            </>
          )}
          <button
            className="btn btn-link text-decoration-none hover-bg-gray-100"
            onClick={() => inputEl.current.click()}
          >
            แก้ไข
          </button>
        </div>
      </div>
      <div className="text-center mt-3">
        <span onClick={() => inputEl.current.click()}>
          <Avatar
            src={file ? URL.createObjectURL(file) : patient.profileImage}
            size="168"
          />
        </span>
      </div>
    </div>
  );
}

export default PatientDetailImageForm;
