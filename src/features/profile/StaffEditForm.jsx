import React, { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import validator from 'validator';
import { toast } from 'react-toastify';
import AddPhotoButton from '../case/AddPhotoButton';
import Avatar from '../../components/ui/Avatar';
import * as validateService from '../../validations/userEditValidate';
import { useLoading } from '../../contexts/LoadingContext';

function StaffEditForm({ onSubmit }) {
  const {
    staff: { titleName, firstName, lastName, role, mobile, email, profileImage }
  } = useAuth();

  const { startLoading, stopLoading } = useLoading();

  const [input, setInput] = useState({
    titleName,
    firstName,
    lastName,
    role,
    mobile,
    email,
    profileImage
  });

  const [file, setFile] = useState(null);

  const fileEl = useRef();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateService.validateStaffEdit(input);

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
    if (input.role) {
      formData.append('role', input.role);
    }
    const isMobile = validator.isMobilePhone(input.mobile + '', 'th-TH');
    if (input.mobile && isMobile) {
      formData.append('mobile', input.mobile);
    }
    const isEmail = validator.isEmail(input.email + '');
    if (input.email && isEmail) {
      formData.append('email', input.email);
    }
    if (file) {
      formData.append('profileImage', file);
    }

    try {
      startLoading();
      await onSubmit(formData);
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
                  top: 1,
                  right: 100,
                  backgroundColor: 'red'
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setFile(null);
                  setInput({ ...input, profileImage: null });
                  fileEl.current.value = '';
                }}
              />
              <Avatar
                src={file ? URL.createObjectURL(file) : input.profileImage}
                size="168"
              />
            </>
          ) : (
            <AddPhotoButton />
          )}
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
        <i className="fas fa-briefcase text-success" />
      </div>
      <div className="col-11">
        <select
          className="form-select"
          name="role"
          value={input.role}
          onChange={handleChangeInput}
        >
          <option value="เจ้าหน้าที่ธุรการ">เจ้าหน้าที่ธุรการ</option>
          <option value="พยาบาล">พยาบาล</option>
          <option value="หมอ">หมอ</option>
        </select>
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
        <i className="fa fa-envelope text-success" />
      </div>
      <div className="col-11">
        <input
          type="text"
          className="form-control"
          name="email"
          placeholder="อีเมล"
          value={input.email || ''}
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

export default StaffEditForm;
