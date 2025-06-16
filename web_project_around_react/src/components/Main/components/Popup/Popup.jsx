export default function Popup(props) {
  const { onClose, title, children } = props;
  return <div className="popup">{children}</div>;
}
