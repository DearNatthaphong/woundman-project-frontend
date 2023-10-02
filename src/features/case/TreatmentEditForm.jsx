import React, { useEffect, useRef, useState } from 'react';
import AddPhotoButton from './AddPhotoButton';
import { toast } from 'react-toastify';
import { useLoading } from '../../contexts/LoadingContext';

function TreatmentEditForm({
  onSubmit,
  caseId,
  treatment: { position, diagnosis, treatment, image, id }
  // treatment
}) {
  const [input, setInput] = useState({
    position: '',
    diagnosis: '',
    treatment: '',
    image: null
  });

  // console.log(input.image);

  useEffect(() => {
    setInput({
      position: position,
      diagnosis: diagnosis,
      treatment: treatment,
      image: image
    });
  }, [position, diagnosis, treatment, image]);

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

      const validationErrors = (input) => {
        const errors = [];
        if (!input.position || !input.position.trim()) {
          errors.push('ต้องใส่ตำแหน่งแผล');
        }
        if (!input.diagnosis || !input.diagnosis.trim()) {
          errors.push('ต้องใส่คำวินิจฉัย');
        }
        if (!input.treatment || !input.treatment.trim()) {
          errors.push('ต้องใส่การรักษา');
        }
        if (!input.image) {
          errors.push('ต้องใส่รูปภาพ');
        }
        return errors;
      };
      const errors = validationErrors(input);
      if (errors.length) {
        const errorMessage = errors.join('; ');
        return toast.error(errorMessage);
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
      await onSubmit(caseId, id, formData);
      toast.success('แก้ไขการรักษาสำเร็จ');
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
          {/* {input.image && input.image instanceof Blob ? ( */}
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
                src={
                  typeof input.image === 'string'
                    ? input.image
                    : URL.createObjectURL(input.image)
                }
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

export default TreatmentEditForm;
