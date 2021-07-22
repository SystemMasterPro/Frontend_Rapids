import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'ngx-connection-service';

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

  constructor(private connectionService: ConnectionService) {
    this.connectionService.monitor().subscribe(currentState => {
      this.hasNetworkConnection = currentState.hasNetworkConnection;
      this.hasInternetAccess = currentState.hasInternetAccess;
      if (this.hasNetworkConnection && this.hasInternetAccess) {
        this.status = 'ONLINE';
        // console.log("ESTAS EN LINEA");
      } else {
        this.status = 'OFFLINE';
        // console.log("ESTAS FUERA DE LINEA");
      }
    });
  }

  ngOnInit(): void {}
}
