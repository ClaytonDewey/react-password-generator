import { useState } from 'react';
import { Icon } from '../Icons';

const PasswordBox = ({ password }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(password);
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  return (
    <div className='box box__password'>
      <input type='text' defaultValue={password} placeholder='P4$$W0rD!' />
      <button type='button' onClick={handleClick}>
        <Icon name='copy' />
        <span className='sr-only'>copy to clipboard</span>
      </button>
      {isVisible && <span className='on-success-copied uppercase'>copied</span>}
    </div>
  );
};

export default PasswordBox;
