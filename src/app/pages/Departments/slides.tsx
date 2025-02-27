import React from 'react';
import DepartmentSlide from "./departmentSlide"
import JuniorHighSlide from "./juniorHighSlide"
import SeniorHighSlide from "./seniorHighSlide"
export const slides = [
    {
      id: 1,
      content: (
        <DepartmentSlide/>
      ),
    },
    {
      id: 2,
      content: (
        <JuniorHighSlide/>
      ),
    },
    {
      id: 3,
      content: (
        <SeniorHighSlide/>
      ),
    },
  ];