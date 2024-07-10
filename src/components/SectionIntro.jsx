const SectionIntro = ({ info }) => {
  return (
    <div className="text-center w-1/2 mx-auto">
      <h1 className="text-[30px] text-header font-semibold font-Source_Sans">{info?.header}</h1>
      <p className="py-4">{info?.title}</p>
    </div>
  );
};

export default SectionIntro;
