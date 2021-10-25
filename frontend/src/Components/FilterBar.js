import PropTypes from 'prop-types';

function FilterBar(props) {
  return (
    <form className="pb-2">
      <input
        className="text-black"
        type="text"
        id="FilterBar"
        placeholder={props.placeHolder}
        onChange={props.onChange}
        value={props.value}
      />
    </form>
  );
}

FilterBar.propTypes = {
  placeHolder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default FilterBar;
