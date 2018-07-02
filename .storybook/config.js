import React from 'react'
import { configure, setAddon, addDecorator   } from '@storybook/react'
import infoAddon, { setDefaults } from '@storybook/addon-info'
import { setOptions } from '@storybook/addon-options'
import backgrounds from "@storybook/addon-backgrounds"
import Container from './Container'
import 'assets/ionicons/css/ionicons.min.css'
import 'assets/font-awesome/css/font-awesome.min.css'

setOptions({
  name: 'CUSTOMER INFORMATION SERVICE',
  url: 'https://bitbucket.org/dotography-code/customer-information-service-desktop'
})

setDefaults({
  source: false,
})

addDecorator(story => <Container story={story} />)
addDecorator(backgrounds([
  { name: "contact centre", value: "#f0f5f9", default: true },
  { name: "white", value: "#fff" },
  { name: "black", value: "#000000" },
]))

setAddon(infoAddon);

// custom story
// function loadStories() {
//   require('../_stories_/containers/BasicWindow'),
//   require('../_stories_/containers/DropDownMenu'),
//   require('../_stories_/components/Window'),
//   require('../_stories_/components/ListMenu')
// }

// all story
function loadStories() {
  const componentReq = require.context('../_stories_', true, /\.js$/)
  componentReq.keys().forEach(filename => componentReq(filename))
}

configure(loadStories, module)
