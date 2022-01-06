import React from 'react'

export type Severity = {
  severity: 'error' | 'warning' | 'info' | 'success'
}

export type TCartItem = {
  id: string;
  count: string
}

export type TChildProps = {
  children: React.ReactNode
}