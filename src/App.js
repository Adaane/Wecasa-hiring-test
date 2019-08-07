import React, { Suspense } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Spin } from 'antd';
import './App.css';

import { Home,
  PrestationsPage,
  ErrorPageWrapper,
  UserAddressPage,
  AppointmentPage,
  BookingConfirmationPage} from './routes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={
          <Spin tip="Loading..."/>
          }>
        <Switch>
            <Route
              path="/step/bookingConfirmation"
              component={props => <BookingConfirmationPage {...props} />}
            />
            <Route
              path="/step/appointment"
              component={props => <AppointmentPage {...props} />}
            />
            <Route
              path="/step/user-address"
              component={props => <UserAddressPage {...props} />}
            />
            <Route
              path="/step/prestationsList"
              component={props => <PrestationsPage {...props} />}
            />
            <Route
              exact
              path="/"
              component={props => <Home {...props} />}
            />
            <Route component={props => <ErrorPageWrapper {...props} />} />
        </Switch>
        </Suspense>
      </BrowserRouter>
      </div>
  )
}

export default App;
