import React, {useState} from "react";
import ModaleBlogs from "./ModaleBlogs"
import gaspillage from "../../media/blogs/gaspillage.jpeg";
import accessibilite from "../../media/blogs/accessibilite.png";

interface Blog {
    color: string;
    image: string;
    title: string;
    description: {
        title: string[];
        content: string[];
    };
    website: string;
}

const blogs: Blog[] = [
    {
        color: 'perso-bg-orange',
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
                'De nos jours, des scandales ont été révélés autour du gaspillage alimentaire flagrant dans les grands magasins, où des produits parfaitement comestibles sont jetés. Bien que cela soit interdit depuis des années, les autorités tardent à agir pour changer la situation. En attendant, le peuple peut se mobiliser pour lancer un mouvement de solidarité grâce au troc alimentaire.\n' +
                '\nDonner ou échanger de la nourriture présente de nombreux avantages :\n' +
                '\n• Cela permet de lutter contre le gaspillage alimentaire ;\n• Cela fait plaisir à autrui ;\n• Cela favorise les contacts sociaux ;\n• Cela vient en aide aux plus démunis ;\n• Cela permet la découverte de nouvelles saveurs.\n' +
                '\nEn cas de surplus de nourriture, comme pour les commandes en gros, l\'offre peut temporairement dépasser la demande. Toutefois, si les professionnels restent en contact dans ce type de situation, le problème sera rapidement résolu ! Par exemple, échanger une quantité excessive de pêches contre une quantité excessive de poissons rééquilibrera l\'inventaire et tout reviendra à la normale.\n' +
                '\nLes échanges alimentaires peuvent affecter à la fois les gérants de magasins et les restaurateurs.',

                'Les pays occidentaux ne connaissent pas aujourd\'hui de véritables pénuries alimentaires. Notre niveau de vie s\'est nettement amélioré depuis la fin de la guerre, ce qui est une bonne nouvelle. Mais même pour les ménages qui choisissent de faire leurs courses de manière responsable, il arrive que cet accès facile à la consommation entraîne certains excès.\n' +
                '\nPar exemple, se promener dans un supermarché ou un petit magasin vous présente une myriade de tentations. Moitié prix pour un paquet de brioche acheté. Un pack de saumon bio est en promo à -30%... et vous repartez avec un cabas plus que prévu. D\'autres fois, vous avez simplement plus de stocks de nourriture que nécessaire. C\'est ce qu\'on appelle "des yeux plus gros qu\'un réfrigérateur".\n' +
                '\nCependant, la plupart de nos aliments sont périssables, en particulier les aliments frais. Votre réserve de citrouilles est épuisée à temps pour cet hiver ? Plus de viande que votre famille ne peut en manger avant la date de péremption ? Ou certains de vos produits frais arrivent-ils à expiration ?\n' +
                '\nN\'hésitez plus, remplacez vos courses ! S\'il y a trop de carottes, un membre de la famille qui habite à proximité peut avoir du pain supplémentaire. Ce sera un accord gagnant-gagnant.',

                'Certaines personnes aiment faire pousser des légumes et des herbes dans leurs jardins et patios. Certains ont la chance d\'avoir un pommier, un prunier ou même un verger entier tout près de chez eux. Des plantes maison et automatiquement bio, que demander de plus ?\n' +
                '\nCependant, les plantes et les arbres peuvent donner de grosses récoltes. Dans ce cas, ce serait vraiment dommage de les perdre ! Pour éviter un gaspillage malheureux, donner des légumes et des fruits à des amis, des connaissances et même de nouvelles personnes est une solution idéale pour éviter les pertes.\n' +
                '\nUn échange de nourriture est également une excellente idée. Offrez une partie de votre récolte à d\'autres ménages ! Peut-être vous réservons-nous de belles surprises en retour...\n' +
                '\nPour remplacer les aliments produits à la maison, vous aurez peut-être besoin d\'aliments non végétaux délicieux et nutritifs, comme des œufs de poule de votre jardin ou du fromage de chèvre. De plus, ce type de troc ne se limite pas aux échanges de bonnes pratiques. C\'est aussi l\'occasion de partager des moments chaleureux avec d\'autres résidents de votre quartier et de votre communauté et de rencontrer de nouveaux cœurs. Autant de raisons de s\'amuser !',

                'Partager la nourriture a toujours été synonyme de sociabilité et de plaisir partagé dans toutes les cultures du monde. Une autre façon de passer un bon moment avec les autres est de partager un repas cuisiné.\n' +
                '\nSelon la situation, nous échangerons ou donnerons simplement ce que nous aurons préparé nous-mêmes. Si vous avez cuisiné beaucoup de gratin ou de couscous pour une occasion spéciale, je suis sûr que tous vos invités auraient adoré. Cependant, nous sommes parfois confrontés à des invités moins gourmands, et ces petits morceaux de nourriture laissent une grande épave sur nos bras. Bien sûr, je suis très heureux que personne n\'ait rien manqué. Pourtant, j\'aimerais éviter de gaspiller des trucs supplémentaires.\n' +
                '\nCependant, la plupart de nos aliments sont périssables, en particulier les aliments frais. Votre réserve de citrouilles est épuisée à temps pour cet hiver ? Plus de viande que votre famille ne peut en manger avant la date de péremption ? Ou certains de vos produits frais arrivent-ils à expiration ?\n' +
                '\nN\'hésitez plus, remplacez vos courses ! S\'il y a trop de carottes, un membre de la famille qui habite à proximité peut avoir du pain supplémentaire. Ce sera un accord gagnant-gagnant.' +
                'Il existe un autre moyen d\'échanger de la nourriture : échanger des plats faits maison. Vos voisins et autres habitants de votre ville (ou du reste du monde) profiteront avec plaisir de vos talents culinaires. Ce n\'est pas tout! Les personnes en situation économique difficile seront affectées de la même manière, sinon plus.\n' +
                '\nUn autre scénario est lorsque vous voulez que les autres apprécient ce que vous pouvez cuisiner et apprécient plutôt vos talents de cuisinier. Chacun connaît sa propre recette avec sa propre touche unique. Les plats de différentes cultures sont particulièrement intéressants à partager.\n' +
                '\nQu\'il s\'agisse d\'une cuisine exotique ou des plus pures traditions d\'un pays, les repas succulents favorisent toujours le contact social et génèrent de la chaleur humaine.',

                'Pour toutes les raisons ci-dessus, vous pouvez accidentellement vous retrouver avec un excès de nourriture qui peut devenir rassis. Si vous partez en vacances avec un placard ou un réfrigérateur plein, votre nourriture sera gâtée et votre cœur sera brisé.\n' +
                '\nNotre objectif est d\'accélérer le troc au sens le plus large. Grâce à la publicité, les personnes dans le besoin peuvent obtenir de la nourriture gratuitement sans contacter l\'association.\n' +
                '\nTous ces aliments peuvent rendre heureux les gens en difficulté.\n' +
                '\nAlors qu\'attendez-vous pour t\'entez l\'expérience et rejoindre la communauté d\'AntiGaspi !'
            ]
        },
        website: ''
    },
    {
        color: 'perso-bg-green',
        image: accessibilite,
        title: 'Accessibilité numérique',
        description: {
            title: [
                'Le numérique : une révolution technologique qui a oublié une partie de la population',
                'L\'accessibilité numérique : une question de droits',
                'L\'accessibilité numérique : une opportunité pour tous'
            ],
            content: [
                'Depuis l\'émergence d\'Internet et la prolifération des technologies numériques, notre vie a ' +
                'considérablement changé. Nous sommes désormais en mesure de communiquer instantanément avec des ' +
                'personnes à travers le monde, d\'accéder à une quantité phénoménale d\'informations en quelques clics ' +
                'et d\'effectuer des achats en ligne en un rien de temps. Le numérique a également transformé notre ' +
                'façon de travailler et a ouvert de nouvelles perspectives d\'emploi.\n' +
                '\nCependant, malgré toutes les opportunités offertes par le numérique, il reste une partie de la ' +
                'population qui est laissée pour compte : les personnes atteintes de handicaps cognitifs, visuels ou ' +
                'physiques. Ces personnes rencontrent des difficultés pour accéder aux contenus numériques et pour ' +
                'utiliser les outils technologiques, ce qui les exclut de facto de la société numérique.',

                'Le numérique est un droit pour tous, mais pour que cela soit vrai, il faut que tous les contenus et ' +
                'tous les services numériques soient accessibles à tous. Malheureusement, ce n\'est pas encore le cas. ' +
                'Les personnes atteintes de handicaps cognitifs, visuels ou physiques sont confrontées à de nombreux ' +
                'obstacles lorsqu\'elles essaient d\'accéder aux contenus numériques.\n' +
                '\nCes obstacles peuvent prendre différentes formes : des sites web non conformes aux normes d\'accessibilité, ' +
                'des contenus non structurés qui ne peuvent pas être lus par les lecteurs d\'écran, des couleurs inappropriées ' +
                'qui rendent les contenus illisibles pour les personnes atteintes de daltonisme, etc.\n' +
                '\nIl est donc important que les entreprises, les organisations et les gouvernements prennent des mesures ' +
                'pour garantir l\'accessibilité numérique. Cela implique de concevoir des sites web et des applications ' +
                'qui respectent les normes d\'accessibilité, de créer des contenus structurés et de proposer des outils ' +
                'adaptés aux différents handicaps.',

                'Garantir l\'accessibilité numérique, c\'est permettre à tous les citoyens de participer pleinement à la ' +
                'société numérique. C\'est également offrir de nouvelles opportunités aux entreprises et aux organisations.\n' +
                '\nEn effet, en proposant des contenus numériques accessibles, les entreprises peuvent toucher un public ' +
                'plus large et mieux répondre aux besoins de leurs clients. De même, en offrant des outils adaptés aux ' +
                'différents handicaps, les organisations peuvent améliorer l\'efficacité et la productivité de leurs ' +
                'employés.\n' +
                '\nEn somme, garantir l\'accessibilité numérique, c\'est permettre à tous les citoyens de participer ' +
                'pleinement à la société numérique et de bénéficier de toutes les opportunités offertes par le numérique. ' +
                'C\'est également permettre aux entreprises et aux organisations de mieux répondre aux besoins de leurs ' +
                'clients et de leurs employés. Il est donc urgent que des actions soient entreprises pour rendre le numérique ' +
                'accessible à tous.'
            ]
        },
        website: ''
    }
];

