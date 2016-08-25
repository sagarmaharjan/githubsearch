import { Component } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import {GithubComponent} from './components/github.component'
import {GithubService} from './services/github.service'

@Component({
    selector: 'my-app',
    template: '<github></github>',
    directives: [GithubComponent],
    providers: [HTTP_PROVIDERS, GithubService]
})
export class AppComponent { }
