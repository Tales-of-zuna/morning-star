import { mdiCart, mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { Image } from "@nextui-org/react";
import ThemeSwitcher from "./themeSwitcher";

const Navbar = () => {
  return (
    <div className="sticky left-0 top-0 z-20 w-full bg-white bg-opacity-50 shadow-sm backdrop-blur-sm dark:bg-black dark:bg-opacity-50">
      <div className="container mx-auto flex h-24 items-center justify-between">
        <Image
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1I-PTaXzTFL2gR0al8T0h9YLhRlykzFENCgWbBxsqrhX8oivPLWVh2sn965xRi0SXZcs0dyb_mqXLXX0VKNjPPVh7mWI-QUnDAju1sM2PTp1Gu43bi-2JixO5GGpTYEVn7yFs6_Wo33w/s1600/ONE+OK+ROCK_%E6%AE%B4%E3%82%8A%E6%9B%B8%E3%81%8D.png"
          alt="Logo"
          className="h-14 dark:invert"
        />

        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <Icon path={mdiCart} className="h-6 w-6" />
          <Icon path={mdiMenu} className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
