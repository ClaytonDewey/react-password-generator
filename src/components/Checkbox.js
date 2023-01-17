const Checkbox = ({ label, onChange }) => {
  return (
    <>
      <label className='form-control'>
        <input onChange={onChange} type='checkbox' />
        {label}
      </label>
    </>
  );
};

export default Checkbox;
