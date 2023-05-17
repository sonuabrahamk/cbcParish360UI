import { INavbarData } from '../components/sidebar/submenu';
import { Profile } from './oidc-service.service';

export class GlobalSettings {
  public static baseURL: string = 'http://localhost:8080';
  public static navbarData: INavbarData[] | undefined;
  public static profile: Profile;
}
