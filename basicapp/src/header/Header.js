export function Header(props) {
  return (
    <div className="p-5 bg-primary text-white text-center">
      <h1>{props.brand}</h1>
      <p>{props.slogan}</p>
    </div>
  );
}
