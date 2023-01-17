import Indicators from './Indicators';

const StrengthBox = ({ strength }) => {
  return (
    <div className='box box__strength'>
      <span className='label uppercase'>strength</span>
      <Indicators strength={strength} />
    </div>
  );
};

export default StrengthBox;
