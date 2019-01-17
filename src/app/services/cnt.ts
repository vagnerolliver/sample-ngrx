import { environment } from '../../environments/environment';

export abstract class Cnt {
  private coursesUrl = environment.host + '/courses';

  connectTo(service, url) {
    return this.getEndingPoint(service) + '/' + url;
  }
  getEndingPoint(api: string) {
    if (api === 'courses') {
      return this.coursesUrl;
    }
  }
}
