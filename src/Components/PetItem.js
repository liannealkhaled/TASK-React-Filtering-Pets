import { useState } from "react";

function PetItem({ pet }) {
  const [imageSrc, setImageSrc] = useState(pet.image);
  const [show, setShow] = useState(true);

  const changeImage = () => {
    setImageSrc(pet.image2);
  };

  const RemoveImage = () => {
    setShow(false);
  };

  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={imageSrc} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button onClick={changeImage} type="button" className="btn btn-info">
            Pet
          </button>
          <button onClick={RemoveImage} type="button" class="btn btn-info  m-2">
            Adopt
          </button>
          {show ? <h1>NOT ADDOPTED</h1> : <h1>ADDOPTED</h1>}
        </div>
      </div>
    </div>
  );
}

export default PetItem;

/// 1 - create function to change img to img2
/// 2- call this function in onclick button , so it work
