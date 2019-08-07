import React from 'react'

export const Home = React.lazy(() => import('./pages/home'))
export const PrestationsPage = React.lazy(() => import('./pages/prestationsPage'))
export const UserAddressPage = React.lazy(() => import('./pages/userAddressPage'))
export const AppointmentPage = React.lazy(() => import('./pages/appointmentPage'))
export const BookingConfirmationPage = React.lazy(() => import('./pages/bookingConfirmationPage'))
export const ErrorPageWrapper = React.lazy(() => import('./pages/error'))