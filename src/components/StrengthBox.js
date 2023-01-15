import Indicators from './Indicators';

const StrengthBox = () => {
  return (
    <div className='box box__strength'>
      <span className='label uppercase'>strength</span>
      <Indicators />
    </div>
  );
};

export default StrengthBox;
