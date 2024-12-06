import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<sl-passkey>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sl-passkey></sl-passkey> `);

    expect(el).to.exist;
  });
});
