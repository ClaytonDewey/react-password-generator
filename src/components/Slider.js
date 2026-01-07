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
        defaultValue={length}
        aria-describedby='rangevalue'
      />
      <output className='sr-only' id='rangevalue'>
        {length}
      </output>
    </div>
  );
};

export default Slider;
