import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
	faInstagramSquare,
	faInstagram,
	faFacebookSquare,
	faWhatsappSquare,
	faTwitterSquare
);
Vue.component("fa-icon", FontAwesomeIcon);
