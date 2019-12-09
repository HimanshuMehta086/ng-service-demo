import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //  application-wide singleton
})
export class DataService {
  constructor() {
    //  This service will not be part of the app bundle
    //  unless it is used. As such no component asks for
    //  this service in constructor, we do not see this log

    //  This is because, Angular builders now take the
    //  'Tree Shakeable Provider' approach. This means,
    //  Before bundling, the tree-shaking is done to ensure
    //  unused code is taken away from the bundle
    //  This goes by import commands in various files.
    //  providedIn: 'root' is the configuration for Angular
    //  DI system.
    console.log('service created');
  }
}
