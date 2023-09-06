import React from 'react';
import Avatar from '../../components/ui/Avatar';
import { useAuth } from '../../contexts/AuthContext';

function ProfileInfo() {
  const { patient, staff } = useAuth();
  return (
    <>
      <div className="card-body">
        <div className="row">
          <div className="col-12 text-center">
            <Avatar
              src={patient ? patient.profileImage : staff.profileImage}
              size={200}
            />
          </div>
          {staff && (
            <div className="col-12 text-center">
              <p className="card-text">
                <small className="text-body-secondary">แตะรูปเพื่อแก้ไข</small>
              </p>
            </div>
          )}
        </div>
      </div>
      {patient && (
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6">
                <i className="far fa-id-card" />
                <h5 className="ps-3 d-inline-block">เลขบัตรประชาชน</h5>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6">
                <i className="fas fa-user" />
                <h5 className="ps-3 d-inline-block">น.ส.กกกก กกกกก</h5>
              </div>
            </div>
          </li>

          <li className="list-group-item">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6">
                <i className="far fa-calendar-alt" />
                <h5 className="ps-3 d-inline-block">2 มิ.ย. 2532</h5>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6">
                <i className="fas fa-phone" />
                <h5 className="ps-3 d-inline-block">0811111111</h5>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6">
                <i className="far fa-comment" />
                <h5 className="ps-3 d-inline-block">a@Line</h5>
              </div>
            </div>
          </li>
        </ul>
      )}
      {staff && (
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6">
                <i className="fas fa-user" />
                <h5 className="ps-3 d-inline-block">น.ส.มานี ตั้งใจทำ</h5>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6">
                <i className="fas fa-suitcase" />
                <h5 className="ps-3 d-inline-block">หมอ</h5>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6">
                <i className="fas fa-phone" />
                <h5 className="ps-3 d-inline-block">088-888-8888</h5>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6">
                <i className="far fa-envelope-open" />
                <h5 className="ps-3 d-inline-block">a@gmail.com</h5>
              </div>
            </div>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileInfo;
