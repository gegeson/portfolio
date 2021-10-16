import React from "react";
import "../css/About.scss";

export default function About() {
  return (
    <section id="about">
      <h1 className="numbered-heading">About me</h1>
      <h2 className="contents-body">Yuki Shigemasa/重政 有希</h2>
      <h4 className="contents-body">Student at Kyushu univ.</h4>
      <h4 className="contents-body">Backend engineer</h4>
      <div>
        <p>
          ものを作ることが好きで建築学科に入りましたが、
          大学3年の頃に自分のPC1台で色んなものが作れてしまうプログラマーへの関心が強まり、独学開始。
          その後、実際のサービスに関わりたいという思いから、スタートアップでインターンを経験。
          新しいものを開けるときのようなワクワクするプロダクトに関わること・いろんな技術を触りたいということが
          今の一番のモチベーションです。
          好きなことは、アニメ、バイク、美味しいものを食べること。
        </p>
      </div>
      <div className="skill"></div>
    </section>
  );
}
