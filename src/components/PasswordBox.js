import { Icon } from '../Icons';

const PasswordBox = () => {
  return (
    <div className='box box__password'>
      <input type='text' placeholder='P4$$W0rD!' />
      <button type='button'>
        <Icon name='copy' />
      </button>
    </div>
  );
};

export default PasswordBox;
