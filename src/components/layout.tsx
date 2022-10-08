import React from "react"
import Helmet from 'react-helmet'
import Icon from '../images/icon.png'
import "./layout.css"

export interface LayoutProps  { 
    children: React.ReactNode
 }

export default function Layout({ children }: LayoutProps) {
  return <>
    <Helmet>
      <link rel="icon" href={Icon} />
    </Helmet>
    <div className="">{children}</div>
  </>
}