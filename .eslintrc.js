module.exports = {
  "parser": "babel-eslint",
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true
  },
  "extends": "standard",
  "parserOptions": {
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "react-hooks"
  ],
  "rules": {
      "strict": 0,
      "no-case-declarations": 2,
      "react/jsx-uses-vars": 1,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "class-property-semicolon": 0,
      "no-useless-escape": 0,
      "no-console": 0,
      "no-control-regex": 0,
      "linebreak-style": 0,
      "semi": [ "error", "always" ],
      "comma-dangle": [ "error", "always-multiline" ],
      "one-var": 0,
      "no-return-assign": 0,
  },
  "globals": {
      "PREFIX": false,
      "RSA_PUBLIC_KEY": false
  }
};
