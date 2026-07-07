import React from "react";
import MainCard from "./MainCard";

const AppMain = () => {
  const students = [
    {
      id: 1,
      logo:
        "https://portal.ganpatuniversity.ac.in/web/image/website/1/logo?unique=8c6ec10",
      photo:
        "https://images.unsplash.com/photo-1584473457409-ae5c91d7d8b1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Mayuri Kumari",
      enrollment: "22012021001",
      college: "AMPICS",
      course: "BCA Hons",
      bloodGroup: "B+",
      mobile: "9876543210",
      hostel: "A-101",
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {students.map((student) => (
        <MainCard
          key={student.id}
          logo={student.logo}
          photo={student.photo}
          name={student.name}
          enrollment={student.enrollment}
          college={student.college}
          course={student.course}
          bloodGroup={student.bloodGroup}
          mobile={student.mobile}
          hostel={student.hostel}
        />
      ))}
    </div>
  );
};

export default AppMain;