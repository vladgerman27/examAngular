import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public infoArr: any[] = [
    {
      name: 'Half-life',
      category: 'Shooter',
      cost: '300 Rub',
      company: 'Company: Valve',
      buy: 'Buy',
      display: false,
    },

    {
      name: 'Minecraft',
      category: 'Family',
      cost: '1500 Rub',
      company: 'Company: Mojang',
      buy: 'Buy',
      display: false,
    },

    {
      name: 'Doom Eternal',
      category: 'Arcade',
      cost: 'Free',
      company: 'Company: Bethesda',
      buy: 'Buy',
      display: false,
    },

    {
      name: 'Life is Strange',
      category: 'Roles',
      cost: '2000 Rub',
      company: 'Company: Dontnod Entertainment',
      buy: 'Buy',
      display: false,
    },

    {
      name: 'Devil May Cry 5',
      category: 'RPG',
      cost: '2600 Rub',
      company: 'Company: Capcom',
      buy: 'Buy',
      display: false,
    },

    {
      name: 'Assassins Creed 3',
      category: 'RPG',
      cost: '1100 Rub',
      company: 'Company: Ubisoft',
      buy: 'Buy',
      display: false,
    },

    {
      name: 'Far Cry 5',
      category: 'Shooter',
      cost: '3000 Rub',
      company: 'Company: Ubisoft',
      buy: 'Buy',
      display: false,
    },

    {
      name: 'Hotline Miami',
      category: '2D',
      cost: '1200 Rub',
      company: 'Company:  Devolver Digital',
      buy: 'Buy',
      display: false,
    },

    {
      name: 'Call of Dutty Modern Warface',
      category: 'Shooter',
      cost: '800 Rub',
      company: 'Company: Activitions',
      buy: 'Buy',
      display: false,
    },

    {
      name: 'Team Fortress 2',
      category: 'Shooter',
      cost: 'Free',
      company: 'Company: Valve',
      buy: 'Buy',
      display: false,
    },

    {
      name: 'Red Dead Redemtion 2',
      category: 'Realism',
      cost: '1560 Rub',
      company: 'Company: Rockstar',
      buy: 'Buy',
      display: false,
    },

    {
      name: 'GTA Collection',
      category: 'Shooter',
      cost: '4500 Rub',
      company: 'Company: Rockstar',
      buy: 'Buy',
      display: false,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
