import "./mainStyle.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Card } from "../news/cardNew";
import { useAuth } from "../../hooks/useAuth";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../slices/hooks";
import { getNews, newsSelector } from "../../slices/slicesNews";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { db, user } = useAuth();
  const navigate = useNavigate();
  const nameUser = user?.name;
  const selectedUsers = useAppSelector(newsSelector);

  const getData = useCallback(async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "news"));
      let array = [];
      querySnapshot.forEach((doc) => {
        array.push({...doc.data(), 'id': doc.id});
      });
      dispatch(getNews(array));
    } catch (error) {
      console.log(error);
    }
  }, [db, dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      <h1>Добро пожаловать</h1>
      <div className="news-list">
      {selectedUsers &&
        selectedUsers.value.map((database, i) => {
          return <Card key={i} id={database.id} title={database.title} text={database.text} author={nameUser} />;
        })}
      </div>
      <Button
        className="add-button-main"
        type="primary"
        htmlType="submit"
        onClick={() => {
          navigate("/news");
        }}
      >
        Добавить запись
      </Button>
    </div>
  );
};
