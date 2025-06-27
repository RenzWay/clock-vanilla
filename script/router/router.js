import ClockPage from "../pages/clock.js";
import HomePage from "../pages/home.js";
import NewClock from "../pages/newclock.js";

export const router = {
  "/": HomePage,
  "/clock": ClockPage,
  "/newclock": NewClock,
};
