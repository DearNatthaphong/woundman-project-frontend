// import ImageForm from '../../components/ui/ImageForm';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import Avatar from '../../components/ui/Avatar';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';

function ProfileImageForm({ onSuccess }) {
  const { staff, updateStaff } = useAuth();
  const { startLoading, stopLoading } = useLoading();

  const [file, setFile] = useState(null);

  // if (file) {
  //   console.log(URL.createObjectURL(file));
  // }

  const inputEl = useRef();

  // call axios to update staff
  const handleClickSave = async () => {
    try {
      startLoading();
      // await updateStaff({ staff.profileImage: file })
      const formdata = new FormData();
      formdata.append('profileImage', file); // ชื่อต้องตรงกับ middle ware multer
      await updateStaff(formdata);
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
            src={file ? URL.createObjectURL(file) : staff.profileImage}
            size="168"
          />
        </span>
      </div>
    </div>
  );
}

export default ProfileImageForm;
