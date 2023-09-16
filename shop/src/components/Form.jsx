import { useRef } from "react";

function Form() {
  /*
    const tittle = useRef();
    const category = useRef();
*/
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/*
        <label htmlFor="tittle">Tittle</label>
        <input type="text" id="tittle" ref={tittle} />
        <label htmlFor="category">Category</label>
        <input type="text" id="category" ref={category} />
  */}
    </form>
  );
}

export default Form;
