import React from "react";
import ResponsiveContainer from "recharts/lib/component/ResponsiveContainer";
import { ComposedChart, Bar, Area } from "recharts";
import Line from "recharts/lib/cartesian/Line";
import XAxis from "recharts/lib/cartesian/XAxis";
import YAxis from "recharts/lib/cartesian/YAxis";
import CartesianGrid from "recharts/lib/cartesian/CartesianGrid";
import Tooltip from "recharts/lib/component/Tooltip";
import Legend from "recharts/lib/component/Legend";
import { data } from "../data";
function SimpleChart() {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="99%" height={320}>
      <ComposedChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Area type="basis" dataKey="tagsTotal" />
        <Area type="basis" dataKey="tagsRemaining" />
        <Bar dataKey="tagsFixed" barSize={20} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default SimpleChart;
