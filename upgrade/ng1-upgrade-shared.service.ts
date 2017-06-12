/**
 * Injectable Angular 2 global upgrade service.
 */
import {Injectable} from '@angular/core'
import {UpgradeAdapterRef} from '@angular/upgrade';
import {IInjectorService, IRootScopeService} from "@angular/upgrade/static/src/common/angular1";

@Injectable()
export class Ng1Ng2UpgradeSharedService {

    public upgradeAdapterRef:UpgradeAdapterRef;
    public $rootScope:IRootScopeService;
    public $injector:IInjectorService;


    /**
     * Sets the given upgradeAdapterRef which allows us to access Angular 1 members.
     *
     * @param upgradeAdapterRef
     */
    setUpgradeAdapterRef(upgradeAdapterRef:UpgradeAdapterRef) {
        this.upgradeAdapterRef = upgradeAdapterRef;
        this.initNg1(upgradeAdapterRef);
    }

    /**
     * Initializes Angular 1 members such as the $rootScope or the injector.
     *
     * @param upgradeAdapterRef
     */
    initNg1(upgradeAdapterRef:UpgradeAdapterRef) {
        this.$injector = upgradeAdapterRef.ng1Injector;
        this.$rootScope = upgradeAdapterRef.ng1RootScope;
    }

}
