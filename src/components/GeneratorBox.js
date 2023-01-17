import StrengthBox from './StrengthBox';
import Button from './Button';
import Checkbox from './Checkbox';
import Slider from './Slider';

const GeneratorBox = ({
  length,
  strength,
  handleLengthChange,
  onChangeUseUppercase,
  onChangeUseLowercase,
  onChangeUseNumbers,
  onChangeUseSymbols,
}) => {
  return (
    <div className='box box__generator'>
      <Slider length={length} handleLengthChange={handleLengthChange} />
      <div className='mb-3'>
        <Checkbox
          onChange={onChangeUseUppercase}
          label='Include Uppercase Letters'
        />
        <Checkbox
          onChange={onChangeUseLowercase}
          label='Include Lowercase Letters'
        />
        <Checkbox onChange={onChangeUseNumbers} label='Include Numbers' />
        <Checkbox onChange={onChangeUseSymbols} label='Include Symbols' />
      </div>
      <StrengthBox strength={strength} />
      <Button />
    </div>
  );
};

export default GeneratorBox;
