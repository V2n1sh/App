import "../news/styleNews.css";
import { CloseImg } from "../news/logoClose";
import { doc, deleteDoc } from "firebase/firestore";
import { useAuth } from "../../hooks/useAuth";
import { removeNews } from "../../slices/slicesNews";
import { useAppDispatch } from "../../slices/hooks";

export const Card = ({id, title, text, author}) => {
  const { db } = useAuth();
  const dispatch = useAppDispatch();

  const DeleteNew = async () => {
    await deleteDoc(doc(db, "news", id));
    dispatch(removeNews(id));
  }

  return (
    <div className="container">
      <div className="form-new">
      <div className="button-close">
        <div onClick={DeleteNew}>
        <CloseImg/>
        </div>
        </div>
        <h1 className="title">{title}</h1>
        <p>{text}</p>
        <p className="author-new">От: {author}</p>
      </div>
    </div>
  );
};
