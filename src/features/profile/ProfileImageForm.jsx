import React, { useRef, useState } from 'react';
import Avatar from '../../components/ui/Avatar';
import { useAuth } from '../../contexts/AuthContext';

function ProfileImageForm() {
  const { patient, staff } = useAuth();
  const [file, setFile] = useState(null);

  const inputEl = useRef();

  if (file) {
    console.log(URL.createObjectURL(file));
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">รูปโปรไฟล์</h5>
        <input
          type="file"
          className="d-none"
          ref={inputEl}
          //   multiple
          onChange={(e) => {
            // console.dir(e.target.files);
            if (e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />
        <div>
          {file && (
            <>
              <button className="btn btn-link text-decoration-none hover-bg-gray-100">
                บันทึก
              </button>
              <button
                className="btn btn-link text-decoration-none hover-bg-gray-100"
                onClick={() => {
                  setFile(null);
                  inputEl.current.value = null;
                  //   setFile(patient ? patient.profile : staff.profile)
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
            src={
              file
                ? URL.createObjectURL(file)
                : patient
                ? patient.profileImage
                : staff.profileImage
            }
            size="168"
          />
        </span>
      </div>
      <hr />
    </>
  );
}

export default ProfileImageForm;
