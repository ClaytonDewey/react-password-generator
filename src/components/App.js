import '../sass/main.scss';
import GeneratorBox from './GeneratorBox';
import PasswordBox from './PasswordBox';

const App = () => {
  return (
    <div className='generator'>
      <PasswordBox />
      <GeneratorBox />
    </div>
  );
};

export default App;
