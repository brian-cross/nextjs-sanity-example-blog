import Avatar from "./Avatar";

export default function Author({ avatar, name }) {
  return (
    <>
      {(avatar || name) && (
        <div className="author">
          <Avatar image={avatar} />
          <span>{name}</span>
        </div>
      )}
      <style jsx>{`
        .author {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 1rem 0;
        }
      `}</style>
    </>
  );
}
