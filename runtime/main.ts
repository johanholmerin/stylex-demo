// @ts-expect-error
import inject from '@stylexjs/dev-runtime';
import stylex from '@stylexjs/stylex';

inject({
  dev: true,
  test: false,
  classNamePrefix: 'x-',
  definedStylexCSSVariables: {
    primary: {
      lightMode: 'black',
      darkMode: 'white',
    },
  },
});

const styles = stylex.create({
  base: {
    fontSize: 16,
    lineHeight: 1.5,
    color: 'rgb(60,60,60)',
  },
  highlighted: {
    color: 'rebeccapurple',
  },
});

document.body.className = stylex(styles.base);
document.body.querySelector('h1')!.className = stylex(styles.highlighted);
