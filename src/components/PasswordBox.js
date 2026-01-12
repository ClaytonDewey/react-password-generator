import { useState } from 'react';
import { Icon } from '../Icons';

const PasswordBox = ({ password }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    if (password === '') return;
    navigator.clipboard.writeText(password);
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };

  return (
    <div className='box box__password'>
      <div className='output'>{password !== '' ? password : 'P4$$W0rD!'}</div>

      <button type='button' onClick={handleClick}>
        <Icon name='copy' />
        <span className='sr-only'>copy to clipboard</span>
      </button>
      {isVisible && (
        <span
          id='copyStatus'
          role='status'
          aria-live='polite'
          className='on-success-copied uppercase'>
          copied
        </span>
      )}
    </div>
  );
};

export default PasswordBox;
