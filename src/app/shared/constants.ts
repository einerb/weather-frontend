import { environment } from '../../environments/environment';
import { Endpoint } from './endpoints';

export class Constant {
  public static PRODUCTION: boolean = environment.production;
  public static DEBUG = false;
  public static Endpoints = Endpoint;
  public static API_KEY =
    '.json?access_token=pk.eyJ1IjoibmV1dHJvIiwiYSI6ImNrYzEwZ24wNDBkNTYyeG56ejR4b2wxdDIifQ.ALrBoHZlfadG_Nf5NBdfrA';
}
