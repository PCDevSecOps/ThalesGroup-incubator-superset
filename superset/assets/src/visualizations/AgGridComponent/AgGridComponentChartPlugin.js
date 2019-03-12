import { t } from '@superset-ui/translation';
import { ChartMetadata, ChartPlugin } from '@superset-ui/chart';
import thumbnail from './images/thumbnail.png';
import transformProps from './transformProps';

const metadata = new ChartMetadata({
  name: t('AgGridComponent'),
  description: '',
  thumbnail,
});

export default class AgGridComponentChartPlugin extends ChartPlugin {
  constructor() {
    super({
      metadata,
      transformProps,
      loadChart: () => import('./ReactAgGrid.js'),
    });
  }
}
