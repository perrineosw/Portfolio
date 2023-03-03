import React from "react";
import profile from "../images/profile-2.jpeg";
import opquast from "../images/opquast.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faLocation, faMailBulk, faCar, faComputer, faPhotoVideo, faMusic, faHandHoldingHeart, faGlobeEurope,
        faCookieBite} from '@fortawesome/free-solid-svg-icons'


const About = (): JSX.Element => {
    return (
        <div>
            <div className="container lg:rounded-2xl bg-white px-4 sm:px-5 md:px-10 lg:px-20">
                <div data-aos="fade" className="aos-init aos-animate">
                    <div className="py-12">
                        {/* about page title */}
                        <h2 className="border-b-2 border-b-pink-600 text-[35px] font-medium pb-5 mb-5">A propos de moi</h2>
                        <h3 className="text-4xl font-medium pt-4 md:pt-[40px] mb-2.5">Qui suis-je ?</h3>
                        <div className="grid grid-cols-12 md:gap-10 items-center">
                            <div className="col-span-12 md:col-span-4">
                                {/* about me image */}
                                <img src={profile} alt="Photo de profile" className="rounded"/>
                                <div className="flex gap-x-6 gap-y-3 my-5 md:gap-y-6 md:gap-x-4 flex-wrap">
                                    <div className="mx-auto">#ponctuelle</div>
                                    <div className="mx-auto">#créative</div>
                                    <div className="mx-auto">#réactive</div><br/>
                                    <div className="mx-auto">#curieuse</div>
                                    <div className="mx-auto">#organisée</div>
                                    <div className="mx-auto">#positive</div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-8 space-y-2.5">
                                {/* who am i content  */}
                                <div className="md:mr-12 xl:mr-16">
                                    <p className="leading-7">
                                        J'ai commencé par une licence en informatique NEC à ANGLET (64), et maintenant
                                        j'étudie en alternance le développement d'applications web à YNOV tout en
                                        travaillant chez Avenir Data à Dax (40). Je travaille sur des projets variés,
                                        allant de l'environnement à la logistique industrielle et la donnée B2B.
                                    </p>
                                    <br/>
                                    <p className="leading-7">
                                        L'accessibilité et de la qualité web est une thématique qui me tient à coeur.
                                        Pour moi, un site web inaccessible est aussi utile qu'une pelle à neige en Floride,
                                        et un code mal structuré est aussi agréable qu'une chanson de Céline Dion
                                        mal chantée. Je suis l'alliée déterminée des utilisateurs malvoyants et
                                        des développeurs soucieux de leur santé mentale. Alors si vous cherchez quelqu'un
                                        pour rendre votre site accessible et agréable à utiliser, je suis la développeuse
                                        dont vous avez besoin  !
                                    </p>
                                    <div className="grid grid-cols-12 md:gap-10 items-center">
                                        <div className="col-span-10">
                                            Je relève le défi et passe la certification OPQUAST pour devenir expert en accessibilité et qualité web.
                                        </div>
                                        <div className="col-span-2">
                                            <img src={opquast} alt="Logo OPQUAST" className="h-20"/>
                                        </div>
                                    </div>
                                </div>
                                {/* personal info */}
                                <div className="pt-5">
                                    <h3 className="text-4xl font-medium mb-5">Informations personnelles</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="flex">
                                            <span className="text-oriange shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                <FontAwesomeIcon icon={faPhone} />
                                            </span>
                                            <div className="space-y-1">
                                                <p className="text-xs text-gray-lite">Téléphone</p>
                                                <h6 className="font-medium">+33 7 68 84 74 01</h6>
                                            </div>
                                        </div>

                                        <div className="flex">
                                            <span className="text-oriange-lite shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                <FontAwesomeIcon icon={faLocation} />
                                            </span>
                                            <div className="space-y-1">
                                                <p className="text-xs text-gray-lite">Localisation</p>
                                                <h6 className="font-medium">Dax - France</h6>
                                            </div>
                                        </div>

                                        <div className="flex">
                                            <span className="text-green shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                <FontAwesomeIcon icon={faMailBulk} />
                                            </span>
                                            <div className="space-y-1">
                                                <p className="text-xs text-gray-lite">Email</p>
                                                <h6 className="font-medium">oswald.perrinedu40@gmail.com</h6>
                                            </div>
                                        </div>

                                        <div className="flex">
                                            <span className="text-color-50 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                <FontAwesomeIcon icon={faCar} />
                                            </span>
                                            <div className="space-y-1">
                                                <p className="text-xs text-gray-lite">Véhiculée</p>
                                                <h6 className="font-medium">Permis B</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="leading-8">
                        Je suis capable de m'adapter à toutes les situations, de gérer le stress comme un Jedi, de travailler
                        en équipe comme les Avengers, de communiquer comme un talkie-walkie, d'être autonome comme un
                        astronaute, organisée comme un bullet journal, rigoureuse comme un juge, curieuse comme un chat et
                        réactive comme une super-héroïne. En bref, je suis le genre de personne que vous voulez avoir dans
                        votre équipe et je suis même prête à apporter le café pour l'équipe, avec le sourire !
                    </p>
                    {/* whai i do contain */}
                    <div className="my-20">
                        <h3 className="text-[35px] font-medium pb-5">Mes centres d'intérêts</h3>
                        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                            <div className="about-box perso-bg-red">
                                <FontAwesomeIcon className="w-10 h-10 object-contain block" icon={faComputer} />
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-semibold">Programmation</h3>
                                    <p className="leading-8">
                                        (Maman disait toujours) le développement web est comme une boîte de chocolats :
                                        vous ne savez jamais sur quel navigateur votre site va s'afficher.
                                        <br/>#ForrestGump
                                    </p>
                                </div>
                            </div>

                            <div className="about-box perso-bg-yellow">
                                <FontAwesomeIcon className="w-10 h-10 object-contain block" icon={faPhotoVideo} />
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-semibold">Photographie</h3>
                                    <p className="leading-8">
                                        En développement web comme en photographie, il faut savoir prendre le temps de
                                        régler les paramètres pour obtenir une image nette et une expérience utilisateur
                                        satisfaisante.                                    </p>
                                </div>
                            </div>

                            <div className="about-box perso-bg-orange">
                                <FontAwesomeIcon className="w-10 h-10 object-contain block" icon={faMusic} />
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-semibold">Musique</h3>
                                    <p className="leading-8">
                                        Le développement web et la musique sont comme le rythme et la mélodie : vous
                                        pouvez avoir la meilleure harmonie du code, mais sans un bon rythme, votre site
                                        web sera comme une chanson sans refrain.
                                    </p>
                                </div>
                            </div>

                            <div className="about-box perso-bg-green">
                                <FontAwesomeIcon className="w-10 h-10 object-contain block" icon={faHandHoldingHeart} />
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-semibold">B&eacute;n&eacute;volat</h3>
                                    <p className="leading-8">
                                        Le bénévolat tout comme le développement web requièrent de la patience, de la
                                        détermination et un souci constant pour les besoins des utilisateurs. Mais lorsque
                                        vous créez quelque chose qui a un impact positif sur les autres, la satisfaction
                                        que vous en tirez est incomparable !
                                    </p>
                                </div>
                            </div>

                            <div className="about-box perso-bg-purple">
                                <FontAwesomeIcon className="w-10 h-10 object-contain block" icon={faGlobeEurope} />
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-semibold">Voyager</h3>
                                    <p className="leading-8">
                                        Voyager et développer un site web sont deux aventures qui se ressemblent :
                                        elles nécessitent une planification minutieuse, une capacité à résoudre des
                                        problèmes et à s'adapter aux imprévus. Et dans les deux cas, le résultat peut
                                        être incroyablement gratifiant !
                                    </p>
                                </div>
                            </div>

                            <div className="about-box perso-bg-blue">
                                <FontAwesomeIcon className="w-10 h-10 object-contain block" icon={faCookieBite} />
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-semibold">Cuisiner</h3>
                                    <p className="leading-8">
                                        La cuisine et le développement web ont un point commun : dans l'un,
                                        on mélange des ingrédients pour créer un plat, et dans l'autre, on
                                        mélange des codes pour créer un site web. Mais attention, dans les
                                        deux cas, il faut faire attention aux bugs et aux goûts différents des utilisateurs !                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* etudeing skills */}
                    <div className="container pb-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
                            <div className="col-span-1">
                                <h4 className="text-5xl font-medium mb-6">Langues étrangères</h4>
                                <div className="mb-5">
                                    <div className="flex justify-between mb-1">
                                            <span className=" font-semibold">Espagnol</span>
                                        <span className=" font-semibold">70%</span>
                                    </div>
                                    <div className="w-full bg-[#E1E1E1] rounded-full h-1">
                                        <div className="bg-[#FF6464] h-1 rounded-full" style={{ width: '70%' }}></div>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <div className="flex justify-between mb-1">
                                            <span className=" font-semibold">Anglais</span>
                                        <span className=" font-semibold">60%</span>
                                    </div>
                                    <div className="w-full bg-[#E1E1E1] rounded-full h-1">
                                        <div className="bg-[#9272d4] h-1 rounded-full" style={{ width: '60%' }}></div>
                                    </div>
                                </div>
                            </div>

                            {/* button group */}
                            <div className="col-span-1">
                                <h4 className="text-5xl font-medium mb-8">Connaissances</h4>
                                <div className="flex gap-x-3 gap-y-3 md:gap-y-6 md:gap-x-4 flex-wrap">
                                    <div className="resume perso-bg-gray mx-auto">Web fullstack</div>
                                    <div className="resume perso-bg-gray mx-auto">Python</div>
                                    <div className="resume perso-bg-gray mx-auto">SQL</div>
                                    <div className="resume perso-bg-gray mx-auto">Django</div>
                                    <div className="resume perso-bg-gray mx-auto">React JS</div>
                                    <div className="resume perso-bg-gray mx-auto">Node JS</div>
                                    <div className="resume perso-bg-gray mx-auto">Tailwind</div>
                                    <div className="resume perso-bg-gray mx-auto">Java</div>
                                    <div className="resume perso-bg-gray mx-auto">Php</div>
                                    <div className="resume perso-bg-gray mx-auto">Laravel</div>
                                    <div className="resume perso-bg-gray mx-auto">Accessibilté et Qualité web</div>
                                </div>
                            </div>
                            {/* end button group */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About