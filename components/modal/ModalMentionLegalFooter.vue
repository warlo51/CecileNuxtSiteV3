<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="flex flex-col p-10">
            <div class="flex flex-row p-2 mt-3 border-gray border-b-2 relative mt-10">
              <p class="w-10/12 textePurple font-bold lg:text-3xl lg:w-11/12">Mentions légales</p>
              <Icon style="color: black" @click="emits('closeModal')" name="carbon:close-outline" class="text-xl absolute right-3 top-3 cursor-pointer "/>
            </div>
            <div class="text-justify p-3">
              <p class="textePurple font-bold lg:text-2xl">Conditions générales d’utilisation du site et des services proposés. </p>
              <p class="texteBlack">
                Le site est accessible par tout endroit 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d'une nécessité de maintenance.
                En cas de modification, interruption ou suspension des services le site https://yoga-veda-sante.com/ ne saurait être tenu responsable.
                Si il y a une interruption pour raison de maintenance technique décidée par Cécile FABIÉ, elle s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.

                Le site yoga-veda-sante est mis à jour régulièrement par Cécile FABIÉ. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.

                L’utilisation du site YOGA-VEDA-SANTE implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site YOGA-VEDA-SANTE sont donc invités à les consulter de manière régulière.
              </p>
              <p class="textePurple font-bold lg:text-2xl">Limitations contractuelles sur les données techniques</p>
              <p class="texteBlack">
                Cécile FABIÉ ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site yoga-veda-sante. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.
                Tout contenu téléchargé se fait au risque et péril de l'utilisateur et sous sa seule responsabilité. En conséquence, Cécile FABIÉ ne saurait être retenue responsable d'un quelconque dommage subi par l'ordinateur de l'utilisateur ou d'une quelconque perte de données consécutives au téléchargement.

                Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitude ou des omissions. Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir le signaler par email, à l’adresse cecile.fabie@gmail.com, en décrivant le problème de la manière la plus précise possible (page posant problème, type d'ordinateur et de navigateur utilisé…).
              </p>
              <p class="textePurple font-bold lg:text-2xl">Propriété intellectuelle et contrefaçons</p>
              <p class="texteBlack">
                Cécile FABIÉ est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site yoga-veda-sante, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Cécile FABIÉ.
                Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
              </p>
              <p class="textePurple font-bold lg:text-2xl">Limitations de responsabilité</p>
              <p class="texteBlack">
                Cécile FABIÉ ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site yoga-veda-sante, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées à la rubrique « Limitations contractuelles sur les données techniques », soit de l’apparition d’un bug ou d’une incompatibilité.
                Cécile FABIÉ ne pourra également être tenue responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site yoga-veda-sante.
                Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. 
                Cécile FABIÉ se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.
                Le cas échéant, Cécile FABIÉ se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie…).
              </p>
              <p class="textePurple font-bold lg:text-2xl">Gestion des données personnelles</p>
              <p class="texteBlack">
                En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l’article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.

                A l’occasion de l’utilisation du site yoga-veda-sante peuvent être recueillies : l’URL des liens par l’intermédiaire desquels l’utilisateur a accédé au site yoga-veda-sante. Le fournisseur d’accès de l’utilisateur, l’adresse de protocole Internet (IP) de l’utilisateur.
                En tout état de cause Cécile FABIÉ ne collecte des informations personnelles relatives à l’utilisateur que pour le besoin de certains services proposés par le site yoga-veda-sante.
                L’utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu’il procède par lui-même à leur saisie. Il est alors précisé à l’utilisateur du site yoga-veda-sante l’obligation ou non de fournir ces informations.
                Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une copie du titre d’identité avec signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être envoyée.
                Aucune information personnelle de l’utilisateur du site yoga-veda-sante n’est publiée à l’insu de l’utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l’hypothèse du rachat de yoga-veda-sante et de ses droits permettrait la transmission des dites informations à l’éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l’utilisateur du site yoga-veda-sante
              </p>
              <p class="textePurple font-bold lg:text-2xl">Liens hypertextes et cookies</p>
              <p class="texteBlack">
                Le site yoga-veda-sante contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de Cécile FABIÉ.
                Cependant Cécile FABIE n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.

                La navigation sur le site yoga-veda-sante est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.
                Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l’installation des cookies :
                Sous Internet Explorer : onglet outil (pictogramme en forme de rouage en haut à droite) / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.
                Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l’onglet Options. Cliquer sur l’onglet Vie privée. Paramétrez les Règles de conservation sur : utiliser les paramètres personnalisés pour l’historique. Enfin décochez-la pour désactiver les cookies.
                Sous Safari : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section “Confidentialité”, cliquez sur Paramètres de contenu. Dans la section “Cookies”, vous pouvez bloquer les cookies.
                Sous Chrome : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois lignes horizontales). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section “Confidentialité”, cliquez sur préférences. Dans l’onglet “Confidentialité”, vous pouvez bloquer les cookies.
                Le site n’est pas déclaré à la CNIL car il n’exploite pas les données personnelles comme indiqué sur cette page.
                Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
              </p>
              <p class="textePurple font-bold lg:text-2xl">Services fournis </p>
              <p class="texteBlack">
                L'ensemble des activités de l'entreprise ainsi que ses informations sont présentés sur le site https://yoga-veda-sante.com/ 

                Cécile FABIÉ s'efforce de fournir sur le site https://yoga-veda-sante.com/ des informations aussi précises que possible.
                Les renseignements figurant sur le site yoga-veda-sante ne sont pas exhaustifs et les photos non contractuelles.
                Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne. Par ailleurs, toutes les informations indiquées sur le site yoga-veda-sante sont données à titre indicatif et sont susceptibles de changer ou d'évoluer, sans préavis.
              </p>
              <p class="textePurple font-bold lg:text-2xl">Tarifs</p>
              <p class="texteBlack">
                Les tarifs des prestations sont affichés sur le site yoga-veda-sante. Ils sont modifiables à tout moment, sans préavis.
              </p>
              <p class="textePurple font-bold lg:text-2xl">Droit applicable et attribution de juridiction</p>
              <p class="texteBlack">
                Tout litige en relation avec l’utilisation du site yoga-veda-sante est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de DONNERY.
              </p>
              <p class="textePurple font-bold lg:text-2xl">Les principales lois concernées</p>
              <p class="texteBlack">
                Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l’informatique, aux fichiers et aux libertés.
                Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const props = defineProps<{
  open: boolean;
  content: any;
}>();

const emits = defineEmits<(e: "closeModal") => void>();

</script>
