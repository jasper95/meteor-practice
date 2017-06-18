import React from 'react'
import AccountsUIWrapper from '../AccountsUIWrapper';


export const MainLayout = ({content}) => (
  <div className="main-layout">
    <header>
      <h2>My Resolutions</h2>
      <nav>
        <a href="/">Resolutions</a>
        <a href="/about">About</a>
        <AccountsUIWrapper/>
      </nav>
    </header>
    <main>
      {content}
    </main>
  </div>
)
