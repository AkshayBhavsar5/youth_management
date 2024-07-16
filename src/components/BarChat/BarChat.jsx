import React,{useState} from 'react'
import Chart from 'chart.js/auto';
import { Bar  } from 'react-chartjs-2';


import Select from "react-select"; // Import react-select
import Filtes from '../Dashboard/Filters/Filtes';
  

function BarChat() {
  return (
    
    
    <>    
    <div className=' flex flex-wrap justify-between'>
      <div>
      <Filtes/>
      </div>
    
      <div className=' w-20rem h-full md:w-8/12 mx-auto'>
        <Bar
          data={{
            labels: ["Akshay", "saju", "rakesh"],
            datasets: [
              {
                label: "name",
                data: [100, 200, 300],
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>
      <div className='w-full h-4/5 md:w-6/12 mx-auto'>
        
      </div>
    </div>
    </>
  )
}

export default BarChat


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