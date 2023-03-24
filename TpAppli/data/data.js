import Category from "../models/category";
import Game from "../models/game";

export const CATEGORIES = [

    new Category('c1', 'Aventure', '#000000'),
    new Category('c2', 'RPG', '#000000'),
    new Category('c3', 'Action', '#000000'),
    new Category('c4', 'FPS', '#000000'),
    new Category('c5', 'Soul-like', '#000000'),
    new Category('c6', 'Infiltration', '#000000'),
    
];

export const GAMES = [

    new Game(
        'g1',
        ['c1','c3'],
        "Assassin's Creed",
        "https://image.jeuxvideo.com/images/pc/a/s/ascrpc0f.jpg",
        "Action / Infiltration / Aventure ",
        "Jeu d'action-aventure en monde ouvert, Assassin's Creed prend place en 1191 alors que la troisième croisade secoue la Terre sainte. Le joueur se retrouve plongé dans le Moyen Orient de l'époque aux côtés d'Altaïr, un assassin d'élite ayant pour mission de mettre un terme aux hostilités en s'attaquant à la fois aux Croisés et aux Sarrasins.",
        
    ),
    new Game(
        'g2',
        ['c1','c3','c6'],
        "Assassin's Creed II",
        "https://image.jeuxvideo.com/images/jaquettes/00031719/jaquette-assassin-s-creed-ii-pc-cover-avant-g.jpg",
        "Action / Aventure ",
        "Jeu d'action-aventure en monde ouvert, Assassin's Creed II prend place durant la Renaissance italienne. Le joueur incarne Ezio Auditore da Firenze, jeune noble italien de 17 ans, qui perd sa famille, assassinée sous ses yeux. Obnubilé par sa soif de vengeance, sa quête le ménera sur les traces des Templiers, en passant par de nombreuses villes emblématiques d'Italie dont Venise et Florence.",
        
    ),
    new Game(
        'g3',
        ['c2','c5'],
        "Elden Ring",
        "https://image.jeuxvideo.com/medias/163301/1633006670-7022-jaquette-avant.jpg",
        "RPG / Soul-like",
        "Elden Ring est le nouveau jeu de From Software. Il s'agit d'un Action-RPG à la troisième personne qui se déroule dans un monde ouvert. Le jeu marque la collaboration entre Hidetaka Miyazaki et George R. R. Martin, le créateur de Game of Thrones",
        
    ),
    new Game(
        'g4',
        ['c3','c5'],
        "Sekiro Shadows Die Twice",
        "https://image.jeuxvideo.com/medias/152905/1529054204-3792-jaquette-avant.jpg",
        "Action / Soul-like",
        "Sekiro Shadows Die Twice est un jeu d'action qui vous envoie dans le Japon féodal, à la fin du XVIème siècle. Incarnez le loup à un bras : un étrange samouraï équipé d’une « prothèse shinobi » en guise de main gauche et partez à la poursuite d'un jeune seigneur enlevé.",
        
    ),
    new Game(
        'g5',
        ['c1','c3','c4'],
        "Destiny",
        "https://image.jeuxvideo.com/images/jaquettes/00047879/jaquette-destiny-playstation-4-ps4-cover-avant-g-1410169099.jpg",
        "Action / Aventure / FPS",
        "Réalisé par les créateurs de la série Halo, Destiny est un FPS dans lequel le joueur se bat dans un contexte futuriste. Celui-ci doit lutter contre des hordes d'aliens, seul mais surtout en coopération ou en multijoueur, modes pour lesquels le jeu est spécialement prévu. Celui-ci peut améliorer ses armes en récoltant des matériaux dans les zones du jeu, puis participer à des combats où la stratégie prime.",
        
    ),
    new Game(
        'g6',
        ['c1','c3','c4'],
        "Destiny 2",
        "https://image.jeuxvideo.com/medias/150607/1506071350-4107-jaquette-avant.jpg",
        "Action / Aventure / FPS",
        "Destiny 2 est un jeu de type FPS. Les joueurs peuvent y importer les personnages qu'ils ont créés et améliorés dans ce dernier. L'histoire prend place alors que la dernière cité sur Terre, alors siège de l'Avant-garde, est attaquée par les forces de la Légion Rouge.",
        
    ),
    new Game(
        'g7',
        ['c1','c3','c5'],
        "Bloodborne",
        "https://image.jeuxvideo.com/medias/142290/1422901184-8553-jaquette-avant.jpg",
        "Action / Aventure / Soul-like",
        "Jeu d'action-aventure sur PS4 dans la droite lignée des autres titres de From Software (Dark Souls, Demon's Souls), Bloodborne prend place dans un univers sombre et fantastique qui s'accorde à merveille avec le gameplay, sévère et punitif.",
        
    ),
]