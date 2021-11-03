import React from 'react'
import { BarChart, Bar, XAxis, YAxis } from 'recharts'

type Props = {
  prodMapped
  option: string
}

const ProdChart = ({ prodMapped, option = 'AC' }: Props) => {
  return (
    <BarChart width={350} height={100} data={prodMapped}>
      <XAxis dataKey="day" />
      <YAxis />
      <Bar dataKey={option} fill="#F57F17" />
    </BarChart>
  )
}
export default ProdChart
