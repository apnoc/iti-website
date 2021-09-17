import react from "react";
import Home from "../modules/Menu1/index";
import Organization from "../modules/Menu2/index";
import Profile from "../modules/Menu3/index";
import AbstractReport from "../modules/Menu4/SubMenu1/index";
import JobSeekersReport from "../modules/Menu4/SubMenu2/index";
import ContactUs from "../modules/Menu5/index";
import Map from "../modules/Menu5/map";
import Webpolicies from "../Components/Footer/webpolicies";
import Help from "../Components/Footer/help";
import Notifications from "../Components/Notifications/notification";
import Error from "../Components/Error/error";
import Images from "../Components/Gallery/Images";
import SiteMap from "../modules/SiteMap/sitemap";
import About from "../Components/About/About";

const routesConfig = [
  {
    path: "/nicapsc-iti/itiHome",
    component: Home,
  },
  {
    path: "/nicapsc-iti/itiorganization/",
    component: Organization,
  },
  {
    path: "/nicapsc-iti/itiprofile",
    component: Profile,
  },
  {
    path: "/nicapsc-iti/itiPlacements/itiabstraction",
    component: AbstractReport,
  },
  {
    path: "/nicapsc-iti/itiPlacements/itijobsSeekersReport",
    component: JobSeekersReport,
  },
  {
    path: "/nicapsc-iti/itinotifications",
    component: Notifications,
  },
  {
    path: "/nicapsc-iti/itiwebsitepolicies",
    component: Webpolicies,
  },
  {
    path: "/nicapsc-iti/itihelp",
    component: Help,
  },
  {
    path: "/nicapsc-iti/iticontact",
    component: ContactUs,
  },
  {
    path: "/nicapsc-iti/itimap",
    component: Map,
  },
  {
    path: "/nicapsc-iti/itierror",
    component: Error,
  },
  {
    path: "/nicapsc-iti/itiimages",
    component: Images,
  },
  {
    path: "/nicapsc-iti/itisitemap",
    component: SiteMap,
  },
  {
    path: "/nicapsc-iti/itiabout",
    component: About,
  },
];

export default routesConfig;
