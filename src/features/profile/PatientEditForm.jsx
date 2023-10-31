import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import validator from 'validator';
import AddPhotoButton from '../case/AddPhotoButton';
import Avatar from '../../components/ui/Avatar';

function PatientEditForm({ onSubmit, selectedPatient, selectedPatientId }) {
  const [input, setInput] = useState({
    titleName: '',
    firstName: '',
    lastName: '',
    idCard: '',
    dateOfBirth: '',
    mobile: '',
    idLine: '',
    profileImage: null
  });

  useEffect(() => {
    if (selectedPatient) {
      const {
        titleName,
        firstName,
        lastName,
        idCard,
        dateOfBirth,
        mobile,
        idLine,
        profileImage
      } = selectedPatient;

      setInput({
        titleName: titleName || '',
        firstName: firstName || '',
        lastName: lastName || '',
        idCard: idCard || '',
        dateOfBirth: dateOfBirth || '',
        mobile: mobile || '',
        idLine: idLine || '',
        profileImage: profileImage || ''
      });
    }
  }, [selectedPatient]);

  const [file, setFile] = useState(null);

  const fileEl = useRef();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();

      const validationErrors = (input) => {
        const errors = [];
        if (!input.titleName) {
          errors.push('ต้องใส่คำนำหน้าชื่อ');
        }
        if (!input.firstName || !input.firstName.trim()) {
          errors.push('ต้องใส่ชื่อจริง');
        }
        if (!input.lastName || !input.lastName.trim()) {
          errors.push('ต้องใส่นามสกุลจริง');
        }
        if (!input.idCard) {
          errors.push('ต้องใส่เลขบัตรประชาชน 13 หลัก');
        }
        const isIdCard = validator.isIdentityCard(input.idCard + '', 'TH');

        if (input.idCard && !isIdCard) {
          errors.push('เลขบัตรประชาชนไม่ถูกต้อง');
        }
        if (!input.dateOfBirth) {
          errors.push('ต้องใส่วันเดือนปีเกิด');
        }

        if (!input.mobile) {
          errors.push('ต้องใส่เบอร์มือถือ 10 หลัก');
        }
        const isMobile = validator.isMobilePhone(input.mobile + '', 'th-TH');

        if (input.mobile && !isMobile) {
          errors.push('เบอร์มือถือไม่ถูกต้อง');
        }
        return errors;
      };
      const errors = validationErrors(input);
      if (errors.length) {
        const errorMessage = errors.join('; ');
        return toast.error(errorMessage);
      }

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
      await onSubmit(selectedPatientId, formData);
      toast.success('แก้ไขข้อมูลส่วนตัวสำเร็จ');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
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
