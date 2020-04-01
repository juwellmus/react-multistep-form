import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MasterForm from "./containers/MasterForm /MasterForm";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-2">
          <MasterForm />
        </div>
      </div>
    </div>
  );
}

export default App;
