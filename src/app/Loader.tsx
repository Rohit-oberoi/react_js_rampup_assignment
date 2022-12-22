import React from 'react';
import { MDBSpinner } from 'mdb-react-ui-kit';

export default function Loader() {
  return (
    <MDBSpinner grow color='success'>
      <span className='visually-hidden'>Loading...</span>
    </MDBSpinner>
  );
}
