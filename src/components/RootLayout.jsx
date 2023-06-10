import React from 'react'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'
import store from '../store/Store2'
import { NavbarPannel } from './NavbarPannel'


export const RootLayout = () => {
  return (
    <div>
      <Provider store={store}>
        <NavbarPannel />
        <main>
          <Outlet />
        </main>
      </Provider>
    </div>
  )
}
