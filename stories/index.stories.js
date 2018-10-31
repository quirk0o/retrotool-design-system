import React from 'react'

import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'
import { Span } from '../src/atoms/typography/span'
import { Header } from '../src/atoms/typography/header'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Span')} />)

storiesOf('Typography', module)
  .add('with text', () => (
    <div style={{maxWidth: 600, padding: 32, marginLeft: 'auto', marginRight: 'auto'}}>
      <Header>Sad, mad, glad, sad</Header>
      <Span>
        The quick brown fox jumps over the lazy dog. All their equipment and instruments are alive. Almost before we knew it, we had left the ground. A shining crescent fair beneath the flying vessel. It was going to be a lonely trip back. My two natures had memory in common. Silver mist suffused the deck of the ship. The face of the moon was in shadow. The recorded voice scratched in the speaker. The sky was cloudless and of a deep dark blue.
      </Span>
    </div>
  ))
