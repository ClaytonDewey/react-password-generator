import { Icon } from '../Icons';

const PasswordBox = ({ password }) => {
  return (
    <div className='box box__password'>
      <input type='text' defaultValue={password} />
      <button type='button'>
        <Icon name='copy' />
      </button>
    </div>
  );
};

export default PasswordBox;
