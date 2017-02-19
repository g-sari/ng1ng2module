import { Pipe, PipeTransform, Inject } from '@angular/core';

/**
 * Translates AngularJS i18n translations.
 * Used to access AngularJS translate pipe in the templates.
 */
@Pipe({name: 'translate'})
export class TranslatePipe implements PipeTransform {

    constructor(@Inject('$translate') private $translate:any) {}

    transform(translationId:string) {
        return this.$translate.instant(translationId);
    }
}