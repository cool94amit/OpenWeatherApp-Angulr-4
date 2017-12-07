import { OpenWeatherAppPage } from './app.po';

describe('open-weather-app App', () => {
  let page: OpenWeatherAppPage;

  beforeEach(() => {
    page = new OpenWeatherAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
