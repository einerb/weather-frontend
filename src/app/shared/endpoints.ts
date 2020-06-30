import { environment } from '../../environments/environment';

export const Endpoint = {
  WEATHER: {
    BASE: environment.api.darksky + 'forecast',
  },
  MAPBOX: {
    BASE: environment.api.mapbox + 'mapbox.places',
  },
};
