import React, { useRef } from 'react';
import Avatar from './Avatar';

function ImageForm({ title, file, onFileChange }) {
  const inputEl = useRef();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      onFileChange(selectedFile);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">{title}</h5>
        <input
          type="file"
          className="d-none"
          ref={inputEl}
          onChange={handleFileChange}
        />
        <div>
          {file && (
            <>
              <button
                className="btn btn-link text-decoration-none hover-bg-gray-100"
                // onClick={handleClickSave}
              >
                บันทึก
              </button>
              <button
                className="btn btn-link text-decoration-none hover-bg-gray-100"
                onClick={() => {
                  onFileChange(null);
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
          <Avatar src={file} size="168" />
        </span>
      </div>
      <hr />
    </div>
  );
}

export default ImageForm;
