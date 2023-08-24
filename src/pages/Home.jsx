import React from 'react';
import Modal from '../components/Modal';

function Home() {
  return (
    <div className="container mt-3">
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <Modal />
    </div>
  );
}

export default Home;
