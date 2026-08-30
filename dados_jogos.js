const jogos = [
  {
    id: 'investigacao-postuma',
    titulo: 'Investigação Póstuma',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/2466900/header.jpg',
    link: 'https://store.steampowered.com/app/2466900/A_Investigacao_Postuma/',
    formato: 'steam',
    tags: ['noir', 'mistério'],
    descricao: 'Um Rio de Janeiro de 1937 preso num loop, até você descobrir a verdade sobre a morte de Brás Cubas.'
  },

  {
    id: 'capote',
    titulo: 'Capote',
    imagem: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3345950/82edaf6167a8f955a57f66533cb4e3467389df4a/header_alt_assets_0_brazilian.jpg?t=1788099010',
    link: 'https://store.steampowered.com/app/3345950/Capote_Truco_e_Boteco/',
    formato: 'steam',
    tags: ['cartas', 'multiplayer'],
    descricao: 'Jogue cartas com amigos ou desconhecidos em 3 modos de jogo diferentes.'
  },

  {
    id: 'hello-kitty-island-adventure',
    titulo: 'Hello Kitty Island Adventure',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/2495100/header.jpg',
    link: 'https://store.steampowered.com/app/2495100/Hello_Kitty_Island_Adventure/',
    formato: 'steam',
    tags: ['puzzle', 'fofo'],
    descricao: 'Uma aventura fofa com a Hello Kitty e os amigos numa ilha misteriosa cheia de puzzles.'
  },

  {
    id: 'enigma-do-medo',
    titulo: 'Enigma do Medo',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1507580/header.jpg',
    link: 'https://store.steampowered.com/app/1507580/Enigma_do_Medo/',
    formato: 'steam',
    tags: ['terror', 'investigação'],
    descricao: 'Torne-se Mia, uma detetive paranormal em busca do pai desaparecido, enfrentando monstros pelo caminho.'
  },

  {
    id: 'the-choicer-voicer',
    titulo: 'The Choicer Voicer',
    imagem: './src/img/thechoicervoicer.png',
    link: 'https://yeahmaybe.itch.io/the-choicer-voicer',
    formato: 'web',
    tags: ['partygame'],
    descricao: 'Um game show onde sua voz é a estrela: faça imitações vocais em formatos de jogo bem divertidos.'
  },

  {
    id: 'dragon-ball-sparking-zero',
    titulo: 'Dragon Ball Sparking Zero',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1790600/header.jpg',
    link: 'https://store.steampowered.com/app/1790600/DRAGON_BALL_Sparking_ZERO/',
    formato: 'steam',
    tags: ['luta', 'anime'],
    descricao: 'Uma experiência de luta em grande escala com os personagens mais poderosos de Dragon Ball.'
  },

  {
    id: 'persona-3-reload',
    titulo: 'Persona 3 Reload',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/2161700/header.jpg',
    link: 'https://store.steampowered.com/app/2161700/Persona_3_Reload/',
    formato: 'steam',
    tags: ['rpg', 'anime'],
    descricao: 'Mergulhe na Hora Sombria e desperte as profundezas do seu coração em uma reimaginação moderna de Persona 3.'
  },

  {
    id: 'asleep-ato-1',
    titulo: 'Asleep - Ato 1',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1583850/header.jpg',
    link: 'https://store.steampowered.com/app/1583850/Asleep_Ato_1/',
    formato: 'steam',
    tags: ['terror', 'aventura'],
    descricao: 'Vagueie por cenários inóspitos enquanto foge de criaturas à espreita na escuridão.'
  },

  {
    id: 'omori',
    titulo: 'OMORI',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1150690/header.jpg',
    link: 'https://store.steampowered.com/app/1150690/OMORI/',
    formato: 'steam',
    tags: ['rpg', 'indie', 'terror'],
    descricao: 'Explore um mundo estranho cheio de amigos e inimigos enquanto descobre os segredos por trás de uma história misteriosa.'
  },
  {
    id: 'red-dead-redemption-2',
    titulo: 'Red Dead Redemption 2',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg',
    link: 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/',
    formato: 'steam',
    tags: ['ação', 'aventura', 'openworld'],
    descricao: 'Viva uma enorme aventura no Velho Oeste acompanhando Arthur Morgan e a gangue Van der Linde.'
  },

  {
    id: 'cyberpunk-2077',
    titulo: 'Cyberpunk 2077',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg',
    link: 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/',
    formato: 'steam',
    tags: ['rpg', 'ação', 'openworld'],
    descricao: 'Explore Night City como V, um mercenário em busca de poder, dinheiro e sobrevivência.'
  },

  {
    id: 'the-witcher-3',
    titulo: 'The Witcher 3: Wild Hunt',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg',
    link: 'https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/',
    formato: 'steam',
    tags: ['rpg', 'fantasia', 'openworld'],
    descricao: 'Assuma o papel de Geralt de Rívia em uma gigantesca aventura de fantasia.'
  },

  {
    id: 'elden-ring',
    titulo: 'Elden Ring',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg',
    link: 'https://store.steampowered.com/app/1245620/ELDEN_RING/',
    formato: 'steam',
    tags: ['rpg', 'ação', 'soulslike'],
    descricao: 'Explore as Terras Intermédias, enfrente inimigos poderosos e descubra os mistérios do Anel Prístino.'
  },

  {
    id: 'baldurs-gate-3',
    titulo: "Baldur's Gate 3",
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg',
    link: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/',
    formato: 'steam',
    tags: ['rpg', 'fantasia', 'aventura'],
    descricao: 'Monte seu grupo, faça escolhas importantes e enfrente uma aventura de RPG baseada em Dungeons & Dragons.'
  },

  {
    id: 'grand-theft-auto-v',
    titulo: 'Grand Theft Auto V',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg',
    link: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/',
    formato: 'steam',
    tags: ['ação', 'openworld', 'crime'],
    descricao: 'Explore Los Santos acompanhando três criminosos envolvidos em uma série de golpes e confusões.'
  },

  {
    id: 'hogwarts-legacy',
    titulo: 'Hogwarts Legacy',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/990080/header.jpg',
    link: 'https://store.steampowered.com/app/990080/Hogwarts_Legacy/',
    formato: 'steam',
    tags: ['rpg', 'fantasia', 'aventura'],
    descricao: 'Viva como estudante de Hogwarts e descubra uma aventura mágica ambientada no mundo bruxo.'
  },

  {
    id: 'marvel-rivals',
    titulo: 'Marvel Rivals',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/2767030/header.jpg',
    link: 'https://store.steampowered.com/app/2767030/Marvel_Rivals/',
    formato: 'steam',
    tags: ['ação', 'multiplayer', 'herois'],
    descricao: 'Monte equipes com heróis e vilões da Marvel em batalhas competitivas.'
  },
  {
    id: 'counter-strike-2',
    titulo: 'Counter-Strike 2',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg',
    link: 'https://store.steampowered.com/app/730/CounterStrike_2/',
    formato: 'steam',
    tags: ['fps', 'competitivo', 'multiplayer'],
    descricao: 'O clássico FPS competitivo da Valve com partidas entre equipes de terroristas e contraterroristas.'
  },

  {
    id: 'valorant',
    titulo: 'VALORANT',
    imagem: './src/img/valorant.jpg',
    link: 'https://playvalorant.com/',
    formato: 'web',
    tags: ['fps', 'competitivo', 'multiplayer'],
    descricao: 'FPS tático competitivo que combina armas, estratégia e habilidades únicas de agentes.'
  },

  {
    id: 'doom-eternal',
    titulo: 'DOOM Eternal',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/782330/header.jpg',
    link: 'https://store.steampowered.com/app/782330/DOOM_Eternal/',
    formato: 'steam',
    tags: ['fps', 'ação', 'violência'],
    descricao: 'Destrua hordas de demônios em combates extremamente rápidos e brutais.'
  },

  {
    id: 'resident-evil-4',
    titulo: 'Resident Evil 4',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/2050650/header.jpg',
    link: 'https://store.steampowered.com/app/2050650/Resident_Evil_4/',
    formato: 'steam',
    tags: ['terror', 'ação', 'sobrevivência'],
    descricao: 'Leon Kennedy parte para uma missão perigosa para resgatar a filha do presidente.'
  },
  {
    id: 'dead-by-daylight',
    titulo: 'Dead by Daylight',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/381210/header.jpg',
    link: 'https://store.steampowered.com/app/381210/Dead_by_Daylight/',
    formato: 'steam',
    tags: ['terror', 'multiplayer', 'ação'],
    descricao: 'Quatro sobreviventes tentam escapar de um assassino controlado por outro jogador.'
  },
  {
    id: 'persona-5-royal',
    titulo: 'Persona 5 Royal',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1687950/header.jpg',
    link: 'https://store.steampowered.com/app/1687950/Persona_5_Royal/',
    formato: 'steam',
    tags: ['rpg', 'anime', 'aventura'],
    descricao: 'Viva a rotina de um estudante enquanto lidera os Phantom Thieves em uma batalha contra a corrupção.'
  },

  {
    id: 'final-fantasy-vii-remake',
    titulo: 'FINAL FANTASY VII REMAKE INTERGRADE',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1462040/header.jpg',
    link: 'https://store.steampowered.com/app/1462040/FINAL_FANTASY_VII_REMAKE_INTERGRADE/',
    formato: 'steam',
    tags: ['rpg', 'ação', 'anime'],
    descricao: 'Acompanhe Cloud e seus aliados em uma reimaginação moderna do clássico Final Fantasy VII.'
  },

  {
    id: 'monster-hunter-world',
    titulo: 'Monster Hunter: World',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/582010/header.jpg',
    link: 'https://store.steampowered.com/app/582010/Monster_Hunter_World/',
    formato: 'steam',
    tags: ['rpg', 'ação', 'coop'],
    descricao: 'Caçe monstros gigantes, crie equipamentos e enfrente criaturas cada vez mais poderosas.'
  },

  {
    id: 'nier-automata',
    titulo: 'NieR:Automata',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/524220/header.jpg',
    link: 'https://store.steampowered.com/app/524220/NieRAutomata/',
    formato: 'steam',
    tags: ['rpg', 'ação', 'anime'],
    descricao: 'Androides lutam pela humanidade em um mundo pós-apocalíptico cheio de mistérios.'
  },
  {
    id: 'genshin-impact',
    titulo: 'Genshin Impact',
    imagem: './src/img/genshin.jpg',
    link: 'https://genshin.hoyoverse.com/',
    formato: 'web',
    tags: ['rpg', 'anime', 'openworld'],
    descricao: 'Explore o mundo de Teyvat, conheça personagens e descubra os mistérios de suas sete nações.'
  },
  {
    id: 'hollow-knight',
    titulo: 'Hollow Knight',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg',
    link: 'https://store.steampowered.com/app/367520/Hollow_Knight/',
    formato: 'steam',
    tags: ['ação', 'indie', 'metroidvania'],
    descricao: 'Explore um reino subterrâneo em ruínas repleto de criaturas, mistérios e desafios.'
  },
  {
    id: 'hades',
    titulo: 'Hades',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg',
    link: 'https://store.steampowered.com/app/1145360/Hades/',
    formato: 'steam',
    tags: ['ação', 'indie', 'roguelike'],
    descricao: 'Tente escapar do Submundo enfrentando monstros e deuses da mitologia grega.'
  },

  {
    id: 'stardew-valley',
    titulo: 'Stardew Valley',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg',
    link: 'https://store.steampowered.com/app/413150/Stardew_Valley/',
    formato: 'steam',
    tags: ['simulação', 'indie', 'fazenda'],
    descricao: 'Construa uma nova vida cuidando de uma fazenda, conhecendo moradores e explorando o vale.'
  },

  {
    id: 'celeste',
    titulo: 'Celeste',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/504230/header.jpg',
    link: 'https://store.steampowered.com/app/504230/Celeste/',
    formato: 'steam',
    tags: ['plataforma', 'indie', 'aventura'],
    descricao: 'Ajude Madeline a escalar a montanha Celeste enfrentando desafios físicos e emocionais.'
  },

  {
    id: 'undertale',
    titulo: 'Undertale',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/391540/header.jpg',
    link: 'https://store.steampowered.com/app/391540/Undertale/',
    formato: 'steam',
    tags: ['rpg', 'indie', 'aventura'],
    descricao: 'Explore um mundo subterrâneo onde suas escolhas podem mudar completamente a história.'
  },

  {
    id: 'balatro',
    titulo: 'Balatro',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/2379780/header.jpg',
    link: 'https://store.steampowered.com/app/2379780/Balatro/',
    formato: 'steam',
    tags: ['cartas', 'indie', 'estratégia'],
    descricao: 'Monte combinações absurdas de cartas e crie sinergias cada vez mais poderosas.'
  },

  {
    id: 'cuphead',
    titulo: 'Cuphead',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/268910/header.jpg',
    link: 'https://store.steampowered.com/app/268910/Cuphead/',
    formato: 'steam',
    tags: ['ação', 'indie', 'plataforma'],
    descricao: 'Enfrente chefes difíceis em uma aventura inspirada nas animações clássicas dos anos 1930.'
  },

  {
    id: 'terraria',
    titulo: 'Terraria',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg',
    link: 'https://store.steampowered.com/app/105600/Terraria/',
    formato: 'steam',
    tags: ['sandbox', 'indie', 'sobrevivência'],
    descricao: 'Explore, construa, lute e sobreviva em um mundo praticamente sem limites.'
  },

  {
    id: 'cult-of-the-lamb',
    titulo: 'Cult of the Lamb',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1313140/header.jpg',
    link: 'https://store.steampowered.com/app/1313140/Cult_of_the_Lamb/',
    formato: 'steam',
    tags: ['indie', 'ação', 'simulação'],
    descricao: 'Crie seu próprio culto enquanto explora masmorras e enfrenta inimigos.'
  },

  {
    id: 'little-nightmares',
    titulo: 'Little Nightmares',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/424840/header.jpg',
    link: 'https://store.steampowered.com/app/424840/Little_Nightmares/',
    formato: 'steam',
    tags: ['terror', 'indie', 'puzzle'],
    descricao: 'Ajude Six a escapar de uma misteriosa embarcação cheia de criaturas assustadoras.'
  },
  {
    id: 'the-sims-4',
    titulo: 'The Sims 4',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1222670/header.jpg',
    link: 'https://store.steampowered.com/app/1222670/The_Sims_4/',
    formato: 'steam',
    tags: ['simulação', 'vida', 'casual'],
    descricao: 'Crie personagens, construa casas e controle todos os aspectos da vida dos seus Sims.'
  },

  {
    id: 'overcooked-2',
    titulo: 'Overcooked! 2',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/728880/header.jpg',
    link: 'https://store.steampowered.com/app/728880/Overcooked_2/',
    formato: 'steam',
    tags: ['cozinha', 'coop', 'partygame'],
    descricao: 'Trabalhe em equipe para preparar pratos em cozinhas caóticas e completamente malucas.'
  },

  {
    id: 'plateup',
    titulo: 'PlateUp!',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1599600/header.jpg',
    link: 'https://store.steampowered.com/app/1599600/PlateUp/',
    formato: 'steam',
    tags: ['cozinha', 'coop', 'simulação'],
    descricao: 'Administre um restaurante, prepare pratos e tente sobreviver ao caos do atendimento.'
  },

  {
    id: 'goose-goose-duck',
    titulo: 'Goose Goose Duck',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1568590/header.jpg',
    link: 'https://store.steampowered.com/app/1568590/Goose_Goose_Duck/',
    formato: 'steam',
    tags: ['party', 'multiplayer', 'dedução'],
    descricao: 'Trabalhe em equipe ou sabote seus amigos em partidas de dedução social.'
  },

  {
    id: 'among-us',
    titulo: 'Among Us',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/945360/header.jpg',
    link: 'https://store.steampowered.com/app/945360/Among_Us/',
    formato: 'steam',
    tags: ['party', 'multiplayer', 'dedução'],
    descricao: 'Descubra quem são os impostores antes que eles eliminem toda a tripulação.'
  },
  {
    id: 'forza-horizon-5',
    titulo: 'Forza Horizon 5',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg',
    link: 'https://store.steampowered.com/app/1551360/Forza_Horizon_5/',
    formato: 'steam',
    tags: ['corrida', 'carros', 'openworld'],
    descricao: 'Explore o México em alta velocidade em um enorme festival de carros e corridas.'
  },

  {
    id: 'rocket-league',
    titulo: 'Rocket League',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/252950/header.jpg',
    link: 'https://store.steampowered.com/app/252950/Rocket_League/',
    formato: 'steam',
    tags: ['esporte', 'carros', 'multiplayer'],
    descricao: 'Jogue futebol usando carros em partidas rápidas e caóticas.'
  },
  {
    id: 'outlast',
    titulo: 'Outlast',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/238320/header.jpg',
    link: 'https://store.steampowered.com/app/238320/Outlast/',
    formato: 'steam',
    tags: ['terror', 'sobrevivência', 'investigação'],
    descricao: 'Investigue um hospital abandonado onde algo terrível aconteceu.'
  },

  {
    id: 'phasmophobia',
    titulo: 'Phasmophobia',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/739630/header.jpg',
    link: 'https://store.steampowered.com/app/739630/Phasmophobia/',
    formato: 'steam',
    tags: ['terror', 'coop', 'investigação'],
    descricao: 'Investigue locais assombrados e descubra que tipo de entidade paranormal está presente.'
  },

  {
    id: 'amnesia-the-bunker',
    titulo: 'Amnesia: The Bunker',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1944430/header.jpg',
    link: 'https://store.steampowered.com/app/1944430/Amnesia_The_Bunker/',
    formato: 'steam',
    tags: ['terror', 'sobrevivência', 'mistério'],
    descricao: 'Sobreviva em um bunker abandonado durante a Primeira Guerra Mundial enquanto uma criatura caça você.'
  },

  {
    id: 'it-takes-two',
    titulo: 'It Takes Two',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1426210/header.jpg',
    link: 'https://store.steampowered.com/app/1426210/It_Takes_Two/',
    formato: 'steam',
    tags: ['coop', 'aventura', 'ação'],
    descricao: 'Uma aventura cooperativa em que duas pessoas precisam trabalhar juntas para atravessar um mundo cheio de desafios.'
  },

  {
    id: 'portal-2',
    titulo: 'Portal 2',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/620/header.jpg',
    link: 'https://store.steampowered.com/app/620/Portal_2/',
    formato: 'steam',
    tags: ['puzzle', 'aventura', 'coop'],
    descricao: 'Resolva quebra-cabeças usando portais e enfrente uma inteligência artificial cheia de personalidade.'
  },

  {
    id: 'alan-wake-2',
    titulo: 'Alan Wake 2',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/2231380/header.jpg',
    link: 'https://store.steampowered.com/app/2231380/Alan_Wake_2/',
    formato: 'steam',
    tags: ['terror', 'mistério', 'ação'],
    descricao: 'Entre em uma história de terror psicológico envolvendo o escritor Alan Wake e a agente Saga Anderson.'
  }
];

