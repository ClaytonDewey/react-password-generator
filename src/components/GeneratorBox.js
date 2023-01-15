import StrengthBox from './StrengthBox';
import Button from './Button';
import Checkbox from './Checkbox';
import Slider from './Slider';

const GeneratorBox = () => {
  return (
    <div className='box box__generator'>
      <Slider />
      <div className='mb-3'>
        <Checkbox label='Include Uppercase Letters' />
        <Checkbox label='Include Lowercase Letters' />
        <Checkbox label='Include Numbers' />
        <Checkbox label='Include Symbols' />
      </div>
      <StrengthBox />
      <Button />
    </div>
  );
};

export default GeneratorBox;
