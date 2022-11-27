'use client'
import Image from 'next/image'
import './header.css'
import IconSVG from '@assets/svg/icon.svg'
import { Button } from '@components/atoms/Button/button'

type User = {
  name: string
}

interface HeaderProps {
  user?: User
  onLogin: () => void
  onLogout: () => void
  onCreateAccount: () => void
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  // export const Header = () => (
  <header>
    <div className='wrapper'>
      <div>
        <Image
          src={IconSVG}
          alt={'icon'}
          width={50}
          height={50}
        />
        <h1>Acme</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className='welcome'>
              Welcome, <b>{user.name}</b>!
            </span>
            <Button
              size='small'
              onClick={onLogout}
              label='Log out'
            />
          </>
        ) : (
          <>
            <Button
              size='small'
              onClick={onLogin}
              label='Log in'
            />
            <Button
              primary
              size='small'
              onClick={onCreateAccount}
              label='Sign up'
            />
          </>
        )}
      </div>
    </div>
  </header>
)
