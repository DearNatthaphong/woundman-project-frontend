import React from 'react';

function Avatar({ src, size }) {
  return (
    <div>
      <img
        className="rounded-circle cursor-pointer "
        src={src}
        width={size}
        height={size}
        alt="user"
      />
    </div>
  );
}

export default Avatar;
