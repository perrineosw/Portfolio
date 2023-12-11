import React from "react";
import profile from "../media/profile.jpeg";
import opquast from "../media/badge_confirme.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faLocation, faMailBulk, faCar, faComputer, faPhotoVideo, faMusic, faHandHoldingHeart, faGlobeEurope,
        faCookieBite, faClock, faPencil, faPersonRunning, faMagnifyingGlass, faFolderTree, faFaceSmile} from '@fortawesome/free-solid-svg-icons'
import Footer from "../components/Footer";

const About = ({styles, isDarkMode}: {styles: object, isDarkMode: boolean}): JSX.Element => {
    return (
        <div>
            <div className="container lg:rounded-2xl px-4 sm:px-5 md:px-10 lg:px-20 lg:pt-0 pt-20" style={styles}>
                <h2 className="border-b-2 border-b-pink-600 text-[35px] font-medium pb-5 lg:pt-5">A propos de moi</h2>
                <h3 className="text-4xl font-medium pt-4 md:pt-[40px] mb-2.5">Qui suis-je ?</h3>
                <div className="grid grid-cols-12 md:gap-10 items-center">
                    <div className="col-span-12 lg:col-span-4">
                        <img src={profile} alt="Photo de profile" className="rounded"/>
                    </div>
                    <div className="col-span-12 lg:col-span-8 space-y-2.5">
                        <div className="md:mr-12 xl:mr-16">
                            <p className="leading-7 pt-5">
                                J&apos;ai commencé par une licence en informatique NEC à ANGLET (64), et maintenant
                                j&apos;étudie en alternance le développement d&apos;applications web à&nbsp;
                                <a href="https://www.ynov.com/"><u>YNOV</u></a> tout en travaillant chez&nbsp;
                                <a href="https://www.okina.fr/"><u>Okina</u></a> à Dax (40). Je peux travailler sur des projets
                                variés, allant de l&apos;environnement à la logistique industrielle, la donnée B2B et
                                la gestion de transport.
                            </p>
                            <br/>
                            <p className="leading-7">
                                L&apos;accessibilité et la qualité web est une thématique qui me tient à coeur.
                                Pour moi, un site web inaccessible est aussi utile qu&apos;une pelle à neige en Floride,
                                et un code mal structuré est aussi agréable qu&apos;une chanson de Céline Dion
                                mal chantée. Je suis l&apos;alliée déterminée des utilisateurs malvoyants et
                                des développeurs soucieux de leur santé mentale. Alors si vous cherchez quelqu&apos;un
                                pour rendre votre site accessible et agréable à utiliser, je suis la développeuse
                                dont vous avez besoin !
                            </p>
                            <div className="grid grid-cols-12 gap-x-6 items-center pt-5">
                                <div className="col-span-8">
                                    Je suis certifiée OPQUAST avec 790 points et le niveau &quot;Confirmée&quot;.
                                </div>
                                <div className="col-span-4 mx-auto">
                                    <a href="https://directory.opquast.com/fr/certificat/PRBTQG/">
                                        <u>Ma certification : <img src={opquast} alt="Logo OPQUAST" className="w-20 mx-auto"/></u>
                                    </a>
                                </div>
                            </div>
                            <div className="flex gap-x-6 gap-y-3 lg:pt-5 pt-10 md:gap-y-6 md:gap-x-4 flex-wrap">
                                <div className="mx-auto"><FontAwesomeIcon icon={faClock} className="text-red"/>&nbsp;ponctuelle</div>
                                <div className="mx-auto"><FontAwesomeIcon icon={faPencil} className="text-orange"/>&nbsp;créative</div>
                                <div className="mx-auto"><FontAwesomeIcon icon={faPersonRunning} className="text-green"/>&nbsp;réactive</div><br/>
                                <div className="mx-auto"><FontAwesomeIcon icon={faMagnifyingGlass} className="text-blue"/>&nbsp;curieuse</div>
                                <div className="mx-auto"><FontAwesomeIcon icon={faFolderTree} className="text-red"/>&nbsp;organisée</div>
                                <div className="mx-auto"><FontAwesomeIcon icon={faFaceSmile} className="text-orange"/>&nbsp;positive</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-10">
                    <h3 className="text-4xl font-medium mb-5">Informations personnelles</h3>
                    <div className="flex mx-auto gap-x-16 gap-y-6 my-5 flex-wrap">
                        <div className="flex">
                            <span className="text-red mr-2.5 flex items-center justify-center rounded-md text-2xl w-12">
                                <FontAwesomeIcon icon={faPhone} />
                            </span>
                            <div className="space-y-1">
                                <p className="text-xs">Téléphone</p>
                                <h6 className="font-medium">+33 7 68 84 74 01</h6>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="text-orange mr-2.5 flex items-center justify-center rounded-md text-2xl w-12">
                                <FontAwesomeIcon icon={faLocation} />
                            </span>
                            <div className="space-y-1">
                                <p className="text-xs">Localisation</p>
                                <h6 className="font-medium">Dax - France</h6>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="text-green mr-2.5 flex items-center justify-center rounded-md text-2xl w-12">
                                <FontAwesomeIcon icon={faMailBulk} />
                            </span>
                            <div className="space-y-1">
                                <p className="text-xs">Email</p>
                                <h6 className="font-medium"><a href="mailto:oswald.perrinedu40@gmail.com"><u>oswald.perrinedu40@gmail.com</u></a></h6>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="text-blue mr-2.5 flex items-center justify-center rounded-md text-2xl w-12">
                                <FontAwesomeIcon icon={faCar} />
                            </span>
                            <div className="space-y-1">
                                <p className="text-xs">Véhiculée</p>
                                <h6 className="font-medium">Permis B</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="leading-8 pt-10">
                    Je suis capable de m&apos;adapter à toutes les situations, de gérer le stress comme un Jedi, de travailler
                    en équipe comme les Avengers, de communiquer comme un talkie-walkie, d&apos;être autonome comme un
                    astronaute, organisée comme un bullet journal, rigoureuse comme un juge, curieuse comme un chat et
                    réactive comme une super-héroïne. En bref, je suis le genre de personne que vous voulez avoir dans
                    votre équipe !
                </p>
                <div className="pt-10">
                    <h3 className="text-4xl font-medium mb-5">Mes centres d&apos;intérêts</h3>
                    <div className="grid gap-8 grid-cols-1 xl:grid-cols-3">
                        <div className={`about-box ${isDarkMode ? 'perso-bg-red-dark' : 'perso-bg-red'}`}>
                            <FontAwesomeIcon className="w-10 h-10 object-contain block" icon={faComputer} />
                            <div className="space-y-2">
                                <h3 className="text-2xl font-semibold">Programmation</h3>
                                <p className="leading-8">
                                    (Maman disait toujours) le développement web est comme une boîte de chocolats :
                                    vous ne savez jamais sur quel navigateur votre site va s&apos;afficher.
                                    <br/>#ForrestGump
                                </p>
                            </div>
                        </div>
                        <div className={`about-box ${isDarkMode ? 'perso-bg-yellow-dark' : 'perso-bg-yellow'}`}>
                            <FontAwesomeIcon className="w-10 h-10 object-contain block" icon={faPhotoVideo} />
                            <div className="space-y-2">
                                <h3 className="text-2xl font-semibold">Photographie</h3>
                                <p className="leading-8">
                                    En développement web comme en photographie, il faut savoir prendre le temps de
                                    régler les paramètres pour obtenir une image nette et une expérience utilisateur
                                    satisfaisante.                                    </p>
                            </div>
                        </div>
                        <div className={`about-box ${isDarkMode ? 'perso-bg-orange-dark' : 'perso-bg-orange'}`}>
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
                        <div className={`about-box ${isDarkMode ? 'perso-bg-green-dark' : 'perso-bg-green'}`}>
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
                        <div className={`about-box ${isDarkMode ? 'perso-bg-purple-dark' : 'perso-bg-purple'}`}>
                            <FontAwesomeIcon className="w-10 h-10 object-contain block" icon={faGlobeEurope} />
                            <div className="space-y-2">
                                <h3 className="text-2xl font-semibold">Voyager</h3>
                                <p className="leading-8">
                                    Voyager et développer un site web sont deux aventures qui se ressemblent :
                                    elles nécessitent une planification minutieuse, une capacité à résoudre des
                                    problèmes et à s&apos;adapter aux imprévus. Et dans les deux cas, le résultat peut
                                    être incroyablement gratifiant !
                                </p>
                            </div>
                        </div>
                        <div className={`about-box ${isDarkMode ? 'perso-bg-blue-dark' : 'perso-bg-blue'}`}>
                            <FontAwesomeIcon className="w-10 h-10 object-contain block" icon={faCookieBite} />
                            <div className="space-y-2">
                                <h3 className="text-2xl font-semibold">Cuisiner</h3>
                                <p className="leading-8">
                                    La cuisine et le développement web ont un point commun : dans l&apos;un,
                                    on mélange des ingrédients pour créer un plat, et dans l&apos;autre, on
                                    mélange des codes pour créer un site web. Mais attention, dans les
                                    deux cas, il faut faire attention aux bugs et aux goûts différents des utilisateurs !                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-20 pt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="col-span-1 lg:pr-10 pr-0 my-auto">
                            <h3 className="text-4xl font-medium mb-5">Langues étrangères</h3>
                            <div className="mb-5">
                                <div className="flex justify-between mb-1">
                                        <span className=" font-semibold">Espagnol</span>
                                    <span className=" font-semibold">70%</span>
                                </div>
                                <div className={`w-full rounded-full h-1 ${isDarkMode ? '' : 'bg-[#E1E1E1]'}`}>
                                    <div className="bg-[#E96464] h-1 rounded-full" style={{ width: '70%' }}></div>
                                </div>
                            </div>
                            <div className="mb-5">
                                <div className="flex justify-between mb-1">
                                        <span className=" font-semibold">Anglais</span>
                                    <span className=" font-semibold">60%</span>
                                </div>
                                <div className={`w-full rounded-full h-1 ${isDarkMode ? '' : 'bg-[#E1E1E1]'}`}>
                                    <div className="bg-[#24B3C7] h-1 rounded-full" style={{ width: '60%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 lg:pl-10 pl-0">
                            <h3 className="text-4xl font-medium mb-5">Connaissances</h3>
                            <div className="flex gap-x-3 gap-y-3 md:gap-y-6 md:gap-x-4 flex-wrap">
                                <div className={`resume mx-auto ${isDarkMode ? 'perso-bg-gray-dark' : 'perso-bg-gray'}`}>Web fullstack</div>
                                <div className={`resume mx-auto ${isDarkMode ? 'perso-bg-gray-dark' : 'perso-bg-gray'}`}>Python</div>
                                <div className={`resume mx-auto ${isDarkMode ? 'perso-bg-gray-dark' : 'perso-bg-gray'}`}>SQL</div>
                                <div className={`resume mx-auto ${isDarkMode ? 'perso-bg-gray-dark' : 'perso-bg-gray'}`}>Django</div>
                                <div className={`resume mx-auto ${isDarkMode ? 'perso-bg-gray-dark' : 'perso-bg-gray'}`}>Angular JS</div>
                                <div className={`resume mx-auto ${isDarkMode ? 'perso-bg-gray-dark' : 'perso-bg-gray'}`}>React JS</div>
                                <div className={`resume mx-auto ${isDarkMode ? 'perso-bg-gray-dark' : 'perso-bg-gray'}`}>Node JS</div>
                                <div className={`resume mx-auto ${isDarkMode ? 'perso-bg-gray-dark' : 'perso-bg-gray'}`}>Tailwind</div>
                                <div className={`resume mx-auto ${isDarkMode ? 'perso-bg-gray-dark' : 'perso-bg-gray'}`}>Java</div>
                                <div className={`resume mx-auto ${isDarkMode ? 'perso-bg-gray-dark' : 'perso-bg-gray'}`}>SpringBoot</div>
                                <div className={`resume mx-auto ${isDarkMode ? 'perso-bg-gray-dark' : 'perso-bg-gray'}`}>Php</div>
                                <div className={`resume mx-auto ${isDarkMode ? 'perso-bg-gray-dark' : 'perso-bg-gray'}`}>Laravel</div>
                                <div className={`resume mx-auto ${isDarkMode ? 'perso-bg-gray-dark' : 'perso-bg-gray'}`}>Accessibilté et Qualité web</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About