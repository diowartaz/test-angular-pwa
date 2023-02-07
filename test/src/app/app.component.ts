import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';
  connection: any;

  defferedPrompt: any;

  constructor(updates: SwUpdate) {
    // updates.versionUpdates.subscribe((event) => {
    //   updates.activateUpdate().then(() => {
    //     if (confirm('There is an update, do you want to reload')) {
    //       document.location.reload();
    //     }
    //   });
    // });
  }

  ngOnInit(): void {
    this.setupConnectionInfo();

    window.addEventListener('beforeinstallprompt', (event) => {
      console.log('event beforeinstallprompt', event);
      event.preventDefault();
      this.defferedPrompt = event;
    });
  }
  log() {
    // effectiveType "slow-2g" | "2g" | "3g" | "4g" | "offline"
    // @ts-ignore
    console.log(navigator?.connection.effectiveType);
  }

  test() {
    // @ts-ignore
    console.log(navigator?.connection.effectiveType);
  }

  setupConnectionInfo() {
    this.connection =
      // @ts-ignore
      navigator?.connection;
    this.connection.addEventListener('change', this.log);
  }
}
