import Home01 from "./Home01";
import OverView from "./OverView";
import RiskManagement from "./RiskManagement";
import Contact01 from "./Contact01";
import AccComponent from "./Account";
import Platform from "./Platform";

const routes = [
  { path: "/", component: Home01 },

  { path: "/about", component: OverView },
  { path: "/account", component: AccComponent },
  { path: "/money-deposit", component: RiskManagement },
  { path: "/contact", component: Contact01 },
  { path: "/platforms", component: Platform },
];

export default routes;
