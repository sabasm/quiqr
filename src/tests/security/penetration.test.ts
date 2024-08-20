import { performPenetrationTest } from '../../utils/securityUtils';

describe('Penetration Testing', () => {
  it('should not have exploitable endpoints', async () => {
    const testResults = await performPenetrationTest();
    expect(testResults.exploitableEndpoints).toBe(0);
  });
});


