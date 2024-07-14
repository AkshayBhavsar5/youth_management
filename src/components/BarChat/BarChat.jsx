import React,{useState} from 'react'
import Chart from 'chart.js/auto';
import { Bar  } from 'react-chartjs-2';


import Select from "react-select"; // Import react-select
  

function BarChat() {
  return (
    
    
    <>    
    <div className=' flex flex-wrap justify-between'>
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