import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { ApiServiceService } from './services/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'rapids';
  hasNetworkConnection: boolean | undefined;
  hasInternetAccess: boolean | undefined;
  status: string | undefined;
  public readonly VAPID_PUBLIC_KEY =
    'BLvcrK3x_8JTNXyR30gCwsK4fnWd5Jp1XHN5AJ-fVLCMWqzxfCf92jMcgENiKtsHnCvtjGBSUSS-3OxEFbXTtig';

  constructor(
    private swPush: SwPush,
    private apiRest: ApiServiceService
  ) {
    // comprueba la conexion a internet
    // this.connectionService.monitor().subscribe((currentState) => {
    //   this.hasNetworkConnection = currentState.hasNetworkConnection;
    //   this.hasInternetAccess = currentState.hasInternetAccess;
    //   if (this.hasNetworkConnection && this.hasInternetAccess) {
    //     this.status = 'ONLINE';
    //     // console.log("ESTAS EN LINEA");
    //   } else {
    //     this.status = 'OFFLINE';
    //     // console.log("ESTAS FUERA DE LINEA");
    //   }
    // });

    this.subscribetoNotifications();
  }
// envia la notificacion push a nuestros usuarios
  subscribetoNotifications(): any {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then(sub => {
      const token = JSON.parse(JSON.stringify(sub));
      this.apiRest.saveToken(token).subscribe((res:Object) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      })
    }).catch(err=> console.log(err))
  }
  ngOnInit(): void {}
}
