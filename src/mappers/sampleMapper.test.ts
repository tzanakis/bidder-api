import { sampleMapper } from "./sampleMapper";

describe('sampleMapper', () => {
  it('should map a sample to a sampleDto', () => {
    const sample = {
      firstname: 'John',
      lastname: 'Doe',
    };
    const sampleDto = sampleMapper(sample);
    expect(sampleDto).toEqual({fullname: 'John Doe'});
  });
});