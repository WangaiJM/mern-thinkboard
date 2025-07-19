import { Routes, Route } from "react-router";

import HomePage from "./../pages/HomePage";
import CreatePage from "./../pages/CreatePage";
import DetailsPage from "./../pages/DetailsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/note/:id" element={<DetailsPage />} />
    </Routes>
  );
};
export default AppRoutes;
