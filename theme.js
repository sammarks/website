const resolve = require('object-reference')
const { transparentize } = require('polished')

const colors = {
  '@blue': '#5B7AB9',
  '@blue-light': '#F4F6FA',
  '@red': '#FF6768',
  '@red-light': '#FFF0F0',
  '@green': '#50B4A0',
  '@green-light': '#F4FAF9',
  '@orange': '#FF9D33',
  '@orange-light': '#FFF8F0',

  '@gray-0': '#FFF',
  '@gray-1': '#F7F8F9',
  '@gray-2': '#D4D8DD',
  '@gray-3': '#9BA3B0',
  '@gray-4': '#6B778D',
  '@gray-5': '#263859',
  '@gray-6': '#1F2E4C',
  '@gray-7': '#1B263E'
}

const sizes = {
  '@size-xxs': '4px',
  '@size-xs': '10px',
  '@size-s': '18px',
  '@size-xm': '20px',
  '@size-m': '24px',
  '@size-ml': '30px',
  '@size-l': '36px',
  '@size-xl': '48px',
  '@size-xxl': '64px'
}

module.exports = resolve({
  ...colors,
  ...sizes,

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
  '@text-color-secondary': '$.@gray-3',
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

  '@heading-1-size': '$.@size-l',
  '@heading-2-size': '$.@size-ml',
  '@heading-3-size': '$.@size-m',

  '@font-size-base': '$.@size-s',
  '@font-size-lg': '$.@size-m',
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

  '@line-height-base': '1.9',
  '@line-height-compressed': '1.5'
})
