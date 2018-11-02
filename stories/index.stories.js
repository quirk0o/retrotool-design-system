import React from 'react'

import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'
import { Span } from '../src/atoms/typography/span'
import { Header } from '../src/atoms/typography/header'
import { Card } from '../src/atoms/card'
import { Board } from '../src/atoms/organisms/board'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Span')} />)

storiesOf('Typography', module)
  .add('with text', () => (
    <div style={{ maxWidth: 600, padding: 32, marginLeft: 'auto', marginRight: 'auto' }}>
      <Header>Sad, mad, glad, sad</Header>
      <Span>
        The quick brown fox jumps over the lazy dog. All their equipment and instruments are alive. Almost before we knew it, we had left the ground. A shining crescent fair beneath the flying vessel. It was going to be a lonely trip back. My two natures had memory in common. Silver mist suffused the deck of the ship. The face of the moon was in shadow. The recorded voice scratched in the speaker. The sky was cloudless and of a deep dark blue.
      </Span>
    </div>
  ))

storiesOf('Card', module)
  .add('default', () => (
    <Card>
      Start sprints on Fridays and finish on Thursdays
    </Card>
  ))
  .add('small', () => (
    <Card size="small">
      Longer timespans between internal external releases (more time for validation)
    </Card>
  ))
  .add('tiny', () => (
    <Card size="tiny">
      Think about dependencies on sprint planning and when stories are pulled in in the middle of a sprint
    </Card>
  ))

storiesOf('Board', module)
  .add('with cards', () => (
    <div style={{ height: '100vh', padding: 20 }}>
      <Board
        cards={[
          { text: 'Start sprints on Fridays and finish on Thursdays' },
          { text: 'Release critical features to preprod earlier' },
          { text: 'Longer timespans between internal external releases (more time for validation)', size: 'small' },
          {
            text: 'Think about dependencies on sprint planning and when stories are pulled in in the middle of a sprint',
            size: 'tiny'
          },
          { text: 'Shared project plan or Gantt chart with release dates across teams' },
          { text: 'Finish validation on Monday' },
          { text: 'Longer timespans between internal external releases (more time for validation)', size: 'small' },
          { text: 'Stories need to be accepted by Friday morning Polish time' },
          {
            text: 'Think about dependencies on sprint planning and when stories are pulled in in the middle of a sprint',
            size: 'tiny'
          }
        ]}
      />
    </div>
  ))
