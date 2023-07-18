const GridSource = [
  {
    "Ticket#": "0:14",
    Task: "Challenging Times",
    "Pick up time": "Business",
    "Assign To": `10 Aug 2018 
    (4:30pm)`,
    Customer: "Mike john",
    Status: "In Progress",
  },
  {
    "Ticket#": "0:14",
    Task: "Challenging Times",
    "Pick up time": "Business",
    "Assign To": `10 Aug 2018 
    (4:30pm)`,
    Customer: "Mike john",
    Status: "In Progress",
  },
  {
    "Ticket#": "0:14",
    Task: "Challenging Times",
    "Pick up time": "Business",
    "Assign To": `10 Aug 2018 
    (4:30pm)`,
    Customer: "Mike john",
    Status: "In Progress",
  },
  {
    "Ticket#": "0:14",
    Task: "Challenging Times",
    "Pick up time": "Business",
    "Assign To": `10 Aug 2018 
    (4:30pm)`,
    Customer: "Mike john",
    Status: "In Progress",
  },
  {
    "Ticket#": "0:14",
    Task: "Challenging Times",
    "Pick up time": "Business",
    "Assign To": `10 Aug 2018 
    (4:30pm)`,
    Customer: "Mike john",
    Status: "In Progress",
  },
];

const LineChart = [
  {
    data: generateRandomArray(7),
    fill: false,
    lineTension: 0,
    backgroundColor: "rgba(0,0,255,1.0)",
    borderColor: "rgba(0,0,255,0.1)",
    label: 'Dataset Farrukh',
  },
  {
    data: generateRandomArray(7),
    fill: false,
    lineTension: 0,
    backgroundColor: "rgba(0,255,0,1.0)",
    borderColor: "rgba(0,255,0,0.1)",
    label: 'Dataset 2',
  },
  {
    data: generateRandomArray(7),
    fill: false,
    lineTension: 0,
    backgroundColor: "rgba(255,0,0,1.0)",
    borderColor: "rgba(255,0,0,0.1)",
    label: 'Dataset 3',
  },
];

// HANDLING ALL WIDGETS BY CONGIF
var labelColors = ["#fb7277", "#33bdce", "#57cbbe", "#d0d1de"];
export const config = {

  widgets: [
    {
      type: "pie",
      title: "How did you hear about us?",
      labels: ["FB", "YT", "Insta", "TW"],
      dataSource: [
        {
          label: '# of Votes',
          data: generateRandomArray(4),
          backgroundColor: labelColors,
          borderColor: labelColors,
          borderWidth: 1,
        }
      ],
      componentName: 'Piechart',
      priority: 2,
    },
    {
      type: "line",
      title: "SALES VS COGS",
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      dataSource: LineChart, 
      componentName: 'Linechart',
      priority: 1,
    },
    {
      type: "numeric",
      title: "SALES TARGET",
      dataSource: getRandomValue(),
      priority: 4,
      componentName: 'ProgressCircle',
    },
    {
      type: "table",
      componentName: 'Table',
      dataSource: GridSource,
      priority: 3,
    },
    // Add more widgets as needed
  ],
};

// DATA SOURCE
// Utility function to generate a random value between min and max
function getRandomValue(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Utility function to generate a random array with specified length
function generateRandomArray(length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(getRandomValue());
  }
  return arr;
}
