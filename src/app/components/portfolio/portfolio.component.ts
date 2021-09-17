import { Component, OnInit } from '@angular/core';
import { PortfolioService, Proyects } from '../../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolio:Proyects[] = [];

  constructor(private _portafolioService:PortfolioService) { }

  ngOnInit() {
    this.portfolio = this._portafolioService.getPortfolio();
  }

}
