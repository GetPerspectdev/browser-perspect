import browser from 'webextension-polyfill';
import config from '../config/config';

export default function apiKeyInvalid(key?: string): string {
  const err = 'Invalid api key... check "https://app.perspect.xyz/account" for your key';
  if (!key) return err;
  const re = new RegExp(
    '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
    'i',
  );
  if (!re.test(key)) return err;
  return '';
}

export async function getApiKey(): Promise<string> {
  const storage = await browser.storage.sync.get({
    apiKey: config.apiKey,
  });
  const apiKey = storage.apiKey as string;
  return apiKey;
}
