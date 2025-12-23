import camelCase from 'lodash.camelcase';
import { capitalize } from 'crewm8-shared/utils';

export const pascalCase = (str: string) => capitalize(camelCase(str));
