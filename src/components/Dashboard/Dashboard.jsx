import React from "react";



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
