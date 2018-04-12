module.exports = {
  "extends":[
    "airbnb"
  ],
  "rules":{
    "semi":"error",
    "comma-dangle": [ "error", "never"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "no-underscore-dangle":"off",
    "arrow-parens":["error", "as-needed"],
    "keyword-spacing":["error", { "before": true }],
    "quotes": ["error", "single"],
    "jsx-quotes": ["error", "prefer-single"],
    "react/prefer-es6-class":["error", "always"],
    "no-plusplus":["error", { "allowForLoopAfterthoughts": true }],
    "consistent-return":"off",
    "react/jsx-filename-extension":[1, { "extensions": [".js", ".jsx"] }],
    "no-console":"off",
    "import/first":"off",
    "radix":"off",
    "max-len":"warn",
    "default-case":"off",
    "import/prefer-default-export":"off",
    "no-use-before-define":"off",
    "no-loop-func":"warn",
    "no-control-regex":"warn",
    "no-restricted-syntax":"off",
    "no-unused-expressions":0,
    "chai-friendly/no-unused-expressions":2,
    "global-require":"off",
    "react/no-array-index-key":"off",
    "no-continue":"off",
    "react/prop-types":"off",
    "no-shadow":"off",
    "no-param-reassign":"off",
    "camelcase":"warn",
    "no-return-assign":"off",
    "no-mixed-operators":"off",
    "no-confusing-arrow":"off",
    "no-restricted-globals": "warn",
    "guard-for-in":"off",
    "no-new":"off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions":"warn",
    "jsx-a11y/label-has-for":"off",
    "react/no-did-mount-set-state":"warn",
    "react/no-did-update-set-state":"warn",
    "react/prefer-stateless-function":"warn",
    "react/style-prop-object":"warn",
    "array-callback-return":"off",
    "no-useless-escape":"off",
    "import/no-named-as-default-member":"off",
    "jsx-a11y/href-no-hash":"off",
    "import/extensions":"off",
    "import/no-unresolved":"off",
    "react/forbid-prop-types":"off",
    "react/no-will-update-set-state": "warn",
    "no-nested-ternary": "warn",
    "no-extend-native":"off",
    "no-bitwise":"warn",
    "import/no-dynamic-require":"off",
    "prefer-promise-reject-errors": "off",
    "prefer-rest-params": "off",
    "react/sort-comp":[
      1,
      {
        "order":[
          "static-methods",
          "lifecycle",
          "everything-else",
          "rendering"
        ],
        "groups":{
          "rendering":[
            "render",
            "/^render.+$/"
          ]
        }
      }
    ]
  },
  "globals":{
    "document":true,
    "window":true
  },
  "plugins":[
    "react",
    "chai-friendly"
  ]
};