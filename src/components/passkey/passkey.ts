import SlPasskey from './passkey.component.js';

export * from './passkey.component.js';
export default SlPasskey;

SlPasskey.define('sl-passkey');

declare global {
  interface HTMLElementTagNameMap {
    'sl-passkey': SlPasskey;
  }
}
