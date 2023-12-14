const Error = (props) => {
  const { message } = props;
  return (
    <div>
      <h2>Error</h2>
      <p>{message}</p>
    </div>
  );
};

export default Error;
