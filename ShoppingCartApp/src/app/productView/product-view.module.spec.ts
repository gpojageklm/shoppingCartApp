import { ProductViewModule } from './product-view.module';

describe('ProductViewModule', () => {
  let productViewModule: ProductViewModule;

  beforeEach(() => {
    productViewModule = new ProductViewModule();
  });

  it('should create an instance', () => {
    expect(productViewModule).toBeTruthy();
  });
});
