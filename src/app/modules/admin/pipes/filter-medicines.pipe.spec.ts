import { FilterMedicinesPipe } from './filter-medicines.pipe';

describe('FilterMedicinesPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterMedicinesPipe();
    expect(pipe).toBeTruthy();
  });
});
