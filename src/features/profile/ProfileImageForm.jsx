import ImageForm from '../../components/ui/ImageForm';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';

function ProfileImageForm() {
  const { staff } = useAuth();
  const [file, setFile] = useState(null);

  if (file) {
    console.log(URL.createObjectURL(file));
  }

  return (
    <ImageForm
      title="รูปโปรไฟล์"
      file={file ? URL.createObjectURL(file) : staff.profileImage}
      onFileChange={(newFile) => setFile(newFile)}
    ></ImageForm>
  );
}

export default ProfileImageForm;
