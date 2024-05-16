module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-html/vue',
    'stylelint-config-recommended-vue/scss',
  ],
  plugins: ['stylelint-order'],
  rules: {
    // ...其他规则...

    // SCSS特有的规则，例如处理@imports、变量声明等
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'scss/at-import-partial-extension': 'never',
    'scss/at-rule-no-unknown': true,
    'scss/declaration-nested-properties-no-divided-groups': true,

    // 设置属性顺序
    'order/properties-order': [
      // 通用布局属性
      'display',
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',

      // 盒模型属性
      'width',
      'height',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'box-sizing',

      // 类型排版属性
      'font',
      'font-family',
      'font-size',
      'font-weight',
      'line-height',
      'text-align',
      'text-decoration',
      'color',

      // 背景与边框
      'background',
      'background-color',
      'background-image',
      'background-position',
      'background-repeat',
      'background-size',
      'border',
      'border-width',
      'border-style',
      'border-color',
      'border-radius',

      // Flex & Grid布局
      'flex',
      'flex-grow',
      'flex-shrink',
      'flex-basis',
      'align-items',
      'justify-content',
      'grid-template-columns',
      'grid-template-rows',

      // 动画与过渡
      'transition',
      'transition-property',
      'transition-duration',
      'transition-timing-function',
      'transition-delay',
      'animation',
      'animation-name',
      'animation-duration',
      'animation-timing-function',
      'animation-delay',
      'animation-iteration-count',

      // 其他
      'opacity',
      'cursor',
      'outline',
      'visibility',
      'list-style',

      // 自定义属性和未分类属性放在最后
      'custom-properties',
      'unspecified',
    ],

    // ...其他规则...
  },
};
