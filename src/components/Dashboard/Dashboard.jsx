import React from "react";

const cards = [
  {
    title: "Karyakata with Yuva Seva",
    subtitle: "20 Yuva",
    content: "Month ",
  },
  {
    title: "Karyakarta Without Yuva Seva",
    subtitle: "No Yuva Seva",
    content: "Month",
  },
  {
    title: "Total Hour Of Seva ",
    subtitle: "20 HR",
    content: "Month",
  },
  {
    title: "Unique Yuvako Touched",
    subtitle: "14 Yuvako",
    content: "Month",
  },
  {
    title: "Total Yuvako Touched",
    subtitle: "30 Yuvko",
    content: "Month",
  },
  {
    title: "Total Untouched Yuvako",
    subtitle: "34 Yuvako",
    content: "Month",
  },
];

function Card(props) {
  return (
    <div className="bg-gray-200 rounded-md shadow-md p-4 my-8">
      <h2 className="text-sx font-bold  text-gray-800 mb-2">{props.title}</h2>
      {props.subtitle && (
        <p
          className="text-gray-600
         font-bold text-3xl "
        >
          {props.subtitle}
        </p>
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
