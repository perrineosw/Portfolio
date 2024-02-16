import IBlog from "./IBlog";
import gaspillage from "../../media/blogs/gaspillage.png";
import accessibilite from "../../media/blogs/accessibilite.png";
import accessibilite_hand from "../../media/blogs/accessibilite-hand.jpeg";
import lois from "../../media/blogs/lois.png";
import contraste from "../../media/blogs/contraste.png";

export const blogs: IBlog[] = [
  {
      color: 'perso-bg-yellow',
      date: '25 janvier 2024',
      image: contraste,
      title: 'Rendons nos Sites Web Plus Accessibles : L\'Importance du Design et du Contraste',
      description: {
          title: [
              'Salut à tous 👋',
              'Pourquoi le contraste, c\'est la Clé 🔑',
              'Les règles du jeu en contraste ✅',
              'Le design, un héros de l\'accessibilité 🦸‍♂',
              'Ensemble pour un web accessible 🤝'
          ],
          content: [
              'Dans notre aventure numérique, il est essentiel de se rappeler que l\'accessibilité web est plus qu\'une simple conformité - c\'est une porte ouverte vers un monde plus inclusif. Aujourd\'hui, zoom sur un aspect super important mais souvent négligé : le design et, spécifiquement, le niveau de contraste. 🌈',
              'Imaginez lire un texte avec une couleur presque identique à son arrière-plan. Fatigant, non ? C\'est là que le contraste entre en jeu. Pour ceux qui ont des troubles de la vision, un contraste bien ajusté peut vraiment faciliter la lecture. Et n\'oublions pas, même dans des conditions d\'éclairage pas top, un bon contraste aide tout le monde. 👀',
              'Selon les normes WCAG, on vise un ratio de contraste d\'au moins 4,5:1 pour le texte standard et 3:1 pour les gros titres. Ces chiffres assurent que le texte ressort bien, pour une lecture confortable pour la majorité d\'entre nous.',
              'En tant que créateurs du web, c\'est notre mission de créer des sites qui sont beaux ET accessibles. Ça veut dire penser aux couleurs, tester nos designs sous toutes les coutures, et garder l\'accessibilité en tête à chaque étape.',
              'L\'accessibilité ne doit pas être une réflexion de dernière minute. En intégrant des critères de contraste dès la phase de conception, on ouvre nos sites à un public plus large. Discutons, partageons nos idées et astuces pour rendre le web accessible à tous ! 💪'
          ]
      },
      website: {
          title: ['Mon article LinkedIn'],
          content: ['https://www.linkedin.com/posts/perrine-oswald_rendons-nos-sites-web-plus-accessibles-activity-7156215099836305409-jVlR/?originalSubdomain=fr']
      }
  },
  {
      color: 'perso-bg-orange',
      date: '10 décembre 2023',
      image: lois,
      title: 'Les lois de Meir "Manny" Lehman',
      description: {
          title: ['Les lois de Meir "Manny" Lehman'],
          content: [
              '🚀 Passionné(e) par le développement web et la qualité logicielle, je suis actuellement en dernière année d\'alternance en tant que développeuse fullstack. 🌐💻' +
              '\nAvez-vous déjà entendu parler des lois de Meir "Manny" Lehman qui ont marqué l\'histoire de l\'informatique et du développement logiciel ? 🤔 Ces lois, émises au cours du dernier quart du XXème siècle, continuent d\'influencer notre façon d\'appréhender les projets de développement, en particulier ceux de type-E, destinés à répondre à des besoins métier complexes dans le monde réel.' +
              '\n📆 Dans un article fascinant du 16/08/2021, Enzo Sandré explore ces lois et leur pertinence actuelle. De la nécessité d\'un "Changement continu" à la gestion de la "Complexité croissante", en passant par l\'"Auto-régulation" des logiciels, chaque loi offre des enseignements précieux pour les professionnels du développement.' +
              '\nEn tant que jeune développeuse de 22 ans, je trouve particulièrement intéressante la manière dont ces lois décrivent la dynamique des projets logiciels et mettent en lumière l\'importance de l\'auto-régulation et de la croissance continue. 💡' +
              '\n🌱 Alors que j\'aborde ma dernière année d\'alternance, je m\'efforce de comprendre ces principes et de les intégrer dans ma pratique quotidienne. Les lois de Lehman, bien que parfois controversées, offrent une perspective précieuse sur la façon dont les logiciels évoluent et changent au fil du temps.' +
              '\n✨ Partagez votre expérience ou vos réflexions sur ces lois ! Comment les appliquez-vous dans votre quotidien de développeur(euse) ? Et surtout, n\'oublions pas de remercier les chercheurs comme Enzo Sandré qui nous guident avec leur expertise et leurs découvertes dans le vaste monde du développement logiciel. 🙌👩‍💻👨‍💻' +
              '\nN\'hésitez pas à consulter l\'article en question ! 😉'
          ]
      },
      website:  {
          title: [
              'Lien vers l\'article', 
              'Mon article LinkedIn'
          ],
          content: [
              'https://enzosandre.fr/blog/2021/08/16/le-monde-a-t-il-oublie-manny-lehman.html', 
              'https://www.linkedin.com/feed/update/urn:li:activity:7135167938189254656/'
          ]
      }
  },
  {
      color: 'perso-bg-green',
      date: '31 mars 2023',
      image: accessibilite_hand,
      title: 'Garantir l\'égalité d\'accès à l\'information en ligne : l\'importance de l\'accessibilité du web pour les personnes handicapées',
      description: {
          title: [
              'Les obstacles rencontrés par les personnes handicapées sur le web',
              'Les avantages de l\'accessibilité du web pour les personnes handicapées',
              'L\'importance légale et éthique de l\'accessibilité du web'
          ],
          content: [
              'Les personnes handicapées peuvent rencontrer de nombreux obstacles lorsqu\'elles naviguent sur Internet, ce qui peut les empêcher de participer pleinement à la vie en ligne. Les personnes malvoyantes ou aveugles peuvent avoir des difficultés à lire le texte s\'il n\'est pas suffisamment contrasté ou s\'il n\'est pas accompagné d\'une description alternative pour les images. 👁️‍🗨️ ' +
              '\nLes personnes sourdes ou malentendantes peuvent avoir des difficultés à comprendre les vidéos si elles ne sont pas sous-titrées ou si elles ne disposent pas d\'une transcription écrite. Les personnes atteintes d\'un trouble cognitif peuvent avoir des difficultés à comprendre les informations si elles sont présentées de manière complexe ou confuse. 👂 🧠' +
              '\nIl est donc crucial que les concepteurs de sites web et les développeursprennent en compte l\'accessibilité dès le début du processus de conception et d\'élaboration de sites web. Cela peut se faire en utilisant des outils et des techniques spécifiques, tels que l\'utilisation de textes alternatifs pour les images, de couleurs contrastantes pour le texte et les arrière-plans, et de sous-titres ou de transcriptions pour les vidéos.',
              'L\'accessibilité du web est essentielle pour garantir que les personnes handicapées puissent accéder aux mêmes informations et aux mêmes services en ligne que les personnes non handicapées. Cela leur permet de participer pleinement à la vie en ligne, de communiquer avec les autres, de trouver des emplois, de suivre des cours en ligne, de gérer leurs finances et de réaliser d\'autres activités importantes. 🎓 💳' +
              '\nEn outre, l\'accessibilité du web peut également améliorer l\'expérience utilisateur pour tous les utilisateurs, en rendant les sites web plus faciles à naviguer et à utiliser. Les améliorations apportées à l\'accessibilité peuvent bénéficier à d\'autres utilisateurs, tels que les personnes âgées, les personnes ayant une connexion Internet lente ou les utilisateurs de dispositifs mobiles. 👵 📱',
              'L\'accessibilité du web est également importante d\'un point de vue légal et éthique ⚖️. Dans de nombreux pays, il existe des lois qui obligent les sites web à être accessibles aux personnes handicapées. Par exemple, aux États-Unis, la loi sur les Américains handicapés (ADA) exige que les sites web des entreprises soient accessibles aux personnes handicapées. ♿' +
              '\nDe même, en Europe, la directive sur l\'accessibilité des sites web et des applications mobiles des organismes du secteur public exige que les sites web des organismes publics soient accessibles aux personnes handicapées.' +
              '\nEn fin de compte, l\'accessibilité du web est essentielle pour permettre aux personnes handicapées de participer pleinement à la vie en ligne. Elle est également importante d\'un point de vue légal et éthique, et peut bénéficier à d\'autres utilisateurs. Les concepteurs et développeurs de sites web ont donc un rôle important à jouer pour garantir l\'accessibilité du web pour tous. 👩‍💻👨‍💻'
          ],
      },
      website: {title: [''], content: ['']}
  },
  {
      color: 'perso-bg-purple',
      date: '11 janvier 2023',
      image: accessibilite,
      title: 'Accessibilité numérique',
      description: {
          title: [
              'Le numérique : une révolution technologique qui a oublié une partie de la population',
              'L\'accessibilité numérique : une question de droits',
              'L\'accessibilité numérique : une opportunité pour tous'
          ],
          content: [
              'Depuis l\'émergence d\'Internet et la prolifération des technologies numériques, notre vie a considérablement changé. Nous sommes désormais en mesure de communiquer instantanément avec des personnes à travers le monde, d\'accéder à une quantité phénoménale d\'informations en quelques clics et d\'effectuer des achats en ligne en un rien de temps. Le numérique a également transformé notre façon de travailler et a ouvert de nouvelles perspectives d\'emploi. 🌍 💼' +
              '\nCependant, malgré toutes les opportunités offertes par le numérique, il reste une partie de la population qui est laissée pour compte : les personnes atteintes de handicaps cognitifs, visuels ou physiques. ♿' +
              '\nCes personnes rencontrent des difficultés pour accéder aux contenus numériques et pour utiliser les outils technologiques, ce qui les exclut de facto de la société numérique. 🧠 👀',

              'Le numérique est un droit pour tous, mais pour que cela soit vrai, il faut que tous les contenus et tous les services numériques soient accessibles à tous. Malheureusement, ce n\'est pas encore le cas. Les personnes atteintes de handicaps cognitifs, visuels ou physiques sont confrontées à de nombreux obstacles lorsqu\'elles essaient d\'accéder aux contenus numériques. 👫' +
              '\nCes obstacles peuvent prendre différentes formes : des sites web non conformes aux normes d\'accessibilité, des contenus non structurés qui ne peuvent pas être lus par les lecteurs d\'écran, des couleurs inappropriées qui rendent les contenus illisibles pour les personnes atteintes de daltonisme, etc. 🚫' +
              '\nIl est donc important que les entreprises, les organisations et les gouvernements prennent des mesures pour garantir l\'accessibilité numérique. Cela implique de concevoir des sites web et des applications qui respectent les normes d\'accessibilité, de créer des contenus structurés et de proposer des outils adaptés aux différents handicaps. 🏢 ♿',

              'Garantir l\'accessibilité numérique, c\'est permettre à tous les citoyens de participer pleinement à la société numérique. C\'est également offrir de nouvelles opportunités aux entreprises et aux organisations.' +
              '\nEn effet, en proposant des contenus numériques accessibles, les entreprises peuvent toucher un public plus large et mieux répondre aux besoins de leurs clients. De même, en offrant des outils adaptés aux différents handicaps, les organisations peuvent améliorer l\'efficacité et la productivité de leurs employés. 👥' +
              '\nEn somme, garantir l\'accessibilité numérique, c\'est permettre à tous les citoyens de participer pleinement à la société numérique et de bénéficier de toutes les opportunités offertes par le numérique. C\'est également permettre aux entreprises et aux organisations de mieux répondre aux besoins de leurs clients et de leurs employés. Il est donc urgent que des actions soient entreprises pour rendre le numérique accessible à tous. ✊ 👍'
          ]
      },
      website: {title: [''], content: ['']}
  },
  {
      color: 'perso-bg-blue',
      date: '17 novembre 2022',
      image: gaspillage,
      title: 'Lutter contre le gaspillage alimentaire',
      description: {
          title: [
              'Découvrez les multiples avantages du troc alimentaire !',
              'Échangez des aliments lorsque votre frigo est rempli à ras bord',
              'Offrez vos fruits et légumes à ceux qui en ont besoin',
              'Partagez vos délicieuses créations culinaires avec d\'autres personnes',
              'Faites preuve de solidarité en offrant de la nourriture à d\'autres personnes dans le besoin'
          ],
          content: [
              'De nos jours, des scandales ont été révélés autour du gaspillage alimentaire flagrant dans les grands magasins, où des produits parfaitement comestibles sont jetés. Bien que cela soit interdit depuis des années, les autorités tardent à agir pour changer la situation. En attendant, le peuple peut se mobiliser pour lancer un mouvement de solidarité grâce au troc alimentaire.' +
              '\nDonner ou échanger de la nourriture présente de nombreux avantages :' +
              '\n• Cela permet de lutter contre le gaspillage alimentaire, 🌍' + 
              '\n• Cela fait plaisir à autrui, 😊' + 
              '\n• Cela favorise les contacts sociaux, 🤝' + 
              '\n• Cela vient en aide aux plus démunis, 🆘' + 
              '\n• Cela permet la découverte de nouvelles saveurs. 🍲' +
              '\nEn cas de surplus de nourriture, comme pour les commandes en gros, l\'offre peut temporairement dépasser la demande. Toutefois, si les professionnels restent en contact dans ce type de situation, le problème sera rapidement résolu ! Par exemple, échanger une quantité excessive de pêches contre une quantité excessive de poissons rééquilibrera l\'inventaire et tout reviendra à la normale.\n' +
              '\nLes échanges alimentaires peuvent affecter à la fois les gérants de magasins et les restaurateurs. 🍽️',

              '\nLes pays occidentaux ne connaissent pas aujourd\'hui de véritables pénuries alimentaires. Notre niveau de vie s\'est nettement amélioré depuis la fin de la guerre, ce qui est une bonne nouvelle. Mais même pour les ménages qui choisissent de faire leurs courses de manière responsable, il arrive que cet accès facile à la consommation entraîne certains excès. 🛒' +
              '\nPar exemple, se promener dans un supermarché ou un petit magasin vous présente une myriade de tentations. Moitié prix pour un paquet de brioche acheté. Un pack de saumon bio est en promo à -30%... et vous repartez avec un cabas plus que prévu. D\'autres fois, vous avez simplement plus de stocks de nourriture que nécessaire. C\'est ce qu\'on appelle "des yeux plus gros qu\'un réfrigérateur".' +
              '\nCependant, la plupart de nos aliments sont périssables, en particulier les aliments frais. Votre réserve de citrouilles est épuisée à temps pour cet hiver ? Plus de viande que votre famille ne peut en manger avant la date de péremption ? Ou certains de vos produits frais arrivent-ils à expiration ? 🥦 🥕' +
              '\nN\'hésitez plus, remplacez vos courses ! S\'il y a trop de carottes, un membre de la famille qui habite à proximité peut avoir du pain supplémentaire. Ce sera un accord gagnant-gagnant. 🤝',

              '\nCertaines personnes aiment faire pousser des légumes et des herbes dans leurs jardins et patios. Certains ont la chance d\'avoir un pommier, un prunier ou même un verger entier tout près de chez eux. Des plantes maison et automatiquement bio, que demander de plus ? 🥕 🍏 🌱' +
              '\nCependant, les plantes et les arbres peuvent donner de grosses récoltes. Dans ce cas, ce serait vraiment dommage de les perdre ! Pour éviter un gaspillage malheureux, donner des légumes et des fruits à des amis, des connaissances et même de nouvelles personnes est une solution idéale pour éviter les pertes. 🍎' +
              '\nUn échange de nourriture est également une excellente idée. Offrez une partie de votre récolte à d\'autres ménages ! Peut-être vous réservons-nous de belles surprises en retour...' +
              '\nPour remplacer les aliments produits à la maison, vous aurez peut-être besoin d\'aliments non végétaux délicieux et nutritifs, comme des œufs de poule de votre jardin ou du fromage de chèvre. De plus, ce type de troc ne se limite pas aux échanges de bonnes pratiques. C\'est aussi l\'occasion de partager des moments chaleureux avec d\'autres résidents de votre quartier et de votre communauté et de rencontrer de nouveaux cœurs. Autant de raisons de s\'amuser ! 🥚 ❤️',

              '\nPartager la nourriture a toujours été synonyme de sociabilité et de plaisir partagé dans toutes les cultures du monde. Une autre façon de passer un bon moment avec les autres est de partager un repas cuisiné. 🍲' +
              '\nSelon la situation, nous échangerons ou donnerons simplement ce que nous aurons préparé nous-mêmes. Si vous avez cuisiné beaucoup de gratin ou de couscous pour une occasion spéciale, je suis sûr que tous vos invités auraient adoré. Cependant, nous sommes parfois confrontés à des invités moins gourmands, et ces petits morceaux de nourriture laissent une grande épave sur nos bras. Bien sûr, je suis très heureux que personne n\'ait rien manqué. Pourtant, j\'aimerais éviter de gaspiller des trucs supplémentaires. 🍛' +
              '\nCependant, la plupart de nos aliments sont périssables, en particulier les aliments frais. Votre réserve de citrouilles est épuisée à temps pour cet hiver ? Plus de viande que votre famille ne peut en manger avant la date de péremption ? Ou certains de vos produits frais arrivent-ils à expiration ? 🥦 🍅 🥩' +
              '\nN\'hésitez plus, remplacez vos courses ! S\'il y a trop de carottes, un membre de la famille qui habite à proximité peut avoir du pain supplémentaire. Ce sera un accord gagnant-gagnant. 🤝' +
              '\nIl existe un autre moyen d\'échanger de la nourriture : échanger des plats faits maison. Vos voisins et autres habitants de votre ville (ou du reste du monde) profiteront avec plaisir de vos talents culinaires. Ce n\'est pas tout! Les personnes en situation économique difficile seront affectées de la même manière, sinon plus. 👩‍🍳' +
              '\nUn autre scénario est lorsque vous voulez que les autres apprécient ce que vous pouvez cuisiner et apprécient plutôt vos talents de cuisinier. Chacun connaît sa propre recette avec sa propre touche unique. Les plats de différentes cultures sont particulièrement intéressants à partager.' +
              '\nQu\'il s\'agisse d\'une cuisine exotique ou des plus pures traditions d\'un pays, les repas succulents favorisent toujours le contact social et génèrent de la chaleur humaine. ❤️ 🍜 🌍',

              '\nPour toutes les raisons ci-dessus, vous pouvez accidentellement vous retrouver avec un excès de nourriture qui peut devenir rassis. Si vous partez en vacances avec un placard ou un réfrigérateur plein, votre nourriture sera gâtée et votre cœur sera brisé. 💔' +
              '\nNotre objectif est d\'accélérer le troc au sens le plus large. Grâce à la publicité, les personnes dans le besoin peuvent obtenir de la nourriture gratuitement sans contacter l\'association. 📢' +
              '\nTous ces aliments peuvent rendre heureux les gens en difficulté. 😊' +
              '\nAlors qu\'attendez-vous pour t\'entez l\'expérience et rejoindre la communauté ! 🤝'
          ]
      },
      website: {title: [''], content: ['']}
  },
];