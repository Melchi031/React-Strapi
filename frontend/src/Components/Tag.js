import PropTypes from 'prop-types';

function Tag(props) {
  return (
    <div
      className={
        'inline-block align-middle rounded-md font-extrabold text-center px-3 py-1 text-xl ' +
        props.color
      }
    >
      {props.children}
    </div>
  );
}

Tag.propTypes = {
  color: PropTypes.string,
  children: PropTypes.element,
};
export default Tag;
