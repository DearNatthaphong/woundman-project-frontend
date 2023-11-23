import React, { useEffect, useRef, useState } from 'react';
import { useLoading } from '../../contexts/LoadingContext';
import { toast } from 'react-toastify';
import numeral from 'numeral';
import AddPhotoButton from '../case/AddPhotoButton';

function ReceiptCreateContainer({ createReceipt, totalPrice, caseId }) {
  const [input, setInput] = useState({
    totalPrice: totalPrice,
    method: '',
    image: null
  });

  const [file, setFile] = useState(null);

  const fileEl = useRef();

  useEffect(() => {
    setInput((prevInput) => ({ ...prevInput, totalPrice: totalPrice }));
  }, [totalPrice]);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const { startLoading, stopLoading } = useLoading();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log('Method:', input.method);
    // console.log('Total Price:', input.totalPrice);

    if (!input.method || !input.totalPrice) {
      return toast.error('ข้อมูลไม่ครบหรือข้อมูลไม่ถูกต้อง');
    }

    const formData = new FormData();

    if (input.method) {
      formData.append('method', input.method);
    }
    if (input.totalPrice) {
      formData.append('totalPrice', input.totalPrice);
    }
    if (file) {
      formData.append('image', file);
    }

    try {
      startLoading();
      if (totalPrice) {
        await createReceipt(caseId, formData);
        toast.success('สร้างใบเสร็จสำเร็จ');
        setInput({
          totalPrice: '',
          method: '',
          image: null
        });
      }
    } catch (err) {
      console.log(err);
      toast.error('สร้างใบเสร็จไม่สำเร็จ');
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <>
      <div className="card mt-3">
        <div className="card-body px-0">
          <div className="row justify-content-center align-items-center m-0 p-0">
            <div className="col-4 m-0 p-0">
              <p className="my-auto text-center">ยอดชำระรวม</p>
            </div>
            <div className="col-4 p-0">
              <h5 className="my-auto text-center">
                {numeral(totalPrice).format('0,0.00')}
              </h5>
            </div>
            <div className="col-2 p-0">
              <p className="my-auto text-center">บาท</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <p className="text-center">ชำระเงินด้วยวิธี</p>
          <div className="row">
            <div className="col-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="method"
                  id="exampleRadios1"
                  value="เงินสด"
                  onChange={handleChangeInput}
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  เงินสด
                </label>
              </div>
            </div>
            <div className="col-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="method"
                  id="exampleRadios2"
                  value="โอนเงิน"
                  onChange={handleChangeInput}
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  โอนเงิน
                </label>
              </div>
            </div>
            <div className="col-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="method"
                  id="exampleRadios3"
                  value="บัตรเครดิต"
                  onChange={handleChangeInput}
                />
                <label className="form-check-label" htmlFor="exampleRadios3">
                  บัตรเครดิต
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {input.method === 'โอนเงิน' && (
        <div className="card my-3">
          <div className="card-body">
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
                    alt="receipt"
                    // style={{
                    //   maxHeight: '800px',
                    //   width: '100%'
                    // }}
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
                    image: URL.createObjectURL(selectedFile)
                  });
                }
              }}
            />
          </div>
        </div>
      )}
      <div className="card my-3">
        <div className="card-body">
          <div className="row justify-content-center justify-items-center">
            <div className="col text-center">
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary w-50"
              >
                ถัดไป
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReceiptCreateContainer;
