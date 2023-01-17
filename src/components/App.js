import { useEffect, useState } from 'react';
import '../sass/main.scss';
import GeneratorBox from './GeneratorBox';
import PasswordBox from './PasswordBox';

const App = () => {
  const [length, setLength] = useState(0);
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [activeItemsCount, setActiveItemsCount] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [useUppercase, setUseUppercase] = useState(false);
  const [useLowercase, setUseLowercase] = useState(false);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useSymbols, setUseSymbols] = useState(false);

  const handleLengthChange = (e) => {
    let target = e.target;
    const min = target.min;
    const max = target.max;
    const val = target.value;
    target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
    setLength(parseInt(val));
  };

  const onChangeUseUppercase = () => {
    setUseUppercase(!useUppercase);
  };

  const onChangeUseLowercase = () => {
    setUseLowercase(!useLowercase);
  };

  const onChangeUseNumbers = () => {
    setUseNumbers(!useNumbers);
  };

  const onChangeUseSymbols = () => {
    setUseSymbols(!useSymbols);
  };

  useEffect(() => {
    if (length === 0) {
      setStrength('');
    } else if (
      (length >= 1 && activeItemsCount === 0) ||
      (length === 0 && activeItemsCount >= 1)
    ) {
      setStrength('too weak!');
      setDisabled(true);
    } else if (length >= 1 && length <= 4 && activeItemsCount >= 1) {
      setStrength('too weak!');
      setDisabled(false);
    } else if (length > 4 && length <= 8 && activeItemsCount >= 2) {
      setStrength('weak');
      setDisabled(false);
    } else if (length > 8 && length <= 15 && activeItemsCount >= 3) {
      setStrength('medium');
      setDisabled(false);
    } else if (length > 15 && activeItemsCount > 2) {
      setStrength('strong');
      setDisabled(false);
    }
  }, [password, length, activeItemsCount]);

  const generatePassword = () => {
    const upperCaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*+=-_';
    let validChars = '';

    if (useUppercase) validChars += upperCaseLetter;
    if (useLowercase) validChars += letters;
    if (useNumbers) validChars += numbers;
    if (useSymbols) validChars += symbols;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    setPassword(generatedPassword);
  };

  return (
    <>
      <header>
        <h1 className='text-center'>Password Generator</h1>
      </header>
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
          setActiveItemsCount={setActiveItemsCount}
          generatePassword={generatePassword}
          disabled={disabled}
        />
      </main>
    </>
  );
};

export default App;
