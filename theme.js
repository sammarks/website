const resolve = require('object-reference')
const { transparentize } = require('polished')

const colors = {
  '@blue': '#3788DD',
  '@blue-light': '#A3C8F0',
  '@red': '#E52E59',
  '@red-light': '#FFC8D5',
  '@green': '#53D590',
  '@green-light': '#A3F0C7',
  '@orange': '#F0A760',
  '@orange-light': '#F0CAA3',

  '@gray-0': '#FFF',
  '@gray-1': '#F7F8F9',
  '@gray-2': '#E2E5E9',
  '@gray-3': '#C3CBD4',
  '@gray-4': '#A2ABB4',
  '@gray-5': '#7C8894',
  '@gray-6': '#5D6874',
  '@gray-7': '#37404A'
}

const sizes = {
  '@size-xxs': '4px',
  '@size-xs': '8px',
  '@size-s': '16px',
  '@size-xm': '18px',
  '@size-m': '22px',
  '@size-l': '32px',
  '@size-xl': '48px',
  '@size-xxl': '64px'
}

module.exports = resolve({
  ...colors,
  ...sizes,

  '@font-family': "'Open Sans', sans-serif",
  '@code-family': "'Hasklig', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",

  '@shadow-color': transparentize(0.85, colors['@gray-4']),
  '@shadow-small': `0.5px 1px 2px ${transparentize(0.45, colors['@gray-4'])}`,
  '@shadow-medium': `2px 2px ${sizes['@size-xs']} ${transparentize(0.65, colors['@gray-4'])}`,
  '@shadow-large': `2px ${sizes['@size-xs']} ${sizes['@size-s']} ${transparentize(0.85, colors['@gray-4'])}`,

  '@component-background': '$.@gray-0',
  '@background-color-light': transparentize(0.5, colors['@gray-1']),
  '@background-color-base': '$.@gray-1',
  '@background-color-dark': '$.@gray-6',
  '@background-color-black': '$.@gray-7',
  '@text-color-dark': '$.@gray-1',
  '@text-color-secondary-dark': '$.@gray-4',
  '@input-bg': '$.@gray-1',
  '@picker-bg': '$.@gray-1',
  '@btn-default-bg': '$.@gray-1',
  '@select-background': '$.@gray-1',
  '@item-hover-bg': '$.@gray-1',
  '@primary-color': '$.@red',
  '@text-color': '$.@gray-6',
  '@text-color-secondary': '$.@gray-4',
  '@heading-color': '$.@gray-7',
  '@border-color-base': '$.@gray-2',
  '@border-color-split': transparentize(0.25, colors['@gray-2']),
  '@border-radius-base': '$.@size-xxs',
  '@border-width-base': '0px',
  '@border-color-dark': '$.@gray-3',

  '@menu-bg': 'transparent',
  '@menu-inline-toplevel-item-height': '$.@size-xl',
  '@dropdown-line-height': '$.@size-l',

  '@tabs-horizontal-margin': `0 ${sizes['@size-s']} 0 0`,
  '@tabs-horizontal-padding': '@padding-sm 0',
  '@tabs-horizontal-padding-lg': '@padding-md 0',
  '@tabs-horizontal-padding-sm': '@padding-xs 0',

  '@checkbox-size': '$.@size-m',
  '@checkbox-check-bg': '$.@gray-1',

  '@page-header-padding': '0',
  '@page-header-padding-vertical': '0',
  '@page-header-back-color': '@text-color-secondary',

  '@collapse-header-padding': `${sizes['@size-xs']} 0`,
  '@collapse-header-bg': '@component-background',
  '@collapse-content-padding': `${sizes['@size-xxs']} ${sizes['@size-s']} ${sizes['@size-m']} ${sizes['@size-s']}`,

  '@avatar-bg': '$.@gray-5',

  '@modal-footer-padding-vertical': '$.@size-s',
  '@modal-body-padding': '$.@size-m',
  '@modal-footer-padding-horizontal': '$.@size-m',

  '@heading-1-size': '$.@size-xl',
  '@heading-2-size': '$.@size-m',
  '@heading-3-size': '$.@size-s',

  '@font-size-base': '$.@size-s',
  '@font-size-lg': '$.@size-xm',
  '@font-size-sm': '14px',

  '@padding-lg': '$.@size-m',
  '@padding-md': '$.@size-xm',
  '@padding-sm': '$.@size-s',
  '@padding-xs': '$.@size-xs',

  '@form-item-margin-bottom': '$.@size-l',

  '@input-height-base': '@size-xl - @size-xs',
  '@input-height-lg': '@input-height-base + @size-xs',
  '@input-height-sm': '@input-height-base - @size-xs',
  '@btn-height-base': '@input-height-base',
  '@btn-height-lg': '@input-height-lg',
  '@btn-height-sm': '@input-height-sm',

  '@line-height-base': '1.25'
})
