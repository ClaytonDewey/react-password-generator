import { Icon } from '../Icons';

const PasswordBox = ({ password }) => {
  return (
    <div className='box box__password'>
      <input type='text' defaultValue={password} placeholder='P4$$W0rD!' />
      <button type='button'>
        <Icon name='copy' />
      </button>
    </div>
  );
};

export default PasswordBox;
