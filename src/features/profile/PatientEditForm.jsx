// import React, { useEffect, useRef, useState } from 'react';
import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import validator from 'validator';
import AddPhotoButton from '../case/AddPhotoButton';
import Avatar from '../../components/ui/Avatar';
import { useLoading } from '../../contexts/LoadingContext';
import * as validateService from '../../validations/userEditValidate';

function PatientEditForm({ onSubmit, selectedPatient, selectedPatientId }) {
  const { startLoading, stopLoading } = useLoading();

  // console.log('selectedPatient :', selectedPatient);

  let initialState = {
    titleName: '',
    firstName: '',
    lastName: '',
    idCard: '',
    dateOfBirth: '',
    mobile: '',
    idLine: '',
    profileImage: null
  };

  const [input, setInput] = useState({
    ...initialState,
    ...(selectedPatient || {})
  });

  const [file, setFile] = useState(null);

  const fileEl = useRef();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateService.validatePatientEdit(input);
    if (validationErrors.length > 1) {
      const errorMessage =
        validationErrors.slice(0, -1).join(', ') +
        ' และ ' +
        validationErrors[validationErrors.length - 1];
      return toast.error(errorMessage);
    }
    if (validationErrors.length === 1) {
      const errorMessage = validationErrors[0];
      return toast.error(errorMessage);
    }

    const formData = new FormData();

    if (input.titleName) {
      formData.append('titleName', input.titleName);
    }
    if (input.firstName && input.firstName.trim()) {
      formData.append('firstName', input.firstName);
    }
    if (input.lastName && input.lastName.trim()) {
      formData.append('lastName', input.lastName);
    }
    if (input.idCard) {
      formData.append('idCard', input.idCard);
    }
    if (input.dateOfBirth) {
      formData.append('dateOfBirth', input.dateOfBirth);
    }
    const isMobile = validator.isMobilePhone(input.mobile + '', 'th-TH');
    if (input.mobile && isMobile) {
      formData.append('mobile', input.mobile);
    }
    if (input.idLine) {
      formData.append('idLine', input.idLine);
    }

    if (file) {
      formData.append('profileImage', file);
    }

    const patientId = selectedPatientId;

    try {
      startLoading();
      await onSubmit(patientId, formData);
      toast.success('แก้ไขข้อมูลส่วนตัวสำเร็จ');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <form className="row pt-3 g-3 text-start" onSubmit={handleSubmit}>
      <div className="col-12 text-center">
        <div className="d-inline-flex">
          <div
            className="position-relative "
            role="button"
            onClick={() => fileEl.current.click()}
          >
            {input.profileImage ? (
              <>
                <button
                  type="button"
                  className="btn-close position-absolute"
                  style={{
                    top: 0,
                    right: 0,
                    backgroundColor: 'red'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFile(null);
                    setInput({ ...input, profileImage: null });
                    fileEl.current.value = '';
                  }}
                />
                {/* <div className="d-inline-flex"> */}
                <Avatar
                  src={file ? URL.createObjectURL(file) : input.profileImage}
                  size="168"
                />
                {/* </div> */}
              </>
            ) : (
              <AddPhotoButton />
            )}
          </div>
        </div>
        <input
          type="file"
          className="d-none"
          ref={fileEl}
          onChange={(e) => {
            if (e.target.files[0]) {
              const selectedFile = e.target.files[0];
              setFile(selectedFile);
              setInput({
                ...input,
                profileImage: URL.createObjectURL(selectedFile)
              });
            }
          }}
        />
      </div>
      <div className="col-1">
        <i className="fas fa-venus-mars text-success" />
      </div>
      <div className="col-11">
        <select
          className="form-select"
          name="titleName"
          value={input.titleName}
          onChange={handleChangeInput}
        >
          <option value="นาย">นาย</option>
          <option value="น.ส.">น.ส.</option>
          <option value="นาง">นาง</option>
          <option value="ด.ช.">ด.ช.</option>
          <option value="ด.ญ.">ด.ญ.</option>
        </select>
      </div>
      <div className="col-1">
        <i className="fas fa-user text-success" />
      </div>
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          name="firstName"
          placeholder="ชื่อจริง"
          value={input.firstName}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-6">
        <input
          type="text"
          className="form-control"
          name="lastName"
          placeholder="นามสกุลจริง"
          value={input.lastName}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-1">
        <i className="fas fa-id-card text-success" />
      </div>
      <div className="col-11">
        <input
          type="text"
          className="form-control"
          name="idCard"
          placeholder="เลขบัตรประชาชน 13 หลัก"
          value={input.idCard}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-1">
        <i className="far fa-calendar-alt text-success" />
      </div>
      <div className="col-11">
        <input
          type="date"
          className="form-control"
          name="dateOfBirth"
          placeholder="วันเกิด"
          value={input.dateOfBirth}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-1">
        <i className="fas fa-phone text-success" />
      </div>
      <div className="col-11">
        <input
          type="text"
          className="form-control"
          name="mobile"
          placeholder="เบอร์มือถือ 10 หลัก"
          value={input.mobile || ''}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-1">
        <i className="fa fa-comment text-success" />
      </div>
      <div className="col-11">
        <input
          type="text"
          className="form-control"
          name="idLine"
          placeholder="ID LINE"
          value={input.idLine || ''}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-12 pt-3">
        <button
          type="submit"
          className="w-100 btn btn-md btn-success rounded-4"
        >
          ยืนยัน
        </button>
      </div>
    </form>
  );
}

export default PatientEditForm;
