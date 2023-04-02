const Submit = (props) => {
  return (
    <button class="btn btn-wide bg-transparent rounded-full text-center text-pink border-2 border-dark-pink hover:bg-transparent border-pink">
      {props.children}
    </button>
  );
};

export default Submit;
