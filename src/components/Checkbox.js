const Checkbox = ({ label }) => {
  return (
    <>
      <label className='form-control'>
        <input type='checkbox' />
        {label}
      </label>
    </>
  );
};

export default Checkbox;
