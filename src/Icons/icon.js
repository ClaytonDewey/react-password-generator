import { IconCopy, IconCheck, IconArrowRight } from './index';

const Icon = ({ name }) => {
  switch (name) {
    case 'copy':
      return <IconCopy />;
    case 'check':
      return <IconCheck />;
    case 'arrow-right':
      return <IconArrowRight />;
    default:
      return <IconCopy />;
  }
};

export default Icon;
