export default function News({ author, description, image }) {
  return (
    <li>
      <p>
        <strong>{author}</strong>
      </p>
      <p>{description}</p>
      {image && <img src={image} alt="news" />}
    </li>
  );
}
