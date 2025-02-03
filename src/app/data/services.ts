import pac from "../../../public/pac.jpg";
import ballon from "../../../public/ballon.png";
import isolation from "../../../public/isolation.png";
import { StaticImageData } from "next/image";
import pacIcon from "../../../public/icon/pac.svg";
import ballonIcon from "../../../public/icon/ballon.svg";
import isolationIcon from "../../../public/icon/isolation.svg";
import pacImage from "../../../public/imgarticlepac.png";
import ballonImage from "../../../public/ballonimg.png";
import isolationImage from "../../../public/isolimg.png";
import vmcIcon from "../../../public/icon/vmc.svg";
import vmcArticle from "../../../public/vmcarticle.webp";
import vmcImage from "../../../public/vmcbg.webp";
import menuiseriesIcon from "../../../public/icon/menuiseries.svg";
import menuiseriesImage from "../../../public/menuiseriebg.png";
import menuiseriesArticle from "../../../public/menuiserieimg.png";

type Service = {
  name: string;
  title: string;
  description: string;
  content: { text: string; isSubtitle: boolean }[];
  image: StaticImageData;
  bgImage: string;
  icon: StaticImageData;
  titleArticle: string;
  text1?: string;
  text2?: string;
  text3?: string;
  image2: StaticImageData;
  eco: number;
  efficiency: number;
  esthetic: number;
  accordion?: {
    sections: {
      title: string;
      content: (string | { text: string; isSubtitle: boolean })[];
    }[];
  };
};

