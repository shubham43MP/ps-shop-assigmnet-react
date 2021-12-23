import React from 'react'
import Header from '../header'

type HeaderWrapperType = {
  component: React.ElementType
}

const HeaderWrapper = ({ component: Component }: HeaderWrapperType) => (
  <Header>
    <Component />
  </Header>
)

export default HeaderWrapper