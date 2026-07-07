import photo from "../../assets/brijesh-photo.jpg";

const StudentPhoto = () => {
  return (
    <div className="flex justify-center">
      <img
        src={photo}
        alt="Brijesh"
        className="w-28 h-32 border-2 border-red-500 object-cover rounded"
      />
    </div>
  );
};

export default StudentPhoto;