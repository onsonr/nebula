import { getBasePath } from '../../utilities/base-path.js';
import type { IconLibrary } from './library.js';

const library: IconLibrary = {
  name: 'oxy',
  resolver: name => getBasePath(`assets/oxyicons/${name}.svg`)
};

export default library;
