import { vi } from 'vitest';

const motionProps = new Set([
  'initial',
  'animate',
  'exit',
  'transition',
  'whileHover',
  'whileTap',
  'whileFocus',
  'whileDrag',
  'whileInView',
  'viewport',
  'variants',
  'custom',
  'layout',
  'layoutId',
  'drag',
  'dragConstraints',
  'dragElastic',
  'dragMomentum',
  'onAnimationStart',
  'onAnimationEnd',
  'onAnimationIteration',
]);

const filterProps = (props) => {
  const filtered = {};
  for (const key of Object.keys(props)) {
    if (!motionProps.has(key)) {
      filtered[key] = props[key];
    }
  }
  return filtered;
};

const createMotionComponent = (tag) => {
  const Component = ({ children, ...props }) => {
    const Tag = tag;
    return <Tag {...filterProps(props)}>{children}</Tag>;
  };
  return Component;
};

vi.mock('framer-motion', () => ({
  motion: new Proxy(
    {},
    {
      get: (_, tag) => createMotionComponent(tag),
    }
  ),
  AnimatePresence: ({ children }) => children,
}));