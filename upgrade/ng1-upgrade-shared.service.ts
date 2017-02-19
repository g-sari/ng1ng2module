/**
 * Injectable Angular 2 global upgrade service.
 */
import { Injectable } from '@angular/core'
import { UpgradeAdapterRef } from '@angular/upgrade';
import * as ng1 from '@angular/upgrade/src/angular_js';

@Injectable()
export class Ng1Ng2UpgradeSharedService {

    public upgradeAdapterRef:UpgradeAdapterRef;
    public $rootScope:ng1.IRootScopeService;
    public $injector:ng1.IInjectorService;


    /**
     * Sets the given upgradeAdapterRef which allows us to access AngularJS members.
     *
     * @param upgradeAdapterRef
     */
    setUpgradeAdapterRef(upgradeAdapterRef:UpgradeAdapterRef) {
        this.upgradeAdapterRef = upgradeAdapterRef;
        this.initNg1(upgradeAdapterRef);
    }

    /**
     * Initializes AngularJS members such as $rootScope or the injector.
     *
     * @param upgradeAdapterRef
     */
    initNg1(upgradeAdapterRef:UpgradeAdapterRef) {
        this.$injector = upgradeAdapterRef.ng1Injector;
        this.$rootScope = upgradeAdapterRef.ng1RootScope;
    }

}