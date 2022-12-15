import { expect } from '@jest/globals'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import SideNewsLabel from '@components/atoms/SideNewsLabel/index'

describe('SideNewsLabel test', () => {
  it('should SideNewsLabel', () => {
    const { getByText } = render(<SideNewsLabel label={'text'} />)
    expect(getByText('text')).toBeTruthy()
  })
})
