import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
              {name: 'Page B', uv: 300, pv: 2400, amt: 2400},
              {name: 'Page C', uv: 200, pv: 2400, amt: 2400},
              {name: 'Page D', uv: 50, pv: 2400, amt: 2400},
              {name: 'Page E', uv: 200, pv: 2400, amt: 2400},
              {name: 'Page F', uv: 300, pv: 2400, amt: 2400} ];
              
function Grafico ()  {
  return(
    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
  );
}

export default Grafico