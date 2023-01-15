const Slider = ({ length, handleLengthChange }) => {
  const handleChange = (e) => {
    handleLengthChange(e);
  };

  return (
    <div className='slider'>
      <label htmlFor='length'>Character Length</label>
      <input
        type='range'
        onChange={handleChange}
        name='length'
        id='length'
        min='10'
        max='40'
        defaultValue={length}
      />
      <output id='rangevalue'>{length}</output>
    </div>
  );
};

export default Slider;
