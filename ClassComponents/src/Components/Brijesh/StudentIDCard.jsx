import UniversityLogo from "./UniversityLogo";
import StudentPhoto from "./StudentPhoto";
import StudentName from "./StudentName";
import EnrollmentNo from "./EnrollmentNo";
import CollegeInfo from "./CollegeInfo";
import CourseInfo from "./CourseInfo";
import BloodGroup from "./BloodGroup";
import MobileInfo from "./MobileInfo";
import ValidityInfo from "./ValidityInfo";
import BarcodeSection from "./BarcodeSection";

const StudentIDCard = () => {
  return (
    <div className="flex justify-center mt-10 mb-10">
      <div className="flex bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-300">
        <div className="bg-red-700 w-16 flex items-center justify-center">
          <h1
            className="text-white font-bold text-2xl tracking-widest"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            STUDENT
          </h1>
        </div>

        <div className="w-80 p-4">
          <UniversityLogo />

          <h2 className="text-center font-bold mb-2">
            GANPAT UNIVERSITY
          </h2>

          <StudentPhoto />

          <StudentName name="BRIJESH CHAUDHARY" />

          <EnrollmentNo enrollment="24032211017" />

          <CollegeInfo college="AMPICS" />

          <CourseInfo course="BCA (Hons.)" />

          <BloodGroup bloodGroup="A+" />

          <MobileInfo mobile="9797444128" />

          <ValidityInfo validity="14/06/2028" />

          <BarcodeSection />
        </div>
      </div>
    </div>
  );
};

export default StudentIDCard;