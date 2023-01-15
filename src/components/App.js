import { useState } from 'react';
import '../sass/main.scss';
import GeneratorBox from './GeneratorBox';
import PasswordBox from './PasswordBox';

const App = () => {
  const [length, setLength] = useState(25);

  const handleLengthChange = (e) => {
    let target = e.target;

    const min = target.min;
    const max = target.max;
    const val = target.value;

    target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
    setLength(val);
  };

  return (
    <div className='generator'>
      <PasswordBox />
      <GeneratorBox length={length} handleLengthChange={handleLengthChange} />
    </div>
  );
};

export default App;
