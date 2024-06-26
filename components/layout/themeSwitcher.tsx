"use client";
import { mdiMoonWaningCrescent, mdiWhiteBalanceSunny } from "@mdi/js";
import Icon from "@mdi/react";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleSwitch = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div>
      <Switch
        isSelected={theme === "light"}
        color="success"
        onClick={handleSwitch}
        startContent={<Icon color={"white"} path={mdiWhiteBalanceSunny} />}
        endContent={<Icon path={mdiMoonWaningCrescent} />}
      />
    </div>
  );
};

export default ThemeSwitcher;
