/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import react, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadbook } from "../../utility/LocalStorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const ReadPages = () => {
  const books = useLoaderData();
  const [totalPages, setTotalPages] = useState([]);

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  useEffect(() => {
    const BookStoredId = getStoredReadbook();

    if (books.length > 0) {
      const readId = books.filter((book) => BookStoredId.includes(book.id));
      // Calculate total pages here
      const dataWithCart = readId.map((data) => ({
        name: data.bookname,
        pages: data.totalPages,
      }));
      setTotalPages(dataWithCart);
    }
  }, [books]);

  return (
    <div className="p-10 bg-slate-100 flex justify-center items-center m-10 rounded-xl">
      <BarChart
        width={1390}
        height={600}
        data={totalPages}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="pages"
          shape={<TriangleBar />}
          label={{ position: "top" }}>
          {totalPages.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default ReadPages;
