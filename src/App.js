import React from 'react'
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest'
import CompanyList from './components/CompanyList'

const dataProvider = restProvider('https://ziramba-backend-v2.herokuapp.com');

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name='companies/all/ug' list={CompanyList}/>

    </Admin>
  )
}

export default App;
