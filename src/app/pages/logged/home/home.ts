import { Component } from '@angular/core';
import { Header } from '../../../components/logged/header/header';
import { Card } from '../../../components/logged/card/card';
import { Movie } from '../../../interfaces/movie'; 

@Component({
  selector: 'app-home',
  imports: [Header, Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  movies: Movie[] = [
    {
      id: 1,
      title: 'O Poderoso Chefão',
      description: 'Don Corleone, chefe da máfia, precisa passar o legado para seu filho Michael, que reluta em assumir os negócios da família.',
      duration: '1:30h',
      ageRating: 'Somente +18',
      approval: '67% Aprovação',
      platform: 'Claro TV',
      platformLogo: '/patners/claro.png',
      isTopTen: true
    },
    {
      id: 2,
      title: 'Interestelar',
      description: 'Uma equipe de exploradores viaja através de um buraco de minhoca no espaço em uma tentativa de garantir a sobrevivência da humanidade.',
      duration: '2:49h',
      ageRating: 'Somente +12',
      approval: '89% Aprovação',
      platform: 'Netflix',
      platformLogo: '/patners/netflix.png',
      isTopTen: true
    },
    {
      id: 3,
      title: 'Parasita',
      description: 'Toda a família de Ki-taek está desempregada, vivendo em um porão sujo e apertado. Uma obra-prima do cinema coreano.',
      duration: '2:12h',
      ageRating: 'Somente +16',
      approval: '95% Aprovação',
      platform: 'Disney+',
      platformLogo: '/patners/Disney+.png',
      isTopTen: false
    },
    {
      id: 4,
      title: 'Matrix',
      description: 'Um hacker descobre a verdadeira natureza de sua realidade e seu papel na guerra contra seus controladores.',
      duration: '2:16h',
      ageRating: 'Somente +14',
      approval: '87% Aprovação',
      platform: 'HBO Max',
      platformLogo: '/patners/HBO_Max-removebg-preview.png',
      isTopTen: false
    },
    {
      id: 5,
      title: 'Vingadores: Ultimato',
      description: 'Após Thanos eliminar metade das criaturas vivas, os Vingadores restantes devem fazer o que for necessário para desfazer as ações do titã louco.',
      duration: '3:01h',
      ageRating: 'Somente +12',
      approval: '94% Aprovação',
      platform: 'Disney+',
      platformLogo: '/patners/Disney+.png',
      isTopTen: true
    },
    {
      id: 6,
      title: 'Coringa',
      description: 'Arthur Fleck trabalha como palhaço para uma agência de talentos e, toda semana, precisa comparecer a uma agente social, devido aos seus conhecidos problemas mentais.',
      duration: '2:02h',
      ageRating: 'Somente +18',
      approval: '91% Aprovação',
      platform: 'HBO Max',
      platformLogo: '/patners/HBO_Max-removebg-preview.png',
      isTopTen: true
    },
    {
      id: 7,
      title: 'A Origem',
      description: 'Dom Cobb é um ladrão com a rara habilidade de roubar segredos do inconsciente, obtidos durante o estado de sono.',
      duration: '2:28h',
      ageRating: 'Somente +14',
      approval: '88% Aprovação',
      platform: 'Netflix',
      platformLogo: '/patners/netflix.png',
      isTopTen: false
    },
    {
      id: 8,
      title: 'Pantera Negra',
      description: 'Após a morte do rei T\'Chaka, o príncipe T\'Challa retorna a Wakanda para a cerimônia de coroação. Mas a presença de um velho inimigo coloca em risco o destino de Wakanda.',
      duration: '2:14h',
      ageRating: 'Somente +12',
      approval: '85% Aprovação',
      platform: 'Disney+',
      platformLogo: '/patners/Disney+.png',
      isTopTen: false
    }
  ];
}
