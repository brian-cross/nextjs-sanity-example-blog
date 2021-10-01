import Author from "./Author";
import formatIsoDate from "../lib/formatIsoDate";

export default function PostHeader({
  title,
  subtitle,
  date,
  avatar,
  authorName,
}) {
  return (
    <>
      <h1 className="font-size-xl-fluid">{title}</h1>
      <h2 className="font-size-md-fluid">{subtitle}</h2>
      <p>{date && formatIsoDate(date)}</p>
      <Author avatar={avatar} name={authorName} />
      <style jsx>{`
        h2 {
          color: #666;
          font-weight: normal;
        }
      `}</style>
    </>
  );
}
