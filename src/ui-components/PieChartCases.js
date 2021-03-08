import React from 'react';
import {
  ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';

const COLORS = ['#FF8042', '#0088FE', '#FF0000'];

const PieChartCases = (props) => {



  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={props.data} fill="#8884d8" label labelLine={true}>
            {
              props.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}


export default PieChartCases


