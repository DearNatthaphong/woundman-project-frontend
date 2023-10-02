import React, { useRef, useState } from 'react';
import AddPhotoButton from './AddPhotoButton';
import { toast } from 'react-toastify';
import { useLoading } from '../../contexts/LoadingContext';

function TreatmentCreateForm({ onSubmit, caseId }) {
  const [input, setInput] = useState({
    position: '',
    diagnosis: '',
    treatment: '',
    image: null
  });
  //   const [image, setImage] = useState(null);
  const fileEl = useRef();

  const { startLoading, stopLoading } = useLoading();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
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
      if (input.image) {
        formData.append('image', input.image);
      }
      startLoading();
      // {position:'',...,image:'null'}
      await onSubmit(caseId, formData);
      setInput({ position: '', diagnosis: '', treatment: '', image: null });
      toast.success('สร้างการรักษาสำเร็จ');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
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
                  fileEl.current.value = '';
                }}
              />
              <img
                src={URL.createObjectURL(input.image)}
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
              setInput({ ...input, image: e.target.files[0] });
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

export default TreatmentCreateForm;
