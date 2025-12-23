import { isDefined } from 'crewm8-shared/utils';
import {
  type BarChartConfiguration,
  type LineChartConfiguration,
} from '~/generated/graphql';

export const isChartConfigurationTwoDimensional = (
  configuration: BarChartConfiguration | LineChartConfiguration,
): boolean => {
  return isDefined(configuration.secondaryAxisGroupByFieldMetadataId);
};
