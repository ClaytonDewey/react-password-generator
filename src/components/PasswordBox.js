import { Icon } from '../Icons';

const PasswordBox = () => {
  return (
    <div className='box box__password'>
      <input placeholder='PTx1f5DaFX' />
      <button type='button'>
        <Icon name='copy' />
      </button>
    </div>
  );
};

export default PasswordBox;
