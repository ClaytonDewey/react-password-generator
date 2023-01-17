const Indicators = ({ strength }) => {
  let style;
  strength === 'too weak!' ? (style = 'tooweak') : (style = strength);
  return (
    <span className={`indicators uppercase ${style}`}>
      {strength}
      <i className='indicator'></i>
      <i className='indicator'></i>
      <i className='indicator'></i>
      <i className='indicator'></i>
    </span>
  );
};

export default Indicators;
