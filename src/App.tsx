import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Buttons from './Component/Authentication/Buttons';
import Register from './Component/Authentication/Register';
import SignIn from './Component/Authentication/SignIn';
import './App.css';
import Comment from './Component/Community/Comment';
import Categories from './Component/PECS/Categories';
import PECS from './Component/PECS/PECS';
import SideNav from './Component/SideNav';
import Hospitals from './Component/Hospitals/Hospitals';
import Teacher from './Component/Teachers/Teacher';
import Cards from './Component/PECS/Cards';
import HomePage from './Component/HomePage';
import DetailsTeacher from './Component/Teachers/DetailsTeacher';
import HospitalsDetails from './Component/Hospitals/HospitalsDetails';
import CommunityPage from './Component/Community/CommunityPage';
import TrainingCenters from './Component/TrainingCenters/TrainingCenters';
import TrainingDetails from './Component/TrainingCenters/TrainingDetails';
import Team from './Component/Team/Team';

function App() {
  return (
    <>
      <Routes>

        <Route
          path="/"
          element={<SideNav comp={undefined} children={<HomePage />} />}
        ></Route>
        <Route
          path="Hospitals"
          element={<SideNav comp={undefined} children={<Hospitals />} />}
        ></Route>
        <Route
          path="Hospitals/:id"
          element={<SideNav comp={undefined} children={<HospitalsDetails />} />}
        ></Route>
        <Route
          path="Training"
          element={<SideNav comp={undefined} children={<TrainingCenters />} />}
        ></Route>
        <Route
          path="Training/:id"
          element={<SideNav comp={undefined} children={<TrainingDetails />} />}
        ></Route>
        <Route
          path="Community"
          element={<SideNav comp={undefined} children={<CommunityPage />} />}
        ></Route>
        <Route
          path="Teachers"
          element={<SideNav comp={undefined} children={<Teacher />} />}
        ></Route>
        <Route
          path="DetailsTeacher/:id"
          element={<SideNav comp={undefined} children={<DetailsTeacher />} />}
        ></Route>
        <Route
          path="Team"
          element={<SideNav comp={undefined} children={<Team />} />}
        ></Route>
        <Route
          path="PECS"
          element={<SideNav comp={undefined} children={<PECS />} />}
        >
          <Route path="Categories" element={<Categories />} />
          <Route path="Cards" element={<Cards />} />
        </Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="signIn" element={<SignIn />}></Route>
      </Routes>
    </>
  );
}

export default App;
