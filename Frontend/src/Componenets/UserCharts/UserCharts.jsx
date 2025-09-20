import React from "react";
import {
  PieChart, Pie, Cell, Legend, Tooltip,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  LineChart, Line, ResponsiveContainer
} from "recharts";
import { addedBooksData, boughtBooksData, categoryColors, categoryData, readingTrendData, stats } from "../../data";

const UserCharts = () => {
  
  return (
    <section className="w-full p-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="mb-6  font-bold text-light">
          Book Management System
        </h1>
      </div>

      {/* Stats Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`rounded-2xl shadow-md p-6 flex items-center gap-4 ${item.color}`}
            >
              <div className="p-3 rounded-xl bg-white shadow-sm">
                <Icon className="w-8 h-8 text-gray-800" />
              </div>
              <div>
                <p className="text-gray-700 font-semibold">{item.title}</p>
                <h2 className="text-xl font-bold text-gray-900">
                  {item.value}
                </h2>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* 1. User Added Books */}
        <div className="p-6 rounded-2xl shadow-md bg-white">
          <h2 className="text-lg font-semibold mb-4">Books Added by User (Yearly)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={addedBooksData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="books" fill="#3ec6e0" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 2. User Bought Books */}
        <div className="p-6 rounded-2xl shadow-md bg-white">
          <h2 className="text-lg font-semibold mb-4">Books Bought by User (Yearly)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={boughtBooksData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="books" stroke="#665bd0" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 3. Book Categories */}
        <div className="p-6 rounded-2xl shadow-md bg-white flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">Book Categories</h2>
          <PieChart width={300} height={300}>
            <Pie
              data={categoryData}
              cx="50%" cy="50%"
              outerRadius={100}
              label
              dataKey="value"
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={categoryColors[index % categoryColors.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* 4. Monthly Reading Trend */}
        <div className="p-6 rounded-2xl shadow-md bg-white">
          <h2 className="text-lg font-semibold mb-4">Monthly Reading Trend (Yearly)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={readingTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="books" stroke="#ff7c43" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default UserCharts;
