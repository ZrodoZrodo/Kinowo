const ButtonLandingPage = (props) => {
  return (
    <button className="rounded-full text-white border-2 border-dark-red w-48 h-14 ">
      {props.children} 
    </button>
  );
};

export default ButtonLandingPage;
