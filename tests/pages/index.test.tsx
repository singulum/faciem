import React from 'react'
import { render } from '../testUtils'
import { HomePage } from '../../pages/index'

describe('Homepage', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HomePage />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
