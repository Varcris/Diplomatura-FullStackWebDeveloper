/* eslint-disable react/prop-types */
const SearchBar = ({ onChangeText }) => {
  return (
    <>
      <form>
        <label htmlFor="">Buscar</label>
        <input
          // onChange={(e) => handleSearch(e)}
          onChange={onChangeText}
          type="search"
          name="search"
          id="search"
          placeholder="Reloj de pulsera, tv Led, Mochila..."
        />
      </form>
    </>
  );
};

export default SearchBar;
