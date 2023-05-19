const SearchBar = ({onChangeSearch}) => {
    return(
        <div className="pa2 tc">
            <input 
            className="pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="Search"
            onChange={onChangeSearch}
            />
        </div>      
    );
}
export default SearchBar;