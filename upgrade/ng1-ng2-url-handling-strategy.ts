import { UrlHandlingStrategy } from '@angular/router';

/**
 * AngularJS and Angular 2 URL handling strategy.
 * Tells the Angular 2 router if this URL should be processed.
 * When it returns true, the angular 2 router will execute the regular navigation.
 * Otherwise the url will be executed by angular 1 when it is defined.
 */
export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {

    shouldProcessUrl(url) {
        var urlStr:string = url.toString();
        return urlStr == ("/") || urlStr == ("/auth") || urlStr == ("/login") || urlStr == ("/walkthrough");
    }

    extract(url) {
        return url;
    }

    merge(url, whole) {
        return url;
    }
}