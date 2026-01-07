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
          labelText='Include Uppercase Letters'
          label='uppercase'
        />
        <Checkbox
          onChange={onChangeUseLowercase}
          setActiveItemsCount={setActiveItemsCount}
          labelText='Include Lowercase Letters'
          label='lowercase'
        />
        <Checkbox
          onChange={onChangeUseNumbers}
          setActiveItemsCount={setActiveItemsCount}
          labelText='Include Numbers'
          label='numbers'
        />
        <Checkbox
          onChange={onChangeUseSymbols}
          setActiveItemsCount={setActiveItemsCount}
          labelText='Include Symbols'
          label='symbols'
        />
      </div>
      <StrengthBox strength={strength} />
      <Button generatePassword={generatePassword} disabled={disabled} />
    </div>
  );
};

export default GeneratorBox;
