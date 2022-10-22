import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/searchModal.css";

const SearchModal = ({ setSearchIsClose }) => {
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`);
  };

  const handleCloseSearch = () => {
    setSearchIsClose(true);
    // reset(defaultValues)
  };
  return (
    <div className="form-modal_container">
      <img
        className="form-modal_img"
        src="../../../public/img/pokedex/searchimg.gif"
        alt=""
      />
      <h2 className="form-modal_title">What is your favourite Pokemon?</h2>
      <form className="form-modal" onSubmit={submit}>
        <i
          onClick={handleCloseSearch}
          className="form-modal_close fa-solid fa-circle-xmark"
        ></i>
        <input
          id="search"
          type="text"
          placeholder="Search here"
          className="form-modal_input"
        />
        <button className="form-modal_btn">Let's catch him</button>
      </form>
    </div>
  );
};

export default SearchModal;
