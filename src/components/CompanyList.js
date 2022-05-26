import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin'

const CompanyList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <TextField source='legal_name' />
        <TextField source='business_type' />
        <TextField source='email' />
        <TextField source='phone_number' />
        <EditButton basePath='/companies/all/ug' />
        <DeleteButton basePath='/companies/all/ug' />
      </Datagrid>
    </List>
  )
}

export default CompanyList