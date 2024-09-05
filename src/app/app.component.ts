import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeTableComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employee-management-app';
}
