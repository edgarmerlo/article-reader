import { SanitizerService } from 'services/SanitizerService';

describe('Sanitizer service', () => {
  it('should sanitize a dangerous string', async () => {
    const date = SanitizerService.sanitizeString('<div onClick="()=>alert("danger!")">Hi!</div>');
    expect(date).toBe('<div>Hi!</div>');
  });
})