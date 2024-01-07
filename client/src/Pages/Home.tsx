import React, { useEffect } from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import OwnerDashboard from "./OwnerDashboard";
import Sitters from "./Sitters";
import DogHouse from "./DogHouse";
import Jobs from "./Jobs";
import SitterDashboard from "./SitterDashboard";
import { userAuthAtom } from "../StateManagement/store";
import { useAtom } from "jotai";
import Profile from "./Profile";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useAtom(userAuthAtom);

  if (!currentUser?.id) {
    navigate("/signin");
  }

  const { data: allJobs } = useQuery({
    queryKey: ["allJobs"],
    queryFn: () => {
      return axios.get("/jobs");
    },
  });

  if (!currentUser?.id)
    return (
      <Flex justify="center" alignItems="center" height="100vh" width="100vw">
        <Spinner size="xl" />
      </Flex>
    );

  return (
    <Flex>
      <NavBar>
        <Flex>
          <Routes>
            <Route path="/" element={<OwnerDashboard />} />
            <Route path="/doghouse" element={<DogHouse />} />
            <Route path="/jobs" element={<Jobs allJobs={allJobs} />} />
            <Route path="/sitter-dashboard" element={<SitterDashboard />} />
            <Route path="/sitters" element={<Sitters />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Flex>
      </NavBar>
    </Flex>
  );
};

export default Home;