const Blogs = (): JSX.Element => {
    const [showModal, setShowModal] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState({ image: '', title: '', description: { title: [''], content: [''] }, website: '' });

    const toggleModal = (blog: Blog) => {
        setSelectedBlog(blog);
        setShowModal(!showModal);
    };

    return (
        <div>
            <section className="container lg:rounded-2xl bg-white px-4 sm:px-5 md:px-10 lg:px-20">
                <div className="container mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
                    <div className="lg:pt-12 lg:pb-12 pt-24">
                        <h2 className="border-b-2 border-b-pink-600 text-[35px] font-medium pb-5 mb-5">
                            Mon blog
                        </h2>
                    </div>
                    {/* End py-12 */}

                    <div id="isotop-gallery-wrapper" className="mymix portfolio_list-two three-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6">
                            {/* portfolio items start */}
                            {blogs.map((blog, index) => (
                                <div key={index} className={`py-4 ${blog.color} pl-5 pr-3 space-y-2 mb-6 rounded-lg`}>
                                    <button onClick={() => toggleModal(blog)} className="w-full">
                                        <div className="overflow-hidden rounded-lg">
                                            <img className="object-cover w-full h-40 rounded-lg cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
                                                 src={blog.image} alt={`Image du blog : ${blog.title}`}/>
                                        </div>
                                        <h2 className="pt-5 font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252]">
                                            {blog.title}
                                        </h2>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <ModaleBlogs isOpen={showModal} onClose={() => setShowModal(false)}
                                   image={selectedBlog.image}
                                   title={selectedBlog.title}
                                   description={selectedBlog.description}
                                   website={selectedBlog.website}
                    />
                </div>
            </section>
        </div>
    )
}

export default Blogs;