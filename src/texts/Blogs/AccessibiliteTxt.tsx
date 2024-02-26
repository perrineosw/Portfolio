import type IBlog from "../../interfaces/IBlog";

import accessibilite from "../../media/blogs/accessibilite.png";
import accessibilite_hand from "../../media/blogs/accessibilite-hand.jpeg";
import contraste from "../../media/blogs/contraste.png";

import accessibilite1 from "../../media/blogs/accessibilte-c-est-quoi/1.png";
import accessibilite2 from "../../media/blogs/accessibilte-c-est-quoi/2.png";
import accessibilite3 from "../../media/blogs/accessibilte-c-est-quoi/3.png";
import accessibilite4 from "../../media/blogs/accessibilte-c-est-quoi/4.png";
import accessibilite5 from "../../media/blogs/accessibilte-c-est-quoi/5.png";
import accessibilitePdf from "../../media/blogs/accessibilte-c-est-quoi/accessibilite.pdf";

export const blogs: IBlog[] = [
  {
    color: "var(--red-card)",
    colorDark: "var(--red-dark)",
    date: "20 février 2024",
    image: accessibilite,
    title: "Accessibilité numérique",
    description: {
      title: ["L'accessibilite numérique : c'est quoi ?"],
      content: [
        "Je suis développeuse web en dernière année d'étude et je plonge dans l'univers de l'accessibilité numérique 🌐✨, un domaine trop souvent laissé de côté." +
          "\nComment se fait-il que, malgré les progrès du numérique, certains avec des handicaps soient encore oubliés? 🤔💔" +
          "\nC'est une invitation à réfléchir sur la nécessité de rendre le web accessible pour tous. 🚀💡" +
          "\nDans ce premier post je vous présente ce qu'est l'accessibilité numérique, son importance et les enjeux liés !! 😊" +
          "\n#AccessibilitéNumérique #Web #WebPourTous #DroitAuNumérique",
      ],
    },
    website: {
      title: ["Lien vers mon article LinkedIn"],
      content: [
        "https://www.linkedin.com/feed/update/urn:li:activity:7165276362889498625/",
      ],
    },
    images: [
      {
        name: accessibilite1,
        alt: "L'accessibilité numérique : c'est quoi ?",
      },
      {
        name: accessibilite2,
        alt:
          "Le numérique : une révolution technologique qui a oublié une partie de la population" +
          "\nDepuis l'émergence d'Internet et la prolifération des technologies numériques, notre vie a considérablement changé. Nous sommes désormais en mesure de communiquer instantanément avec des personnes à travers le monde, d'accéder à une quantité phénoménale d'informations en quelques clics et d'effectuer des achats en ligne en un rien de temps. Le numérique a également transformé notre façon de travailler et a ouvert de nouvelles perspectives d'emploi. 🌍 💼" +
          "\nCependant, malgré toutes les opportunités offertes par le numérique, il reste une partie de la population qui est laissée pour compte : les personnes atteintes de handicaps cognitifs, visuels ou physiques. ♿" +
          "\nCes personnes rencontrent des difficultés pour accéder aux contenus numériques et pour utiliser les outils technologiques, ce qui les exclut de facto de la société numérique. 🧠 👀",
      },
      {
        name: accessibilite3,
        alt:
          "L'accessibilité numérique : une question de droits" +
          "\nLe numérique est un droit pour tous, mais pour que cela soit vrai, il faut que tous les contenus et tous les services numériques soient accessibles à tous. Malheureusement, ce n'est pas encore le cas. Les personnes atteintes de handicaps cognitifs, visuels ou physiques sont confrontées à de nombreux obstacles lorsqu'elles essaient d'accéder aux contenus numériques. 👫" +
          "\nCes obstacles peuvent prendre différentes formes : des sites web non conformes aux normes d'accessibilité, des contenus non structurés qui ne peuvent pas être lus par les lecteurs d'écran, des couleurs inappropriées qui rendent les contenus illisibles pour les personnes atteintes de daltonisme, etc. 🚫" +
          "\nIl est donc important que les entreprises, les organisations et les gouvernements prennent des mesures pour garantir l'accessibilité numérique. Cela implique de concevoir des sites web et des applications qui respectent les normes d'accessibilité, de créer des contenus structurés et de proposer des outils adaptés aux différents handicaps. 🏢 ♿",
      },
      {
        name: accessibilite4,
        alt:
          "L'accessibilité numérique : une opportunité pour tous" +
          "\nGarantir l'accessibilité numérique, c'est permettre à tous les citoyens de participer pleinement à la société numérique. C'est également offrir de nouvelles opportunités aux entreprises et aux organisations." +
          "\nEn effet, en proposant des contenus numériques accessibles, les entreprises peuvent toucher un public plus large et mieux répondre aux besoins de leurs clients. De même, en offrant des outils adaptés aux différents handicaps, les organisations peuvent améliorer l'efficacité et la productivité de leurs employés. 👥" +
          "\nEn somme, garantir l'accessibilité numérique, c'est permettre à tous les citoyens de participer pleinement à la société numérique et de bénéficier de toutes les opportunités offertes par le numérique. C'est également permettre aux entreprises et aux organisations de mieux répondre aux besoins de leurs clients et de leurs employés. Il est donc urgent que des actions soient entreprises pour rendre le numérique accessible à tous. ✊ 👍",
      },
      {
        name: accessibilite5,
        alt: "Article rédigé par Perrine OSWALD",
      },
    ],
    files: [
      {
        src: accessibilitePdf,
        name: "Accessibilite_numerique_c_est_quoi.pdf",
        titleButton: "Télécharger les images au format PDF",
      },
    ],
  },
  {
    color: "var(--pink-card)",
    colorDark: "var(--pink-dark)",
    date: "25 janvier 2024",
    image: contraste,
    title:
      "Rendons nos Sites Web Plus Accessibles : L'Importance du Design et du Contraste",
    description: {
      title: [
        "Salut à tous 👋",
        "Pourquoi le contraste, c'est la Clé 🔑",
        "Les règles du jeu en contraste ✅",
        "Le design, un héros de l'accessibilité 🦸‍♂",
        "Ensemble pour un web accessible 🤝",
      ],
      content: [
        "Dans notre aventure numérique, il est essentiel de se rappeler que l'accessibilité web est plus qu'une simple conformité - c'est une porte ouverte vers un monde plus inclusif. Aujourd'hui, zoom sur un aspect super important mais souvent négligé : le design et, spécifiquement, le niveau de contraste. 🌈",
        "Imaginez lire un texte avec une couleur presque identique à son arrière-plan. Fatigant, non ? C'est là que le contraste entre en jeu. Pour ceux qui ont des troubles de la vision, un contraste bien ajusté peut vraiment faciliter la lecture. Et n'oublions pas, même dans des conditions d'éclairage pas top, un bon contraste aide tout le monde. 👀",
        "Selon les normes WCAG, on vise un ratio de contraste d'au moins 4,5:1 pour le texte standard et 3:1 pour les gros titres. Ces chiffres assurent que le texte ressort bien, pour une lecture confortable pour la majorité d'entre nous.",
        "En tant que créateurs du web, c'est notre mission de créer des sites qui sont beaux ET accessibles. Ça veut dire penser aux couleurs, tester nos designs sous toutes les coutures, et garder l'accessibilité en tête à chaque étape.",
        "L'accessibilité ne doit pas être une réflexion de dernière minute. En intégrant des critères de contraste dès la phase de conception, on ouvre nos sites à un public plus large. Discutons, partageons nos idées et astuces pour rendre le web accessible à tous ! 💪",
      ],
    },
    website: {
      title: ["Lien vers mon article LinkedIn"],
      content: [
        "https://www.linkedin.com/posts/perrine-oswald_rendons-nos-sites-web-plus-accessibles-activity-7156215099836305409-jVlR/?originalSubdomain=fr",
      ],
    },
  },
  {
    color: "var(--purple-card)",
    colorDark: "var(--purple-dark)",
    date: "31 mars 2023",
    image: accessibilite_hand,
    title:
      "Garantir l'égalité d'accès à l'information en ligne : l'importance de l'accessibilité du web pour les personnes handicapées",
    description: {
      title: [
        "Les obstacles rencontrés par les personnes handicapées sur le web",
        "Les avantages de l'accessibilité du web pour les personnes handicapées",
        "L'importance légale et éthique de l'accessibilité du web",
      ],
      content: [
        "Les personnes handicapées peuvent rencontrer de nombreux obstacles lorsqu'elles naviguent sur Internet, ce qui peut les empêcher de participer pleinement à la vie en ligne. Les personnes malvoyantes ou aveugles peuvent avoir des difficultés à lire le texte s'il n'est pas suffisamment contrasté ou s'il n'est pas accompagné d'une description alternative pour les images. 👁️‍🗨️ " +
          "\nLes personnes sourdes ou malentendantes peuvent avoir des difficultés à comprendre les vidéos si elles ne sont pas sous-titrées ou si elles ne disposent pas d'une transcription écrite. Les personnes atteintes d'un trouble cognitif peuvent avoir des difficultés à comprendre les informations si elles sont présentées de manière complexe ou confuse. 👂 🧠" +
          "\nIl est donc crucial que les concepteurs de sites web et les développeursprennent en compte l'accessibilité dès le début du processus de conception et d'élaboration de sites web. Cela peut se faire en utilisant des outils et des techniques spécifiques, tels que l'utilisation de textes alternatifs pour les images, de couleurs contrastantes pour le texte et les arrière-plans, et de sous-titres ou de transcriptions pour les vidéos.",
        "L'accessibilité du web est essentielle pour garantir que les personnes handicapées puissent accéder aux mêmes informations et aux mêmes services en ligne que les personnes non handicapées. Cela leur permet de participer pleinement à la vie en ligne, de communiquer avec les autres, de trouver des emplois, de suivre des cours en ligne, de gérer leurs finances et de réaliser d'autres activités importantes. 🎓 💳" +
          "\nEn outre, l'accessibilité du web peut également améliorer l'expérience utilisateur pour tous les utilisateurs, en rendant les sites web plus faciles à naviguer et à utiliser. Les améliorations apportées à l'accessibilité peuvent bénéficier à d'autres utilisateurs, tels que les personnes âgées, les personnes ayant une connexion Internet lente ou les utilisateurs de dispositifs mobiles. 👵 📱",
        "L'accessibilité du web est également importante d'un point de vue légal et éthique ⚖️." +
          "\nDans de nombreux pays, il existe des lois qui obligent les sites web à être accessibles aux personnes handicapées. Par exemple, aux États-Unis, la loi sur les Américains handicapés (ADA) exige que les sites web des entreprises soient accessibles aux personnes handicapées. ♿" +
          "\nDe même, en Europe, la directive sur l'accessibilité des sites web et des applications mobiles des organismes du secteur public exige que les sites web des organismes publics soient accessibles aux personnes handicapées." +
          "\nEn fin de compte, l'accessibilité du web est essentielle pour permettre aux personnes handicapées de participer pleinement à la vie en ligne. Elle est également importante d'un point de vue légal et éthique, et peut bénéficier à d'autres utilisateurs. Les concepteurs et développeurs de sites web ont donc un rôle important à jouer pour garantir l'accessibilité du web pour tous. 👩‍💻👨‍💻",
      ],
    },
    website: { title: [""], content: [""] },
  },
];
