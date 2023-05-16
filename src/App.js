
import './App.css';
import StuComponent from './components/studentCompo';

import 'bootstrap/dist/css/bootstrap.min.css';
import TeachComponent from './components/teacherCompo';
import AddStudent from './components/AddStudent';



import { Route, Switch } from 'react-router-dom';
import BaseApp from './core/BaseApp';
import TeacherDetail from './components/TeacherDetails';
import StudentDetail from './components/StudentDetail';
import AddTeacher from './components/AddTeacher';
import { EditStudent } from './components/EditStudent';




function App() {


  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <BaseApp
            tittle="Select Student Detail or Teacher Detail"
            styles="tittle">
          </BaseApp>
        </Route>
        <Route path="/student">
          <StuComponent
           />
        </Route>
        <Route path="/teacher">
          <TeachComponent
           />
        </Route>

        <Route path="/addstudent">

          <AddStudent
            />

        </Route>

        <Route path="/addteacher">

          <AddTeacher
         />
        </Route>

        <Route path="/:id">
          <TeacherDetail
          />
           

        </Route>

        <Route path="/edit/:id">
          <EditStudent
          />
           
    
        </Route>

        <Route path="/:id">
          <StudentDetail
          />
           

        </Route>

      </Switch>






    </div>
  );
}

export default App;
