const pokefetchid = require('/pokeFetchId');

describe('pokeFetchId', () => {
  it('fetches and uses Pokemon data successfully', async () => {
    const result = await pokefetchid.fetchAndUsePokemon(1);
    
  });

  it('handles errors when fetching and using Pokemon data', async () => {
    const result = await pokefetchid.fetchAndUsePokemon(2);
    // Your assertions here
  });
});
