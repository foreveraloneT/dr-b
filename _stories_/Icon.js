import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import JsCode from './JsCode'
import { Icon } from 'components/common'

const src1 =
`
import { Icon } from 'back-office-library'

<Icon
  iconClassName="ion-home"
/>

`

const src2 =
`
import { Icon } from 'back-office-library'

<Icon
  size={24}
  iconClassName="ion-home"
  color="green"
  hoverColor="red"
  onClick={action('click')}
/>

`

const src3 =
`
import { Icon } from 'back-office-library'

const icon1 = 'http://icons.veryicon.com/png/Movie%20%26%20TV/Doraemon/joy.png'

<Icon
  size={50}
  iconImage={icon1}
  onClick={action('click')}
/>

`

const src4 =
`
import { Icon } from 'back-office-library'

const icon1 = 'http://icons.veryicon.com/png/Movie%20%26%20TV/Doraemon/joy.png'

<Icon
  size={30}
  iconImage={icon1}
  hoverOpacity={0.8}
  onClick={action('click')}
/>

`

const src5 =
`
import { Icon } from 'back-office-library'

const icon1 = 'http://icons.veryicon.com/png/Movie%20%26%20TV/Doraemon/joy.png'
const icon2 = 'http://icons.veryicon.com/png/Movie%20%26%20TV/Doraemon/sorry.png'

<Icon
  size={30}
  iconImage={icon1}
  hoverImage={icon2}
  onClick={action('click')}
/>

`

const icon1 = 'http://icons.veryicon.com/png/Movie%20%26%20TV/Doraemon/joy.png'
const icon2 = 'http://icons.veryicon.com/png/Movie%20%26%20TV/Doraemon/sorry.png'

storiesOf('Icon', module)
  .addWithInfo(
    'class icon with default props',
    <JsCode>{ src1 }</JsCode>,
    () =>
      <Icon
        iconClassName="ion-home"
      />
  )
  .addWithInfo(
    'class icon with extra props',
    <JsCode>{ src2 }</JsCode>,
    () =>
      <Icon
        size={24}
        iconClassName="ion-home"
        color="green"
        hoverColor="red"
        onClick={action('click')}
      />
  )
  .addWithInfo(
    'image icon with default props',
    <JsCode>{ src3 }</JsCode>,
    () =>
      <Icon
        size={30}
        iconImage={icon1}
        onClick={action('click')}
      />
  )
  .addWithInfo(
    'image icon with hover opacity',
    <JsCode>{ src4 }</JsCode>,
    () =>
      <Icon
        size={30}
        iconImage={icon1}
        hoverOpacity={0.8}
        onClick={action('click')}
      />
  )
  .addWithInfo(
    'image icon with hover image',
    <JsCode>{ src5 }</JsCode>,
    () =>
      <Icon
        size={30}
        iconImage={icon1}
        hoverImage={icon2}
        onClick={action('click')}
      />
  )