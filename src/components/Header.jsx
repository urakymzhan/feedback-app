import propTypes from 'prop-types';

function Header({ text }) {
  const headerStyles = {
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: '#ff6a95',
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};

Header.propTypes = {
  text: propTypes.string,
  bgColor: propTypes.string,
  textColor: propTypes.string,
};

export default Header;
