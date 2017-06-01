import { OpenshiftBuildAngularPage } from './app.po';

describe('openshift-build-angular App', () => {
  let page: OpenshiftBuildAngularPage;

  beforeEach(() => {
    page = new OpenshiftBuildAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
