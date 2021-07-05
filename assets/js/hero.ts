import { AlpineMagicProperties } from "./models/alpine-magic-properties";

type Hero = {
  show: boolean;
  open: (this: This) => void;
  close: (this: This) => void;
  toggle: (this: This) => void;
  isOpen: (this: This) => boolean;
};

type This = Hero & AlpineMagicProperties;

const heroData = function (): Hero {
  return {
    show: true,
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    },
    toggle() {
      this.isOpen() ? this.close() : this.open();
    },
    isOpen() {
      return this.show === true;
    },
  };
};

export { heroData };
