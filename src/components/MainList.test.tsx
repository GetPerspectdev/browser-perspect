import React from 'react';
import { renderWithProviders } from '../utils/test-utils';
import MainList from './MainList';

jest.mock('webextension-polyfill', () => {
  return {
    runtime: {
      getManifest: () => {
        return { version: 'test-version' };
      },
    },
  };
});

describe('MainList', () => {
  let loggingEnabled: boolean;
  let totalTimeLoggedToday: string;
  beforeEach(() => {
    loggingEnabled = false;
    totalTimeLoggedToday = '1/1/1999';
  });
  it('should render properly', () => {
    const { container } = renderWithProviders(
      <MainList loggingEnabled={loggingEnabled} totalTimeLoggedToday={totalTimeLoggedToday} />,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          <div
            class="list-group"
          >
            <a
              class="list-group-item text-body-secondary"
              href="#"
            >
              <i
                class="fa fa-fw fa-cogs me-2"
              />
              Options
            </a>
          </div>
        </div>
      </div>
    `);
  });
});
