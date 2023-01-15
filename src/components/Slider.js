const Slider = () => {
  return (
    <div className='slider'>
      <label htmlFor='length'>Character Length</label>
      <input type='range' name='length' id='length' min='6' max='40' />
    </div>
  );
};

export default Slider;
