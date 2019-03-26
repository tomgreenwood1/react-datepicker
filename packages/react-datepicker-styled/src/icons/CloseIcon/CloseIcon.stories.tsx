import React from 'react'
import {storiesOf} from '@storybook/react'
import {text, color} from '@storybook/addon-knobs'
import CloseIcon from '.'

storiesOf('Components/Icons', module).add('CloseIcon', () => (
  <CloseIcon
    color={color('Color', '#000')}
    height={text('Height', '30px')}
    width={text('Width', '30px')}
  />
))
