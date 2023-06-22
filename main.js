import './style.css';
import '@finos/perspective-viewer/dist/css/pro.css';
import '@finos/perspective-viewer';
import '@finos/perspective-viewer-datagrid';
import '@finos/perspective-viewer-d3fc';

import perspective from '@finos/perspective';

async function main() {
  const resp = await fetch(
    'https://cdn.jsdelivr.net/npm/superstore-arrow/superstore.arrow'
  );
  const arrow = await resp.arrayBuffer();
  const table = await perspective.worker().table(arrow);

  const el = document.querySelector('perspective-viewer');

  if (el) {
    await el.load(table);
    el.restore({ settings: true });
  }
}

main();
