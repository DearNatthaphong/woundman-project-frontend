import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import AddPhotoButton from './AddPhotoButton';

function TreatmentForm({ onSubmit, caseId, isEdit, treatment }) {
  let initialState = useState({
    position: '',
    diagnosis: '',
    treatment: '',
    image: null
  });

  if (isEdit) {
    initialState = { ...treatment };
  }

  const [input, setInput] = useState(initialState);

  const [file, setFile] = useState(null);

  const fileEl = useRef();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();

      if (
        !input.position ||
        !input.position.trim() ||
        !input.diagnosis ||
        !input.diagnosis.trim() ||
        !input.treatment ||
        !input.treatment.trim() ||
        !input.image
      ) {
        return toast.error('ข้อมูลไม่ครบ');
      }
      if (input.position && input.position.trim()) {
        formData.append('position', input.position);
      }
      if (input.diagnosis && input.diagnosis.trim()) {
        formData.append('diagnosis', input.diagnosis);
      }
      if (input.treatment && input.treatment.trim()) {
        formData.append('treatment', input.treatment);
      }
      if (file) {
        formData.append('image', file);
      }

      if (isEdit) {
        await onSubmit(caseId, treatment.id, formData);
        toast.success('แก้ไขข้อมูลสำเร็จ');
      } else {
        await onSubmit(caseId, formData);
        toast.success('สร้างการตรวจรักษาสำเร็จ');
        setInput({ position: '', diagnosis: '', treatment: '', image: null });
      }
    } catch (err) {
      console.log(err);
      toast.error('มีข้อผิดพลาดเกิดขึ้น');
      toast.error(err.response?.data.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="row row-cols-1 gx-2 gy-3"
      action=""
    >
      <div className="col ">
        <div
          className="position-relative "
          role="button"
          onClick={() => fileEl.current.click()}
        >
          {input.image ? (
            <>
              <button
                type="button"
                className="btn-close position-absolute"
                style={{
                  top: 6,
                  right: 6,
                  backgroundColor: 'red'
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setInput({ ...input, image: null });
                  setFile(null);
                  fileEl.current.value = '';
                }}
              />
              <img
                src={file ? URL.createObjectURL(file) : input.image}
                className="img-fluid"
                alt="treatment"
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
              setInput({ ...input, image: URL.createObjectURL(selectedFile) });
            }
          }}
        />
      </div>
      <div className="col text-start">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          ตำแหน่งของบาดแผล
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="2"
          name="position"
          value={input.position}
          onChange={handleChangeInput}
        ></textarea>
      </div>
      <div className="col text-start">
        <label htmlFor="exampleFormControlTextarea2" className="form-label">
          คำวินิจฉัยแพทย์
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea2"
          rows="3"
          name="diagnosis"
          value={input.diagnosis}
          onChange={handleChangeInput}
        ></textarea>
      </div>
      <div className="col text-start">
        <label htmlFor="exampleFormControlTextarea3" className="form-label">
          การรักษา
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea3"
          rows="3"
          name="treatment"
          value={input.treatment}
          onChange={handleChangeInput}
        ></textarea>
      </div>
      <div className="col pt-3">
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

export default TreatmentForm;
