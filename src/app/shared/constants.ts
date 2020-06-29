import { environment } from '../../environments/environment';
import { Endpoint } from './endpoints';

export class Constant {
  public static PRODUCTION: boolean = environment.production;
  public static DEBUG = false;
  public static Endpoints = Endpoint;
}
