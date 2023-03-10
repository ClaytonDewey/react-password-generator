const Slider = ({ length, handleLengthChange }) => {
  const handleChange = (e) => {
    handleLengthChange(e);
  };

  return (
    <div className='slider'>
      <label htmlFor='length'>
        Character Length<output id='rangevalue'>{length}</output>
      </label>
      <input
        type='range'
        onChange={handleChange}
        name='length'
        id='length'
        min='0'
        max='20'
        defaultValue={length}
      />
    </div>
  );
};

export default Slider;
