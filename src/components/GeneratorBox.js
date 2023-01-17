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
  setActiveItemsCount,
  generatePassword,
  disabled,
}) => {
  return (
    <div className='box box__generator'>
      <Slider length={length} handleLengthChange={handleLengthChange} />
      <div className='mb-3'>
        <Checkbox
          onChange={onChangeUseUppercase}
          setActiveItemsCount={setActiveItemsCount}
          label='Include Uppercase Letters'
        />
        <Checkbox
          onChange={onChangeUseLowercase}
          setActiveItemsCount={setActiveItemsCount}
          label='Include Lowercase Letters'
        />
        <Checkbox
          onChange={onChangeUseNumbers}
          setActiveItemsCount={setActiveItemsCount}
          label='Include Numbers'
        />
        <Checkbox
          onChange={onChangeUseSymbols}
          setActiveItemsCount={setActiveItemsCount}
          label='Include Symbols'
        />
      </div>
      <StrengthBox strength={strength} />
      <Button generatePassword={generatePassword} disabled={disabled} />
    </div>
  );
};

export default GeneratorBox;
