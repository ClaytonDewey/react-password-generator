import { useEffect, useState } from 'react';

const Checkbox = ({ label, onChange, setActiveItemsCount }) => {
  const [isActive, setIsActive] = useState(false);

  const changehandler = () => {
    onChange();
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (!isActive) {
      setActiveItemsCount((prevCount) => {
        if (prevCount !== 0) {
          return prevCount - 1;
        }
        return prevCount;
      });
    }

    if (isActive) {
      setActiveItemsCount((prevCount) => prevCount + 1);
    }
  }, [isActive, setActiveItemsCount]);
  return (
    <>
      <label className='form-control'>
        <input checked={isActive} onChange={changehandler} type='checkbox' />
        {label}
      </label>
    </>
  );
};

export default Checkbox;
