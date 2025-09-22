import { BookOpen, Users, ShoppingCart, Library } from "lucide-react"; 

const navLinks = [
    {
        name:"Dashboard",
        Link:"/",
    },
    {
        name:"Books",
        Link:"/books",
    },
    {
        name:"My Books",
        Link:"/my-book",
    },
    {
        name:"Add Books",
        Link:"/add-books",
    },
    {
        name:"Book Info",
        Link:"/book-info",
    },
    {
        name:"Profile Setting",
        Link:"/profile",
    },
];


const stats = [
  {
    title: "Total Users",
    value: "1,250",
    icon: Users, // sirf reference
    color: "bg-blue-100",
  },
  {
    title: "Total Books",
    value: "8,430",
    icon: BookOpen,
    color: "bg-green-100",
  },
  {
    title: "Issued Books",
    value: "2,310",
    icon: ShoppingCart,
    color: "bg-yellow-100",
  },
  {
    title: "Available Books",
    value: "6,120",
    icon: Library,
    color: "bg-purple-100",
  },
];

// 1. User Added Books (12 months)
  const addedBooksData = [
    { month: "Jan", books: 4 },
    { month: "Feb", books: 7 },
    { month: "Mar", books: 3 },
    { month: "Apr", books: 6 },
    { month: "May", books: 5 },
    { month: "Jun", books: 8 },
    { month: "Jul", books: 4 },
    { month: "Aug", books: 9 },
    { month: "Sep", books: 6 },
    { month: "Oct", books: 7 },
    { month: "Nov", books: 5 },
    { month: "Dec", books: 10 },
  ];

  // 2. User Bought Books (12 months)
  const boughtBooksData = [
    { month: "Jan", books: 2 },
    { month: "Feb", books: 5 },
    { month: "Mar", books: 1 },
    { month: "Apr", books: 4 },
    { month: "May", books: 3 },
    { month: "Jun", books: 6 },
    { month: "Jul", books: 2 },
    { month: "Aug", books: 7 },
    { month: "Sep", books: 4 },
    { month: "Oct", books: 5 },
    { month: "Nov", books: 3 },
    { month: "Dec", books: 8 },
  ];

  // 3. Book Categories (static, overall count)
  const categoryData = [
    { name: "Fiction", value: 40 },
    { name: "Non-Fiction", value: 25 },
    { name: "Children", value: 15 },
    { name: "Science", value: 20 },
  ];
  const categoryColors = ["#3ec6e0", "#ff7c43", "#ffa600", "#665bd0"];

  // 4. Monthly Reading Trend (12 months)
  const readingTrendData = [
    { month: "Jan", books: 0 },
    { month: "Feb", books: 8 },
    { month: "Mar", books: 6 },
    { month: "Apr", books: 10 },
    { month: "May", books: 7 },
    { month: "Jun", books: 9 },
    { month: "Jul", books: 4 },
    { month: "Aug", books: 11 },
    { month: "Sep", books: 6 },
    { month: "Oct", books: 10 },
    { month: "Nov", books: 8 },
    { month: "Dec", books: 12 },
  ];

export {navLinks,stats ,addedBooksData ,readingTrendData,categoryColors,categoryData,boughtBooksData}