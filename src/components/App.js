import { useEffect, useState } from 'react';
import '../sass/main.scss';
import GeneratorBox from './GeneratorBox';
import PasswordBox from './PasswordBox';

const App = () => {
  const [length, setLength] = useState(0);
  const [password, setPassword] = useState('P4$$W0rD!');
  const [strength, setStrength] = useState('');
  let [useUppercase, setUseUppercase] = useState(false);
  let [useLowercase, setUseLowercase] = useState(false);
  let [useNumbers, setUseNumbers] = useState(false);
  let [useSymbols, setUseSymbols] = useState(false);

  const handleLengthChange = (e) => {
    let target = e.target;
    const min = target.min;
    const max = target.max;
    const val = target.value;
    target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
    setLength(parseInt(val));
  };

  const onChangeUseUppercase = () => {
    setUseUppercase((useUppercase = !useUppercase));
  };

  const onChangeUseLowercase = () => {
    setUseLowercase((useLowercase = !useLowercase));
  };

  const onChangeUseNumbers = () => {
    setUseNumbers((useNumbers = !useNumbers));
  };

  const onChangeUseSymbols = () => {
    setUseSymbols((useSymbols = !useSymbols));
  };

  useEffect(() => {
    if (length === 0) {
      setStrength('');
    } else if (length >= 1 && length <= 5) {
      setStrength('too weak!');
    } else if (length > 5 && length <= 10) {
      setStrength('weak');
    } else if (length > 10 && length <= 25) {
      setStrength('medium');
    } else {
      setStrength('strong');
    }
  }, [length, strength]);

  return (
    <>
      <h1 className='text-center'>Password Generator</h1>
      <main className='generator'>
        <PasswordBox password={password} />
        <GeneratorBox
          onChangeUseUppercase={onChangeUseUppercase}
          onChangeUseLowercase={onChangeUseLowercase}
          onChangeUseNumbers={onChangeUseNumbers}
          onChangeUseSymbols={onChangeUseSymbols}
          length={length}
          strength={strength}
          handleLengthChange={handleLengthChange}
        />
      </main>
    </>
  );
};

export default App;
