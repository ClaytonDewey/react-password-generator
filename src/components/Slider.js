const Slider = ({ length, handleLengthChange }) => {
  const handleChange = (e) => {
    handleLengthChange(e);
  };

  return (
    <div className='slider'>
      <label htmlFor='length'>
        Character Length <span>{length}</span>
      </label>
      <input
        type='range'
        onChange={handleChange}
        name='length'
        id='length'
        min='0'
        max='20'
        value={length}
        aria-valuemin='0'
        aria-valuemax='20'
        aria-valuenow={length}
        defaultValue={length}
        aria-describedby='rangevalue'
      />
    </div>
  );
};

export default Slider;
