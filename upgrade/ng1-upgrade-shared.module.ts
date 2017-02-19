import { NgModule } from '@angular/core';

import { Ng1Ng2UpgradeSharedService } from "./ng1-upgrade-shared.service";
import { TranslatePipe } from "./ng1-translate-shared.pipe";
import * as upgradeFactories from "./ng1-upgrade-shared.providers";

/**
 * Ng1 and Ng2 upgrade module
 * Registers providers and upgrades AngularJS services, which can be injected in the Angular 2 environment.
 */
@NgModule({
    declarations: [TranslatePipe],
    exports: [TranslatePipe]
})


export class Ng1UpgradeModule {

    static forRoot() {
        return {
            ngModule: Ng1UpgradeModule,
            providers: [Ng1Ng2UpgradeSharedService,
                {
                    provide: '$translate',
                    useFactory: upgradeFactories.upgradeTranslateFactory,
                    deps: [Ng1Ng2UpgradeSharedService]
                }
            ]
        }
    }

}