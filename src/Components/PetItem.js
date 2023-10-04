import { useCallback, useState } from "react";

function PetItem({ pet }) {
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={pet.image} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button onClick type="button" className="btn btn-info">
            Pet
          </button>
          <button type="button" class="btn btn-info  m-2">
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;


const [petpic, setpetpic] = useState(pet.image)

/// 1 - create function to change img to img2 
/// 2- call this function in onclick button , so it work 
const changingPicByClicking = ()=>{
  setpetphoto( 
   if (petpic == pet.image) return  )
} 



onclick( changingPicByClicking)