import React, { useEffect, useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { getMessageStatisticsApi } from "../../../services/messageService";
import ResponseModel from "../../../models/response.model";
import toast from "react-hot-toast";
import { httpResponseHandler } from "../../../utils/responseHandlerUtil";
import { useNavigate } from "react-router-dom";
import { formatJoinedDate } from "../../../utils/commonUtil";
import { MessageModel } from "../../../models/messageInfo.model";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const DashboardScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [pieChartData, setPieChartData] = useState({});
  const [barChartData, setBarChartData] = useState({});
  const [lastMessagesData, setLastMessagesData] = useState([]);

  const navigator = useNavigate();

  const handleClickDetails = (id: string) => {
    if (id == null || id == "") return;

    navigator(`/admin/messages/${id}`);
  };

  useEffect(() => {
    setIsLoading(true);
    getMessageStatisticsApi()
      .then(({ data }: { data: ResponseModel }) => {
        const getMessageStatisticsResponseData = httpResponseHandler(data);
        console.log(getMessageStatisticsResponseData);

        const readUnreadData =
          getMessageStatisticsResponseData?.readUnreadCounts;
        const monthlyCountData =
          getMessageStatisticsResponseData?.monthlyCounts;
        const lastMessagesData =
          getMessageStatisticsResponseData?.latestMessages;
        setPieChartData({
          labels: ["Read", "Unread"],
          datasets: [
            {
              label: "Read vs Unread",
              data: [readUnreadData?.read, readUnreadData?.unread],
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
              ],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
              borderWidth: 1,
            },
          ],
        });

        setBarChartData({
          labels: Object.keys(monthlyCountData),
          datasets: [
            {
              label: "Monthly enquiries",
              data: Object.values(monthlyCountData),
              backgroundColor: "rgba(54, 162, 235, 0.6)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        });

        setLastMessagesData(lastMessagesData);
      })
      .catch((error) => toast.error("Fetching user list failed"))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    isLoading
    ?
    <div className="w-full h-full flex items-center justify-center"><span className="loader"></span></div>
    :
    <div className="bg-gray-100 m-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Dashboard Overview
        </h1>

        {/* Charts row */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          {/* Pie Chart */}
          <div className="bg-white rounded-lg shadow p-4 flex-1">
            <h2 className="text-lg font-semibold mb-4">Read and Unread</h2>
            <div className="h-64">
              <Pie
                data={pieChartData}
                options={{ maintainAspectRatio: false }}
              />
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white rounded-lg shadow p-4 flex-1">
            <h2 className="text-lg font-semibold mb-4">Monthly Enquiries</h2>
            <div className="h-64">
              <Bar
                data={barChartData}
                options={{
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Recent enquiries</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-b-zinc-300">
                  <th className="py-3 px-2 text-[14px] font-medium text-end w-1/12">
                    No.
                  </th>
                  <th className="py-3 px-2 text-[14px] font-medium text-end w-2/12">
                    ID
                  </th>
                  <th className="py-3 px-2 text-[14px] font-medium w-2/12 text-start">
                    Company
                  </th>
                  <th className="py-3 px-2 text-[14px] font-medium w-2/12 text-start">
                    Email
                  </th>
                  <th className="py-3 px-2 text-[14px] font-medium w-3/12 text-start">
                    Name
                  </th>
                  <th className="py-3 px-2 text-[14px] font-medium text-end w-2/12">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={7} className="py-3 text-center">
                      <span className="loader"></span>
                    </td>
                  </tr>
                ) : lastMessagesData.length > 0 ? (
                  lastMessagesData.map((message : MessageModel, index) => (
                    <tr
                      className={`${
                        index != lastMessagesData.length - 1 && "border-b"
                      } border-b-zinc-300`}
                      key={index}
                    >
                      <td
                        className={`py-3 px-2 text-[14px] ${
                          !message.read ? "font-bold" : "font-normal"
                        } text-zinc-600 text-end w-1/12`}
                      >
                        {index + 1}
                      </td>
                      <td
                        onClick={() => handleClickDetails(message.id)}
                        className={`py-3 px-2 text-[14px] ${
                          !message.read ? "font-bold" : "font-normal"
                        } cursor-pointer text-zinc-600 text-end w-2/12 hover:underline`}
                      >
                        {message.id}
                      </td>
                      <td
                        className={`py-3 px-2 text-[14px] ${
                          !message.read ? "font-bold" : "font-normal"
                        } text-zinc-600 w-2/12`}
                      >
                        {message.companyName}
                      </td>
                      <td
                        className={`py-3 px-2 text-[14px] ${
                          !message.read ? "font-bold" : "font-normal"
                        } text-zinc-600 w-2/12`}
                      >
                        {message.email}
                      </td>
                      <td
                        className={`py-3 px-2 text-[14px] ${
                          !message.read ? "font-bold" : "font-normal"
                        } text-zinc-600 w-2/12`}
                      >
                        {message.firstName + " " + message.lastName}
                      </td>
                      <td
                        className={`py-3 px-2 text-[14px] ${
                          !message.read ? "font-bold" : "font-normal"
                        } text-zinc-600 text-end w-1/12`}
                      >
                        {formatJoinedDate(message.createdAt)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="">
                    <td
                      className="py-3 text-[14px] text-zinc-600 text-center"
                      colSpan={6}
                    >
                      No message data.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
