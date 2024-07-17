import { getBasePath } from '../../utilities/base-path.js';
import type { IconLibrary } from './library.js';

const customLibrary: IconLibrary = {
  name: 'oxy',
  resolver: name => getBasePath(`icons/${name}.svg`)
};

export default customLibrary;
