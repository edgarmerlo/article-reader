import { DateTimeService } from 'services/DateTimeService';

describe('Date time service', () => {
  it('should format a date', async () => {
    const date = DateTimeService.getDateFromString('2020-10-16T22:00:00Z');
    expect(date).toBe('16 / 10 / 2020');
  });

  it('should add leading zeros to a date', async () => {
    const date = DateTimeService.getDateFromString('2020-09-05T22:00:00Z');
    expect(date).toBe('05 / 09 / 2020');
  });
})