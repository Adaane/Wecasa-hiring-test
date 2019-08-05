import React from 'react'

export const Home = React.lazy(() => import('./pages/home'))
export const PrestationsPage = React.lazy(() => import('./pages/prestationsPage'))
export const ErrorPageWrapper = React.lazy(() => import('./pages/error'))