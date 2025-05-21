'use client';

import { ScheduleRow } from "../utils/type";

export const scheduleTable = (schedule: ScheduleRow[]) => {

  return (
    <>
    <table className="table-auto w-full border-collapse border-2 border-gray-300">
      <thead>
        <tr>
          <th className="border w-[214px] h-[100px] border-gray-300 border-b-gray-300 p-4 bg-gray-100"></th>
          <th className="border w-[214px] h-[100px] border-x-gray-300 p-4 bg-[#580F26] text-white">
            <p className="font-bold text-4xl">Monday</p>
            <p className="font-zenKurenaido font-normal text-[24px]">月曜日</p>
          </th>
          <th className="border w-[214px] h-[100px] border-x-gray-300 p-4 bg-[#580F26] text-white">
            <p className="font-bold text-4xl">Tuesday</p>
            <p className="font-zenKurenaido font-normal text-[24px]">火曜日</p>
          </th>
          <th className="border w-[214px] h-[100px] border-x-gray-300 p-4 bg-[#580F26] text-white">
            <p className="font-bold text-4xl">Wednesday</p>
            <p className="font-zenKurenaido font-normal text-[24px]">水曜日</p>
          </th>
          <th className="border w-[214px] h-[100px] border-x-gray-300 p-4 bg-[#580F26] text-white">
            <p className="font-bold text-4xl">Thursday</p>
            <p className="font-zenKurenaido font-normal text-[24px]">木曜日</p>
          </th>
          <th className="border w-[214px] h-[100px] border-x-gray-300 p-4 bg-[#580F26] text-white">
            <p className="font-bold text-4xl">Friday</p>
            <p className="font-zenKurenaido font-normal text-[24px]">金曜日</p>
          </th>
        </tr>
      </thead>
      <tbody>
        {schedule.map((row, index) => (
          <tr key={index}>
            <td
              className="border border-gray-300 p-2 text-white text-center align-middle h-[100px]"
              style={{ backgroundColor: row.color }}
            >
              {row.time.en && (
                <p className="text-3xl">{row.time.en}</p>
              )}
              {row.time.jp && (
                <p className="text-base font-zenKurenaido">{row.time.jp}</p>
              )}
            </td>

            {/* Monday */}
            <td className="cursor-pointer border border-gray-300 p-4 text-center h-[100px] hover:bg-yellow-100 transition">
              {row.monday && 
                <a href={row.monday.url}>
                  {row.monday?.en && <p className="text-2xl font-bold">{row.monday.en}</p>}
                  {row.monday?.jp && <p className="font-zenKurenaido text-sm">{row.monday.jp}</p>}
                </a>
              }
            </td>

            {/* Tuesday */}
            <td className="cursor-pointer border border-gray-300 p-4 text-center h-[100px] hover:bg-yellow-100 transition">
              {row.tuesday && 
                <a href={row.tuesday.url}>
                  {row.tuesday.en && <p className="text-2xl font-bold">{row.tuesday.en}</p>}
                  {row.tuesday.jp && <p className="font-zenKurenaido text-sm">{row.tuesday.jp}</p>}
                </a>
              }
            </td>

            {/* Wednesday */}
            <td className="cursor-pointer border border-gray-300 p-4 text-center h-[100px] hover:bg-yellow-100 transition">
              {row.wednesday && 
                <a href={row.wednesday.url}>
                  {row.wednesday.en && <p className="text-2xl font-bold">{row.wednesday.en}</p>}
                  {row.wednesday.jp && <p className="font-zenKurenaido text-sm">{row.wednesday.jp}</p>}
                </a>
              }
            </td>

            {/* Thursday */}
            <td className="cursor-pointer border border-gray-300 p-4 text-center h-[100px] hover:bg-yellow-100 transition">
              {row.thursday && 
                <a href={row.thursday.url}>
                  {row.thursday.en && <p className="text-2xl font-bold">{row.thursday.en}</p>}
                  {row.thursday.jp && <p className="font-zenKurenaido text-sm">{row.thursday.jp}</p>}
                </a>
              }
            </td>

            {/* Friday */}
            <td className="cursor-pointer border border-gray-300 p-4 text-center h-[100px] hover:bg-yellow-100 transition">
              {row.friday && 
                <a href={row.friday.url}>
                  {row.friday.en && <p className="text-2xl font-bold">{row.friday.en}</p>}
                  {row.friday.jp && <p className="font-zenKurenaido text-sm">{row.friday.jp}</p>}
                </a>
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};