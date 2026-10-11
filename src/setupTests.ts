import { vi } from 'vitest';
import '@testing-library/jest-dom/extend-expect';

// Suppress React 18 deprecation warnings in tests
vi.spyOn(console, 'warn').mockImplementation((msg) => {
  if (
    msg.includes('ReactDOMTestUtils.act') ||
    msg.includes('ReactDOM.render') ||
    msg.includes('unmountComponentAtNode') ||
    msg.includes('createRoot')
  ) {
    return;
  }
  console.warn(msg);
});
