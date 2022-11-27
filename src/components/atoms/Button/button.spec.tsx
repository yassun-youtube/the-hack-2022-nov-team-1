import { expect } from '@jest/globals'
import { render } from '@testing-library/react'
import { Button } from '@components/atoms/Button/button'
import '@testing-library/jest-dom'

describe('button test', () => {
  it('should button', () => {
    const { getByText } = render(<Button label={'aaa'} />)
    expect(getByText('aaa')).toBeTruthy()
  })
})
