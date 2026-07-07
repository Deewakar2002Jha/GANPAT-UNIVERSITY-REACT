const ValidityInfo = ({ validity }) => {
  return (
    <div className="text-center mt-1">
      <p className="text-sm">
        Validity: {validity}
      </p>
    </div>
  );
};

export default ValidityInfo;