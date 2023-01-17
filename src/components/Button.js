import { Icon } from '../Icons';

const Button = ({ generatePassword, disabled }) => {
  return (
    <button
      type='button'
      className='btn btn-primary'
      onClick={generatePassword}
      disabled={disabled}
    >
      Generate <Icon name='arrow-right' />
    </button>
  );
};

export default Button;
