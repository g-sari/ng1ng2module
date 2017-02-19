/**
 * AngularJS service providers
 * Provides AngularJS services, which can be registered as Angular 2 providers.
 */
import {Ng1Ng2UpgradeSharedService} from "../upgrade/ng1-upgrade-shared.service";

export function upgradeTranslateFactory(upgradeAdapterRef:Ng1Ng2UpgradeSharedService) {
    return upgradeAdapterRef.$injector.get("$translate");
}

