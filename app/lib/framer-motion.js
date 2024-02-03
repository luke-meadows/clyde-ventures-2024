export const dropdownFramerVariant = {
  static: {
    // y: '0',
    opacity: 1,
  },
  initial: {
    // y: '-100%',
    opacity: 0,
  },
  enter: {
    opacity: 1,
    // y: '0',
    zIndex: '-1',
    transition: {
      duration: 0.2,
      when: 'beforeChildren',
    },
  },
  exit: {
    zIndex: '-1',
    // y: '-100%',
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export const dropdownInnerFramerVariant = {
  initial: {
    opacity: '0',
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.1,
      delay: 0,
      when: 'afterParent',
    },
  },
  exit: {
    opacity: '0',
    transition: { duration: 0 },
  },
};
export const dropdownBackgroundFramerVariant = {
  initial: {
    opacity: '0',
  },
  enter: {
    opacity: 0.8,
    transition: {
      duration: 0.1,
      delay: 0,
    },
  },
  exit: {
    opacity: '0',
    transition: { duration: 0 },
  },
};
