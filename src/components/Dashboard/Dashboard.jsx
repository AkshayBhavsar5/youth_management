import React from "react";

const cards = [
  {
    title: "NEW ACCOUNTS",
    subtitle: "234%",
    content: "",
  },
  {
    title: "TOTAL EXPENSES",
    subtitle: "58",
    content: "",
  },
  {
    title: "COMPANY VALUE",
    subtitle: "71%",
    content: "$ 1,45M",
  },
  {
    title: "NEW EMPLOYEES",
    subtitle: "34 hires",
    content: "at",
  },
  {
    title: "NEW EMPLOYEES",
    subtitle: "34 hires",
    content: "at",
  },
  {
    title: "NEW EMPLOYEES",
    subtitle: "34 hires",
    content: "at",
  },
];

function Card(props) {
  return (
    <div className="bg-gray-200 rounded-md shadow-md p-4 my-8">
      <h2 className="text-xl  text-gray-800 mb-2">{props.title}</h2>
      {props.subtitle && (
        <p className="text-gray-600 font-bold text-3xl ">{props.subtitle}</p>
      )}
      {props.content && <p className="text-gray-600">{props.content}</p>}
    </div>
  );
}

function Dashboard() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          content={card.content}
        />
      ))}
    </div>
  );
}
export default Dashboard;
