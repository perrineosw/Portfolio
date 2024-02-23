import IBlog from "../../interfaces/IBlog";

import lois from "../../media/blogs/lois.png";

export const blogs: IBlog[] = [
  {
    color: "var(--blue-card)",
    colorDark: "var(--blue-dark)",
    date: "10 décembre 2023",
    image: lois,
    title: 'Les lois de Meir "Manny" Lehman',
    description: {
      title: ['Les lois de Meir "Manny" Lehman'],
      content: [
        "🚀 Passionné(e) par le développement web et la qualité logicielle, je suis actuellement en dernière année d'alternance en tant que développeuse fullstack. 🌐💻" +
          "\nAvez-vous déjà entendu parler des lois de Meir \"Manny\" Lehman qui ont marqué l'histoire de l'informatique et du développement logiciel ? 🤔 Ces lois, émises au cours du dernier quart du XXème siècle, continuent d'influencer notre façon d'appréhender les projets de développement, en particulier ceux de type-E, destinés à répondre à des besoins métier complexes dans le monde réel." +
          '\n📆 Dans un article fascinant du 16/08/2021, Enzo Sandré explore ces lois et leur pertinence actuelle. De la nécessité d\'un "Changement continu" à la gestion de la "Complexité croissante", en passant par l\'"Auto-régulation" des logiciels, chaque loi offre des enseignements précieux pour les professionnels du développement.' +
          "\nEn tant que jeune développeuse de 22 ans, je trouve particulièrement intéressante la manière dont ces lois décrivent la dynamique des projets logiciels et mettent en lumière l'importance de l'auto-régulation et de la croissance continue. 💡" +
          "\n🌱 Alors que j'aborde ma dernière année d'alternance, je m'efforce de comprendre ces principes et de les intégrer dans ma pratique quotidienne. Les lois de Lehman, bien que parfois controversées, offrent une perspective précieuse sur la façon dont les logiciels évoluent et changent au fil du temps." +
          "\n✨ Partagez votre expérience ou vos réflexions sur ces lois ! Comment les appliquez-vous dans votre quotidien de développeur(euse) ? Et surtout, n'oublions pas de remercier les chercheurs comme Enzo Sandré qui nous guident avec leur expertise et leurs découvertes dans le vaste monde du développement logiciel. 🙌👩‍💻👨‍💻" +
          "\nN'hésitez pas à consulter l'article en question ! 😉",
      ],
    },
    website: {
      title: ["Lien vers l'article", "Mon article LinkedIn"],
      content: [
        "https://enzosandre.fr/blog/2021/08/16/le-monde-a-t-il-oublie-manny-lehman.html",
        "https://www.linkedin.com/feed/update/urn:li:activity:7135167938189254656/",
      ],
    },
  },
];