export const services: { [key: string]: Service } = {
  "pompe-a-chaleur": {
    name: "pompe-a-chaleur",
    title: "Votre pompe à chaleur",
    description: "Solution écologique pour le chauffage de votre maison",
    content: [
      {
        text: "Polyvalente et performante, elle permet de chauffer votre maison en hiver, de la rafraîchir en été et de produire de l'eau chaude sanitaire.",
        isSubtitle: false,
      },
      {
        text: "Elle contribue à un mode de vie plus durable tout en augmentant la valeur de votre habitation.",
        isSubtitle: false,
      },
    ],
    image: pac,
    bgImage: "bg-[url('/pac.jpg')]",
    icon: pacIcon,
    titleArticle: "Chauffage: La pompe à chaleur",
    text1:
      "Bénéficiez du meilleur système de chauffage du marché pour un confort thermique absolu, le tout à la force de l'air. La pompe à chaleur offre un fonctionnement simple et autonome. Vous obtenez facilement une chaleur douce et homogène dans toute votre maison.",
    text2:
      "La PAC produit de la chaleur à partir d'une énergie gratuite, celle de l'air !",
    text3: "Grâce à cela, vous réduiez vos factures de chauffage jusqu'à 80%.",
    image2: pacImage,
    eco: 93,
    efficiency: 100,
    esthetic: 95,
    accordion: {
      sections: [
        {
          title: "PAC AIR / EAU",
          content: [
            "La pompe à chaleur (PAC) air-eau est un système de chauffage, qui assure le chauffage et la production d'eau chaude de votre logement.",
            "Le fonctionnement d'une pompe à chaleur air-eau est simple :",
            "Une unité extérieure puise les calories de chaleur présentes dans l'air extérieur, ces calories sont transportées via un fluide frigorigène qui se comprime et se condense, vers l'unité intérieure, créant ainsi de la chaleur. Cette chaleur est acheminée vers vos émetteurs de chauffage (radiateurs, planchers, chauffants...) et vos points d'eau.",
            "L'installation de la PAC air-eau est très simple. Il vous suffit de disposer :",
            "- d'un jardin, d'une cour ou d'un mur de façade pour y installer l'unité extérieure ;",
            "- d'un circuit de chauffage central (circuit hydraulique) sur lequel vient se connecter l'unité intérieure.",
            "Enfin, un entretien est obligatoire une fois par an. Avec votre contrat GÉNIE CLIM, soyez assuré de la longévité de votre équipement.",
          ],
        },
        {
          title: "PAC AIR / AIR",
          content: [
            "Le fonctionnement de la pompe à chaleur (PAC) air-air est très simple. Elle capte les calories de chaleur présentes dans l'air extérieur pour chauffer votre logement. Pour cela, elle se compose de deux unités :",
            "L'unité située à l'extérieur de votre logement, récupère les calories de l'air qu'elle transmet à un liquide frigorigène acheminé vers l'unité intérieure ;",
            "L'autre, située à l'intérieur, diffuse ces calories de chaleur au sein de votre logement à l'air de 'splits' ou ventilo-convecteurs.",
            "En inversant le mode de fonctionnement de votre pompe à chaleur air-air, elle peut aussi produire de la fraîcheur, et fonctionner comme une climatisation pour votre logement. Cette double fonctionnalité, ajoutée au faible coût de l'appareil, en font une solution particulièrement intéressante.",
            "L'installation d'une pompe à chaleur air-air est très simple. Il suffit de disposer d'un jardin ou d'une cour pour y installer l'unité extérieure.",
            "Enfin, un entretien est obligatoire une fois par an. Avec votre contrat GÉNIE CLIM, soyez assuré de la longévité de votre équipement.",
          ],
        },
        {
          title: "BIEN CHOISIR SA PAC",
          content: [
            {
              text: "Les deux principales caractéristiques à connaître pour juger de la performance d'une pompe à chaleur sont :",
              isSubtitle: false,
            },
            {
              text: "- le coefficient de performance (COP) indiqué en valeur saisonnière (SCOP pour le chauffage, SEER pour le rafraîchissement pour la PAC air-air), qui représente le nombre de kWh de chaleur produits, pour 1 kWh d'électricité consommée",
              isSubtitle: false,
            },
            {
              text: "Où placer le groupe extérieur ?",
              isSubtitle: true,
            },
            {
              text: "Nous vous conseillons tout de même de choisir un emplacement qui occasionne le moins de bruit possible pour votre voisinage (distance minimale, éviter les angles et recoins qui renvoient le son), mais aussi pour vous !",
              isSubtitle: false,
            },
            "Choisissez un emplacement éloigné de vos fenêtres. Notez néanmoins que les modèles récents de pompes à chaleur sont moins bruyants, et que vous pouvez, si besoin, installer des plots antivibratiles ou un écran phonique pour atténuer le bruit.",
            "Vous aurez en plus besoin d'un emplacement dans votre logement pour installer l'unité intérieure. La jonction entre les deux est assurée par un circuit de fluide frigorigène.",
            {
              text: "Dois-je prendre un contrat d'entretien pour ma PAC ?",
              isSubtitle: true,
            },
            "Il est fortement recommandé de prendre un contrat d'entretien. 1 fois par an, votre matériel est entretenu et vérifié par une équipe de professionnel.",
            "Notre équipe commerciale reste disponible pour vous proposer un contrat sur-mesure répondant à vos besoins.",
          ],
        },
      ],
    },
  },
  "ballon-thermodynamique": {
    name: "ballon-thermodynamique",
    title: "Votre ballon thermodynamique",
    description: "La solution écologique pour votre eau chaude",
    content: [
      {
        text: "Le ballon thermodynamique est la solution écologique et économique de référence.",
        isSubtitle: false,
      },
      {
        text: "Vous pouvez réaliser jusqu'à 50% d'économie sur votre facture d'électricité.",
        isSubtitle: false,
      },
    ],
    image: ballon,
    bgImage: "bg-[url('/ballon.png')]",
    icon: ballonIcon,
    titleArticle: "Eau chaude sanitaire",
    text1:
      "Choisissez le chauffe-eau thermodynamique pour la distribution d'eau chaude sanitaire dans votre maison sans interruption et à une température précise et constante à toute heure de la journée.",
    text2: "C'est la solution écologique et économique de référence.",
    text3:
      "Vous pouvez réalisez jusqu'à 50% d'économie sur votre facture d'électricité en utilisant un ballon thermodynamique.",
    image2: ballonImage,
    eco: 85,
    efficiency: 100,
    esthetic: 90,
    accordion: {
      sections: [
        {
          title: "Le ballon thermodynamique",
          content: [
            {
              text: "Le chauffe-eau thermodynamique est la solution écologique et économique de référence.",
              isSubtitle: true,
            },
            "Vous pouvez réaliser jusqu'à 50% d'économie sur votre facture d'électricité en utilisant un ballon thermodynamique. Utilisant les calories présentes dans l’air pour chauffer votre eau, le cumulus thermodynamique est une installation écologique et abordable.",
            "Le chauffe-eau thermodynamique, ou CET, capte l’énergie gratuite présente dans l’air grâce à son fonctionnement comparable à une pompe à chaleur aérothermique, ce qui lui permet de consommer jusqu’à 3 fois moins d’énergie qu’un chauffe-eau électrique.",
            "Un ballon thermodynamique émet 10 fois moins de CO2 qu’un chauffe-eau fonctionnant au gaz ou au fioul selon la marque retenue. Comme il ne rejette quasiment pas de gaz à effet de serre, son impact sur l’environnement est minime.",
            "L’échangeur restitue ensuite la chaleur créée au ballon d’eau pour produire de l’eau chaude sanitaire. Le processus se répète chaque fois que le fluide redevient liquide.",
            "Si les températures extérieures sont trop faibles en hiver, un système électrique prend le relais du CET, de même si votre consommation connaît un bref pic.",
            "Le chauffe-eau thermodynamique présente son meilleur rendement à des températures comprises entre -5°C et 35°C. S’il fait plus froid chez vous l’hiver, vous devrez coupler votre CET avec un système de chauffage électrique de l’eau. Cette solution de secours reste dédiée aux situations occasionnelles.",
            "Si vous utilisez votre chauffe-eau thermodynamique dans des conditions optimales, sa consommation d’électricité sera réduite.",
            "Pour installer un chauffe-eau thermodynamique, nous réalisons trois types de raccordement : électrique, hydraulique et aéraulique.",
            "Cela peut sembler technique, mais en réalité l’installation d’un chauffe-eau thermodynamique prend environ 4 petites heures le temps de procéder à tous les raccordements.",
            "Vous serez également satisfait d’apprendre qu’un CET ne nécessite pas de contrat d’entretien. Une ou deux fois par an, détartrez la cuve et l’anode de votre chauffe-eau pour optimiser son fonctionnement pour les mois suivants.",
            {
              text: "L'entretien d'un chauffe-eau thermodynamique est vraiment très simple et rapide !",
              isSubtitle: true,
            },
          ],
        },
      ],
    },
  },
  isolation: {
    name: "isolation",
    title: "Votre isolation",
    description: "Optimisez l'efficacité énergétique de votre habitat",
    content: [
      {
        text: "Améliorez la performance énergétique de votre maison grâce à une isolation sur mesure.",
        isSubtitle: false,
      },
      {
        text: "Notre programme complet inclut l'isolation des combles et des planchers bas pour une rénovation énergétique intégrale.",
        isSubtitle: false,
      },
    ],
    image: isolation,
    bgImage: "bg-[url('/isolation.png')]",
    icon: isolationIcon,
    titleArticle: "Les isolation : Combles, plancher bas, ITE",
    text1:
      "Inclus dans votre programme, nous vous proposons d'isoler vos combles et vos planchers bas, pour une rénovation énergétique complète de votre maison.",
    text2:
      "Notre équipe de professionnels choisit des produits alliant confort et écologie pour une isolation saine et efficace.",
    text3:
      "Le toit est la 1er source de déperdition de chaleur dans une maison. En isolant les combles, vous réduisez jusqu'à 30% vos factures de chauffage !",
    image2: isolationImage,
    eco: 85,
    efficiency: 100,
    esthetic: 100,
    accordion: {
      sections: [
        {
          title: "Isolation des combles",
          content: [
            "Aménagés, aménageables ou perdus, nous isolons tout vos espaces en contact avec des pièces chauffées.",
            "Également, l'isolation des combles vous permet de maintenir la chaluer en hiver, vous pouvez ainsi gagner jusqu'à 3 degrés !",
            "En été, vous conservez plus longtemps la fraîcheur dans votre maison.",
            "Enfin, ces travaux vous premettent d'améliorer le DPE (Diagnostic de Performance Énergétique) de votre logement.",
            "En moyenne, vous réalisez une plus-value de 5% pour chaque classe énergétique gagnée.",
            "Notre équipe s'attarde à choisir les meilleurs produits correspondant à vos besoins.",
            "La laine est soufflée sera parfaite pour vos combles perdus, tandis que la laine en rouleaux servira vos combles aménageables ou aménagés.",
          ],
        },
        {
          title: "Isolation des planchers bas",
          content: [
            "Pour une isolation complète, nous intervenons également sur vos planchers bas et vide-sanitaire.",
            "Pour isoler vos planchers pas, les dalles de polystyrène extrudé offriront une isolation sonore et thermique parfaite pour vos espaces.",
          ],
        },
        {
          title: "ITE (isolation thermique extérieure)",
          content: [
            "La pompe à chaleur (PAC) eau-eau est un système de chauffage, qui assure le chauffage et la production d'eau chaude de votre logement.",
          ],
        },
      ],
    },
  },
  vmc: {
    name: "vmc",
    title: "Votre VMC",
    description: "Votre VMC est une solution écologique et économique",
    content: [
      {
        text: "La VMC (Ventilation Mécanique Contrôlée) est une solution écologique et économique pour votre maison.",
        isSubtitle: false,
      },
      {
        text: "Elle permet de maintenir une qualité d'air intérieur sain et de réduire vos factures de chauffage.",
        isSubtitle: false,
      },
    ],
    image: vmcImage,
    bgImage: "bg-[url('/vmcbg.webp')]",
    icon: vmcIcon,
    titleArticle: "VMC : Ventilation Mécanique Contrôlée",
    text1:
      "La VMC (Ventilation Mécanique Contrôlée) est une solution écologique et économique pour votre maison.",
    text2:
      "Elle permet de maintenir une qualité d'air intérieur sain et de réduire vos factures de chauffage.",
    text3:
      "La VMC est une solution écologique et économique pour votre maison.",
    image2: vmcArticle,
    eco: 85,
    efficiency: 100,
    esthetic: 100,
  },
  menuiserie: {
    name: "menuiserie",
    title: "Vos menuiserie",
    description: "La rénovation de vos fenêtres",
    content: [
      {
        text: "Votre menuiseries sont une solution écologique et économique",
        isSubtitle: false,
      },
      {
        text: "Elle permet de maintenir une qualité d'air intérieur sain et de réduire vos factures de chauffage.",
        isSubtitle: false,
      },
    ],
    image: menuiseriesImage,
    bgImage: "bg-[url('/menuiseriebg.png')]",
    icon: menuiseriesIcon,
    titleArticle: "La rénovation de vos fenêtres",
    text1:
      "La menuiserie joue un rôle essentiel dans la construction et l'aménagement des espaces.",
    text2:
      "Optez pour des menuiseries modernes et isolantes pour améliorer le confort et l'esthétique de votre maison. Choisissez des fenêtres, portes et voletd qui allient design et performance énergétique pour permettre le passage des personnes, de l'air et de la lumière, tout en garantissant la protection et l'isolation thermique de votre habitation.",
    image2: menuiseriesArticle,
    eco: 85,
    efficiency: 85,
    esthetic: 100,
  },
};
