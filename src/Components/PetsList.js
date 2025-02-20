import { useState } from "react";
import pets from "../petsData";
import PetItem from "./PetItem";
import SetQuery from "./SetQuery";

function PetsList() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  // const handlesearch = (event) => {
  //   setQuery(event.target.value);
  //   // setType(event.targer.value);
  // };

  // const handletype = (event) => {
  //   setType(event.target.value);

  // pets.filter( (setType)=>{ if} )
  // return pets.filter(setType == pets.pet.type);

  // search bar #4
  // const petlist2 = pets.filter((pet) => {
  // pet.name.toLowerCase() && query.toLocaleLowerCase()
  //   })
  // };

  const petList = pets
    .filter((pet) => {
      return pet.name.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    })
    .filter((pet) => {
      return pet.type.toLocaleLowerCase().includes(type.toLocaleLowerCase());
    })
    .map((pet) => <PetItem pet={pet} key={pet.id} />);

  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                {/*                 
                <button
                  onClick={() => {
                    setQuery("");
                  }}
                >
                  clear query
                </button> */}
              </div>
              {/* {query} */}
              <br />
              Type:
              <select
                className="form-select"
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
